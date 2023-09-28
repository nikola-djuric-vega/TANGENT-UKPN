import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback, useEffect } from 'react'

const ReCaptcha = ({ onResult }: { onResult: (result: any) => void }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (executeRecaptcha) {
      const token = await executeRecaptcha('formLoad')

      const recaptchaPayload = await fetch('/api/recaptcha', {
        method: 'POST',
        body: JSON.stringify({
          token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await recaptchaPayload.json()

      onResult(result)
    }
  }, [executeRecaptcha])

  useEffect(() => {
    handleReCaptchaVerify()
  }, [executeRecaptcha])

  return null
}

export default ReCaptcha
