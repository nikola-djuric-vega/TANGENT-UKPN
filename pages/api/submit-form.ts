import { generateEmailSettings, generateEndpoint } from '_utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'
import { createApolloClient } from '_lib'
import { gql } from '@apollo/client'
// Had to use `require()` here as we do so in server.js
// `import` results in appInsights being undefined
const appInsights = require('applicationinsights')

const client = appInsights?.defaultClient

import {
  FormSectionFields,
  EmailSettingsData,
  FormDataSection,
  FormType,
} from '_types/CMS'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apolloClient = createApolloClient()
    const query = gql`
      fragment EmailSettings on EmailSettings {
        fromEmail
        toEmail
        emailBody
        emailSubject
        excludeFromEmail
        excludeSubmissionData
      }

      query {
        allContent(where: { id: "${req.body.id}" }, culture: "en", preview: false) {
          items {
            ...on EmailFormPage {
              emailDetails {
                ...EmailSettings
              }
            }
            ...on PSRFormPage {
              emailDetails {
                ...EmailSettings
              }
            }
            ...on PowerCutFormPage {
              emailDetails {
                ...EmailSettings
              }
            }
            ...on StreetFurnitureFormPage {
              emailDetails {
                ...EmailSettings
              }
            }
            ...on UnMeteredConnectionFormPage {
              emailDetails {
                ...EmailSettings
              }
            }
            ...on MeteredConnectionFormPage {
              emailDetails {
                ...EmailSettings
              }
            }
          }
        }
      }
    `

    // query email settings per given form
    const { data } = await apolloClient.query<EmailSettingsData>({
      query: query,
    })

    // check if we need to modify the enpoint based on the type of address picker used on PSR
    const shouldModifyEndpoint =
      req.body.pageType === FormType.REPORT_POWER_CUT &&
      req.body.Address?.manuallyEnteredAddress

    const alternativeToEmail = req.body.formData
      .map((sec: FormDataSection) => sec.sectionFields.flat())
      .flat()
      .find((field: FormSectionFields) => field.name === 'Email address')

    // generate the endpoint base on the condition above the pageType
    const endpoint = generateEndpoint(req.body.pageType, shouldModifyEndpoint)
    const emailDetails = data.allContent.items[0].emailDetails

    // generate object for email settings
    const emailSettings = generateEmailSettings(
      emailDetails,
      alternativeToEmail?.value,
      req.body.includeReference
    )

    if (client && req.body.pageType === FormType.PSR) {
      client.trackEvent({
        name: 'PSR form submission',
        properties: req.body,
      })
    }

    await axios
      .post(endpoint as string, {
        emailSettings: emailSettings,
        ...req.body,
      })
      .then((response) => {
        if (response.status === 200) {
          res.json(response.data)
        } else {
          res.status(response.status).end()
        }
      })
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
