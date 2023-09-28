import { RawHtml as RawHtmlType } from '_types/CMS/nodes/components/UKPN'
import Script from 'next/script'

enum Scripts {
  TRUST_PILOT = 'trustpilot',
}

const RawHtml = ({ rawHtml, scriptUrl }: RawHtmlType) => {
  const checkScript = (script: string | undefined) =>
    script?.includes(Scripts.TRUST_PILOT) ? 'beforeInteractive' : 'lazyOnload'

  return (
    <>
      {!!scriptUrl && (
        <Script strategy={checkScript(scriptUrl)} src={scriptUrl} />
      )}
      {!!rawHtml && <div dangerouslySetInnerHTML={{ __html: rawHtml }} />}
    </>
  )
}

export default RawHtml
