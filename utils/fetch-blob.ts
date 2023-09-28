import { BlobServiceClient } from '@azure/storage-blob'
import { streamToBuffer } from './stream-to-buffer'
import { transformRestData } from './transform-rest-data'

export const fetchBlob = async (path: string) => {
  const blobName = path === '/' ? '_homepage' : path.replace(/\//g, '_')
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.CMS_FALLBACK_STORAGE_STRING as string
  )

  const containerClient = blobServiceClient.getContainerClient(
    process.env.CMS_FALLBACK_STORAGE_CONTAINER as string
  )

  const blobClient = containerClient.getBlobClient(`${blobName}.json`)

  const data = await blobClient
    .download()
    .then(async (downloadBlockBlobResponse) => {
      if (downloadBlockBlobResponse.readableStreamBody) {
        const downloaded = (
          (await streamToBuffer(
            downloadBlockBlobResponse.readableStreamBody
          )) as Buffer
        ).toString()

        const pageData = transformRestData(JSON.parse(downloaded))

        return pageData
      }
    })
    .catch(() => {
      throw new Error(`Blob does not exist: ${blobClient.name}`)
    })

  return data
}
