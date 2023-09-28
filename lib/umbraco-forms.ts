import { Form } from '_types/CMS'
import axios from 'axios'

export const umbracoForms = async (id: string): Promise<Form> => {
  return await axios
    .get(`${process.env.UMBRACO_MANAGEMENT_API_URL}/forms/${id}`, {
      headers: {
        'umb-project-alias': process.env.CMS_PROJECT_ALIAS as string,
        'api-key': process.env.CMS_API_KEY as string,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      return null
    })
}
