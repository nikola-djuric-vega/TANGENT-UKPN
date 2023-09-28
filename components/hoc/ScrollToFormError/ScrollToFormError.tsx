import { useFormikContext } from 'formik'
import { useEffect } from 'react'

const ScrollToFormError = () => {
  const { submitCount, isValid } = useFormikContext()

  useEffect(() => {
    const allErrorMessages = document.querySelectorAll(
      "[aria-label^='Form field error']"
    )

    if (allErrorMessages.length) {
      allErrorMessages[0]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }
  }, [submitCount, isValid])

  return null
}

export default ScrollToFormError
