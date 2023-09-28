import { CustomFieldsItemsProvider } from '_context/custom-fields-items'
import { DictionaryItemsProvider } from 'context/dictionary-items'
import { UkpnGlobalDataProvider } from '_context/ukpn-global-data'
import { withApplicationInsights } from '_lib/appInsights-wrapper'
import { PowerCutListProvider } from '_context/power-cut-list'
import { PowerCutMapProvider } from '_context/power-cut-map'
import { SearchInputProvider } from '_context/search-input'
import { dataLayerSend } from '_utils/data-layer-send'
import { PowerCutProvider } from '_context/power-cut'
import { AppType } from 'next/dist/shared/lib/utils'
import { CivicCookie } from '_utils/civic-cookies'
import WebChat from '_atoms/WebChat/WebChat'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { PageProps } from '_types/CMS'
import Script from 'next/script'
import '../styles/main.scss'

import {
  UkpnSearchResultsProvider,
  UkpnSearchResultsState,
} from '_context/search-result-items'

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const [ukpnSearchResultsState, setUkpnSearchResults] =
    useState<UkpnSearchResultsState>({
      documents: [],
      total: 0,
    })

  const ukpnSearchResults = {
    ukpnSearchResultsState,
    setUkpnSearchResults,
  }

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [])

  const routeChangeComplete = (url: string) => {
    const trustPilotElem = document.getElementsByClassName('trustpilot-widget')

    dataLayerSend({
      event: 'virtual_pageview',
      page_url: url,
      page_title: document.title,
    })

    if (window.Trustpilot && trustPilotElem?.[0]) {
      window.Trustpilot.loadFromElement(trustPilotElem[0])
    }
  }

  return (
    <>
      <Script
        src="https://cc.cdn.civiccomputing.com/9/cookieControl-9.x.min.js"
        strategy="afterInteractive"
      />
      <Script
        type="text/javascript"
        src="https://static.queue-it.net/script/queueclient.min.js"
        strategy="beforeInteractive"
      />
      <Script
        data-queueit-c={process.env.NEXT_PUBLIC_QUEUE_IT_CONFIG}
        type="text/javascript"
        src="https://static.queue-it.net/script/queueconfigloader.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="gtmTag"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
        strategy="beforeInteractive"
      />
      {!!process.env.NEXT_PUBLIC_RUM_KEY && (
        <Script
          id="rumScript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(a,c,e,d,f,b,g){a.performance&&a.performance.timing&&a.performance.navigation&&(a[d]=a[d]||function(){(a[d].q=a[d].q||[]).push(arguments)},(b=c.createElement("script")).async=!0,b.setAttribute("src",e+f),c.getElementsByTagName("head")[0].appendChild(b),g=window.onerror,window.onerror=function(c,e,f,h,b){g&&g(c,e,f,h,b),b||(b=new Error(c)),(a[d].q=a[d].q||[]).push(["captureException",b])})}(window,document,"//static.site24x7rum.eu/beacon/site24x7rum-min.js?appKey=","s247r","${process.env.NEXT_PUBLIC_RUM_KEY}");`,
          }}
        />
      )}
      {pageProps.dictionaryItems && (
        <Script
          id="civicCookie"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: CivicCookie(pageProps.dictionaryItems),
          }}
        />
      )}
      {!!process.env.NEXT_PUBLIC_REACHDECK_INTEGRITY && (
        <Script
          src="https://www.browsealoud.com/plus/scripts/3.1.0/ba.js"
          crossOrigin="anonymous"
          integrity={process.env.NEXT_PUBLIC_REACHDECK_INTEGRITY}
          strategy="lazyOnload"
        />
      )}

      <DictionaryItemsProvider items={pageProps.dictionaryItems}>
        <UkpnGlobalDataProvider items={pageProps.globalData}>
          <CustomFieldsItemsProvider items={pageProps.customFieldsData}>
            <UkpnSearchResultsProvider items={ukpnSearchResults}>
              <SearchInputProvider>
                <PowerCutListProvider>
                  <PowerCutProvider>
                    <PowerCutMapProvider>
                      <WebChat />
                      <Component {...pageProps} />
                    </PowerCutMapProvider>
                  </PowerCutProvider>
                </PowerCutListProvider>
              </SearchInputProvider>
            </UkpnSearchResultsProvider>
          </CustomFieldsItemsProvider>
        </UkpnGlobalDataProvider>
      </DictionaryItemsProvider>

      {!!process.env.NEXT_PUBLIC_REACHDECK_INTEGRITY && (
        <div id="__ba_panel"></div>
      )}

      <div id="modal-root"></div>
    </>
  )
}

export default withApplicationInsights({
  connectionString: process.env.NEXT_PUBLIC_AI_CONNECTION_STRING,
  isEnabled: process.env.NODE_ENV === 'production',
})(MyApp as AppType)
