import { useUkpnGlobalData } from '_context/ukpn-global-data'
import Script from 'next/script'

const WebChat = () => {
  const globalData = useUkpnGlobalData()

  const toolNumber = process.env.NEXT_PUBLIC_WEB_CHAT_TOOL_NUMBER

  if (
    globalData?.allSiteSettings?.enableNewWebChat &&
    !!globalData?.allSiteSettings?.click4AssistanceId
  ) {
    return (
      <>
        <Script
          src="https://v4in1-si.click4assistance.co.uk/SI.js"
          strategy="lazyOnload"
          defer={true}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `function InitialiseC4A() {
              /* Chat Tool */
              var Tool${toolNumber} = new C4A.Tools(${toolNumber}); 
              C4A.Run('${globalData?.allSiteSettings?.click4AssistanceId}');
            }`,
          }}
          strategy="lazyOnload"
          id="webChat"
        />
        <noscript>
          <a
            href="https://www.click4assistance.co.uk/add-live-chat-software-click4assistance-uk"
            rel="noreferrer"
            target="_blank"
            style={{
              fontSize: '10px',
              position: 'fixed',
              bottom: '2px',
              right: '2px',
            }}
          >
            Click4Assistance UK Live Chat Software
          </a>
        </noscript>
      </>
    )
  } else {
    return null
  }
}

export default WebChat
