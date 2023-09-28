import { BlobServiceClient } from '@azure/storage-blob'
import { streamToBuffer } from './stream-to-buffer'
import { transformRestData } from './transform-rest-data'

export const fetchBlob = async (path: string) => {
  const incidentsBlobName =
    path === '/' ? '_homepage' : path.replace(/\//g, '_')
  const incidentsBlobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.BLOB_INCIDENTS_STRING as string
  )

  const containerClient = incidentsBlobServiceClient.getContainerClient(
    process.env.BLOB_INCIDENTS_CONTAINER as string
  )

  const incidentsBlobClient = containerClient.getBlobClient(
    `${incidentsBlobName}.json`
  )

  const data = await incidentsBlobClient
    .download()
    .then(async (downloadBlockBlobResponse) => {
      if (downloadBlockBlobResponse.readableStreamBody) {
        const downloaded = (
          (await streamToBuffer(
            downloadBlockBlobResponse.readableStreamBody
          )) as Buffer
        ).toString()

        const incidentsData = transformRestData(JSON.parse(downloaded))

        return incidentsData
      }
    })
    .catch(() => {
      throw new Error(`Blob does not exist: ${incidentsBlobClient.name}`)
    })

  return data
}
