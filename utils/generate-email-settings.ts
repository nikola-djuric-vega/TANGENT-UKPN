import { EmailSettings } from '_types/CMS/compositions'

export const generateEmailSettings = (
  settings: EmailSettings[],
  toEmail: string,
  includeReference: boolean
) =>
  settings.map((email) => {
    return {
      to: !email.toEmail && toEmail ? toEmail : email.toEmail,
      from: email.fromEmail,
      subject: email.emailSubject,
      body: email.emailBody,
      excludeFromEmail: email.excludeFromEmail.join(';'),
      excludeReference: !includeReference || email.excludeReference,
      excludeSubmissionData: email.excludeSubmissionData,
    }
  })
