import { transformString } from './tranform-string'
import { DictionaryItems } from '_types/local'

export const CivicCookie = (dictionary: DictionaryItems) => {
  return `
    var currentDomain = window.location.hostname || ''
    function deleteCookie(name, domain, path) {
      if(path === undefined) {
        path = '/'
      }

      document.cookie = name + '=; path=' + path + '; domain=' + domain + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;' 
    }

    var config = {
      apiKey: '${process.env.NEXT_PUBLIC_CIVIC_COOKIE_API_KEY}',
      product: 'PRO',
      necessaryCookies: [
        'QueueITAccepted*',
      ],
      optionalCookies: [
        {
          name: 'analytics',
          label: '${transformString(dictionary.analyticsTitle)}',
          description: '${transformString(dictionary.analyticsDescription)}',
          recommendedState: true,
          cookies: [
            '_ga',
            '_gid',
            '_gat_UA-*',
            '__utma',
            '__utmb',
            '__utmc',
            '__utmt',
            '__utmv',
            '__utmz',
            '_hjid',
            '_hjIncludedInPageviewSample',
            '_hjIncludedInSessionSample',
            '_hjAbsoluteSessionInProgress',
            '_hjFirstSeen',
          ],
          onAccept: function () {
            // Notify GTM with event to allow analytics
            window.dataLayer.push({ event: 'analytics_consent_given' })
          },
          onRevoke: function () {
            window.dataLayer.push({ event: 'analytics_consent_rejected' })
          },
        },
        {
          name: 'marketing',
          label: '${transformString(dictionary.marketingTitle)}',
          description: '${transformString(dictionary.marketingDescription)}',
          recommendedState: true,
          cookies: [
            'ai_session',
            'ai_user',
            'SC_ANALYTICS_GLOBAL_COOKIE',
            '1P_JAR',
          ],
          onAccept: function () {
            // Notify GTM with event to allow marketing
            window.dataLayer.push({event: 'marketing_consent_given' })
          },
          onRevoke: function () {
            // Notify GTM with event to disallow marketing
            window.dataLayer.push({ event: 'marketing_consent_rejected' })
            deleteCookie('ai_session', currentDomain)
            deleteCookie('ai_user', currentDomain)
            deleteCookie('SC_ANALYTICS_GLOBAL_COOKIE', currentDomain)
          },
        },
      ],
      initialState: 'notify',
      position: 'LEFT',
      theme: 'DARK',
      setInnerHTML: true,
      rejectButton: false,
      branding: {
        backgroundColor: '#30354a',
        fontSize: '1rem',
        toggleColor: '#fff',
        toggleBackground: 'rgba(255,255,255,0.2)',
        removeAbout: true,
      },
      text: {
        title:
          "<span id='ccc-title__logo'><svg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 138 59' xml:space='preserve'><path fill='#fff' d='M8.4 49.9c-1.5 0-2.5 1.1-2.5 3 0 2 1 3 2.7 3 .9 0 1.5-.2 1.9-.4l-.3-.8c-.3.2-.8.3-1.5.3-1 0-1.5-.5-1.6-1.6l3.6-.5c0-1.9-.8-3-2.3-3zM7 52.8c0-1.4.5-2 1.3-2 .7 0 1.1.5 1.1 1.7l-2.4.3zm32.8-19.9c-2.6 0-3.9 2.1-3.9 4.8 0 2.8 1.3 4.8 3.9 4.8 2.6 0 3.9-2.1 3.9-4.8s-1.2-4.8-3.9-4.8zm0 8.3c-1.5 0-1.8-1.6-1.8-3.4s.3-3.5 1.8-3.5 1.8 1.7 1.8 3.5c0 1.7-.3 3.4-1.8 3.4zm-6.6-13.8c1.4 0 2.4-.3 3.1-.7l-.5-1.3c-.5.3-1.3.5-2.4.5-1.5 0-2.4-.9-2.5-2.6l5.7-.8c.1-3.1-1.3-4.8-3.7-4.8-2.4 0-4 1.8-4 4.8 0 3.2 1.7 4.9 4.3 4.9zm-.4-8.4c1.2 0 1.8.8 1.8 2.6l-3.9.6c0-2.2.9-3.2 2.1-3.2zM4.2 12.2c2.3 0 3.9-1.5 3.9-3.6V.1H6v8.4c0 1.3-.8 2-1.8 2s-1.8-.7-1.8-2V.1H.2v8.4c0 2.2 1.6 3.7 4 3.7zm13.3 29.7-.5-1.3c-.5.3-1.3.5-2.4.5-1.5 0-2.4-.9-2.5-2.6l5.7-.8c.1-3.1-1.3-4.8-3.7-4.8-2.4 0-4 1.8-4 4.8 0 3.1 1.7 4.9 4.3 4.9 1.5 0 2.5-.3 3.1-.7zM14 34.2c1.2 0 1.8.8 1.8 2.6l-3.8.7c0-2.3.8-3.3 2-3.3zM2 48.3c-.9 0-1.5.2-2 .4v6.8c.5.3 1.2.5 2.1.5 2.2 0 3.1-1.7 3.1-3.9s-.9-3.8-3.2-3.8zm.1 6.7c-.3 0-.6-.1-.7-.1v-5.6c.2-.1.4-.1.7-.1 1.2 0 1.8.9 1.8 2.8-.1 2.1-.5 3-1.8 3zm16.5-1.2-.2.8s0-.4-.1-.8l-1-3.8h-1.4l1.9 5.8H19l1.9-5.8h-1.2l-1.1 3.8zm21.1-26.6v-7.9c.5-.3 1.3-.3 2-.1l.4-1.5c-2.3 0-3.5.2-4.5.7v8.8h2.1zm-3.9 5.9H34l-1.4 6-.2 1.2c0-.4-.1-.8-.2-1.2l-1.6-6h-1.8l-1.6 6c-.2.7-.2 1.2-.2 1.2s0-.5-.2-1.2l-1.4-6h-2.1l2.6 9.3h1.9l1.6-5.8c.2-.6.2-1.2.2-1.2s0 .6.2 1.2l1.6 5.8h1.8l2.6-9.3zm-32.2-18c-1.4 0-2.5.3-3.3.7v11.4h2.1v-4.7h.5c3.5.3 5-1.5 5-3.7 0-2.1-1.3-3.7-4.3-3.7zm-.7 6.1h-.5v-4.6c.2-.1.6-.2 1.1-.2 1.6 0 2.3.8 2.3 2.4 0 1.6-.8 2.6-2.9 2.4zm11.8 26.5c-.4 0-.7.3-.7.7 0 .4.3.6.7.6.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7zM2.1 34.8c0-.7-.1-1.4-.1-1.4.2.5.4.9.7 1.3l4.5 7.7H9V30.5H7.2v7.2c0 .7.1 1.3.1 1.3s-.2-.5-.6-1.2l-4.3-7.2H.2v11.9h1.9v-7.7zM14 55.9h1.3v-5.8H14v5.8zm-2.4 0h1.3v-8.5h-1.3v8.5zm63.9-6c-1.2 0-2.2 1-2.2 3 0 2.2 1.1 3 2.5 3 .7 0 1.3-.2 1.6-.4l-.2-.4c-.3.2-.7.3-1.4.3-1.2 0-1.9-.8-2-2.3l3.7-.5c.1-1.9-.7-2.7-2-2.7zm.1.5c.9 0 1.5.5 1.5 2l-3.2.5c0-1.8.7-2.5 1.7-2.5zm8.1-2h-.2l-.5.3v1.4h-.7v.3h.7v4.1c0 .6.3 1.4 1.3 1.4.1 0 .2 0 .4-.1v-.4h-.2c-.6 0-.8-.4-.8-.9v-4.2h1.1V50h-1.1v-1.6zm-3 2c.5 0 .8.2 1 .3l.2-.4c-.2-.1-.5-.4-1.2-.4-1.3 0-2.2 1.1-2.2 3 0 1.8.9 3 2.1 3 .6 0 1-.2 1.2-.4l-.2-.4c-.2.2-.6.3-1 .3-1.1 0-1.6-1.1-1.6-2.6 0-1.3.4-2.4 1.7-2.4zm-62-23.2h1.9l1.6-5.8c.2-.6.2-1.2.2-1.2s0 .6.2 1.2l1.6 5.8h1.9l2.6-9.3h-1.9l-1.4 6-.2 1.2-.2-1.2-1.6-6h-1.8l-1.6 6c-.2.7-.2 1.2-.2 1.2 0-.4-.1-.8-.2-1.2l-1.4-6h-2.1l2.6 9.3zm82.5 27.4c-.1.4-.2.6-.2.6s0-.3-.1-.6L99.5 50h-.6l2 5.8-1 2.3h.6l2.7-8.1h-.5l-1.5 4.6zm-54.4-20c.5-.3 1.3-.3 2-.1l.4-1.5c-2.4-.1-3.5.2-4.5.7v8.8h2.1v-7.9zm50.6 13.8h-.1l-.6.2V50H96v.3h.7v4.1c0 .6.3 1.4 1.3 1.4.1 0 .2 0 .4-.1v-.4h-.2c-.6 0-.8-.4-.8-.9v-4.2h1.1v-.3h-1.1v-1.5zm-8.9 7.5h.6v-5.8h-.6v5.8zm-3 0h.6v-5.3c.3-.2.9-.3 1.4-.2l.2-.5c-1.3 0-1.7.2-2.2.5v5.5zm-2.6-25.5c-4.4 1-9.1 1.9-13.3 2.9-1.2.3-2.7.6-3.1 1-.4.3 0 1 1.9 1.1 1.3 0 3.2-.2 4.3-.4 4.6-.6 9.2-1.4 13.7-2.4C144.9 19.4 117.4 2 59.6 2c-4.9 0-10.1.1-15.4.4-9.7.5-17.9 1.5-17.7 1.6l.5.1c.2.1 8.2-.7 17.1-1.1 62.7-2.7 95.6 14.8 38.8 27.4zM61.3 37c-.8-.3-1.4-.7-1.4-1.5 0-.7.5-1.2 1.3-1.2.5 0 1.1.2 1.5.5l.5-1.2c-.6-.4-1.4-.7-2.4-.7-1.8 0-3 1.2-3 2.7 0 1 .4 1.9 2.1 2.6 1 .4 1.4.7 1.4 1.5s-.6 1.3-1.4 1.3c-.8 0-1.4-.3-1.7-.5l-.6 1.3c.6.4 1.5.7 2.6.7 2 0 3.3-1.3 3.3-2.8 0-1-.4-2-2.2-2.7zm-39.4 5.5c.5 0 .9-.1 1.1-.2V41c-.2.1-.3.1-.5.1-.7 0-1-.5-1-1.2v-5.4h1.4v-1.4h-1.5v-2.6l-2.1.6v2.1h-1v1.3h1V40c0 1.3.7 2.5 2.6 2.5zm31.9-5.1 3.2-4.3h-2.1l-3 4.2v-8.4h-2.1v13.5h2.1v-4.7l3.1 4.7h2.4l-3.6-5zm-41.7-10c2.6 0 3.9-2.1 3.9-4.8 0-2.8-1.2-4.8-3.9-4.8-2.6 0-3.9 2.1-3.9 4.8 0 2.7 1.2 4.8 3.9 4.8zm0-8.3c1.5 0 1.8 1.7 1.8 3.5s-.3 3.4-1.8 3.4-1.8-1.6-1.8-3.4c0-1.8.3-3.5 1.8-3.5zM11.9 6l3.4 6h2.5l-3.9-6.4L17.6.1h-2.3l-3.4 5.4V.1H9.7V12h2.2V6zm82.9 42c-.2 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4-.2-.4-.4-.4zM66.6 0c-7.3 0-14.7.2-22 .7-11.7.7-21.3 2.1-21.1 2.1l.5.2c.2.1 9.6-1.1 20.5-1.7 76.8-4.5 123.6 17.8 48 35.2-5.8 1.3-12 2.6-17.6 3.9-1.3.3-3.3.7-3.6 1.1s.8 1.2 3.5.9c1.9-.2 3.8-.5 5.5-.7 5.2-.8 10.4-1.8 15.6-3C170.8 21.4 135.1 0 66.6 0zM48.2 54.6c-.2.4-.2.7-.2.7s0-.3-.1-.6l-1.4-4.6h-.6l2 5.8-1 2.3h.6l2.7-8.1h-.5l-1.5 4.5zm46.3 1.3h.6v-5.8h-.6v5.8zm-64.4 0h1.3v-5.8h-1.3v5.8zm.6-8.2c-.4 0-.7.3-.7.7 0 .4.3.6.7.6.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7zm30.2 8.2h.6v-5.3c.3-.2.9-.3 1.4-.2l.2-.5c-1.3 0-1.7.1-2.2.4v5.6zM88.8 48c-.2 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4c-.1-.2-.2-.4-.4-.4zm3.6 7.4c-1.1 0-1.6-1.1-1.6-2.6 0-1.3.4-2.4 1.6-2.4.5 0 .8.2 1 .3l.2-.4c-.2-.1-.5-.4-1.2-.4-1.3 0-2.2 1.1-2.2 3 0 1.8.9 3 2.1 3 .6 0 1-.2 1.3-.4l-.2-.4c-.2.2-.5.3-1 .3zM62.3 27.7c.8.5 2.2.6 5.3.3 3.1-.3 6.2-.8 9.3-1.5C119.7 17.5 100.4 4 52.4 4c-2.8 0-5.6 0-8.6.1-7.8.3-14.5.9-14.3 1 .2.1.3.1.5.2s6.7-.4 13.8-.5C93 3.7 112.2 16.5 73.5 24.3c-3.2.6-6.6 1.3-9.3 2-1.4.4-2.6 1-1.9 1.4zM26.7 50.4v5.5H28V51c.3-.2.8-.2 1.2 0l.3-1c-1.4-.1-2.2.1-2.8.4zm26-.5c-1.5 0-2.1 1.3-2.1 3s.6 3 2.1 3 2.1-1.3 2.1-3-.6-3-2.1-3zm0 5.7c-1.3 0-1.6-1.3-1.6-2.6 0-1.2.2-2.7 1.6-2.7 1.3 0 1.5 1.4 1.5 2.7.1 1.2-.2 2.6-1.5 2.6zm-14.9-2.5c0 1.8.9 2.8 2.3 2.8.5 0 .9-.1 1.1-.2v.4c0 .8-.4 1.3-1.3 1.3-.5 0-1.1-.2-1.4-.3l-.4.9c.4.2 1.2.4 2 .4 1.4 0 2.4-.8 2.4-2.4v-5.6c-.4-.2-1-.4-1.9-.4-1.8-.1-2.8 1.2-2.8 3.1zm3.5 1.9c-.2.1-.4.2-.7.2-1 0-1.4-.7-1.4-2.1 0-1.5.4-2.3 1.4-2.3.3 0 .5 0 .7.1V55zm30.3.9h.6v-8.5h-.6v8.5zm-36.9-6c-1 0-1.7.2-2.3.4v5.5h1.3v-4.9c.3-.1.6-.2.9-.2.8 0 1 .5 1 1v4.1H37v-4.1c0-.9-.6-1.8-2.3-1.8zM59 55.3c-.3.2-.7.3-1.2.3-.9 0-1.4-.6-1.4-1.4v-4.1h-.6v4.1c0 1 .5 1.8 1.9 1.8.9 0 1.5-.2 1.9-.5V50H59v5.3zm3.7-30.8c3.2 0 7-.6 9.4-1.1 35.1-6.9 20.1-18.5-23.6-18.5h-4.9c-6.8.2-12.9.7-12.6.7.1.1.3.1.5.2s6-.2 12.1-.2c42.5-.3 54.9 10.2 25 15.6-2.7.5-7.3 1.2-8.2 1.9-.7.4-1 1.5 2.3 1.4zm28.5 11.2C158 20.4 126.3 1 63.2 1c-6 0-12.3.2-18.8.5-10.7.7-19.6 1.8-19.4 1.9l.5.2c.2.1 8.9-.9 18.8-1.4C114.1-1.4 154 18.5 87.7 33.5c-5 1.1-10.3 2.2-15.1 3.4-1.4.3-2.8.7-3.6 1-.7.3-.6 1.1 1.5 1.2 1.2 0 3.5-.3 4.5-.4 5.5-.8 10.8-1.8 16.2-3zM23.6 49.9c-1.5 0-2.5 1.1-2.5 3 0 2 1 3 2.7 3 .9 0 1.5-.2 1.9-.4l-.3-.8c-.3.2-.8.3-1.5.3-1 0-1.5-.5-1.6-1.6l3.6-.5c.1-1.9-.8-3-2.3-3zm-1.3 2.9c0-1.4.5-2 1.3-2 .7 0 1.1.5 1.1 1.7l-2.4.3zm33.4-36.1c1.4.4 3.8.7 6.5.3 18.7-2.1 15-9.7-18.9-10.4h-3.5c-3.4 0-6 .1-5.8.1.2.1.3.1.5.2s4.5.1 8.7.3c11.7.5 24.4 2.2 23.7 5.2-.1.5-.8 1.2-2.7 1.6-2.1.5-5.6.6-7.9 1.1-2.3.6-2 1.2-.6 1.6zm3.7 4c2.3.2 5.7-.2 7.7-.5 27.2-4.6 17-14.4-23.2-14.4h-.4c-5.9 0-11.2.3-11 .4.2.1.3.1.5.2h10.4c35.6.6 41 8.8 20.1 11.5-2.7.3-5.1.8-6.1 1.4-.8.5-.1 1.2 2 1.4zm9 29.2c-1.2 0-2.2 1-2.2 3 0 2.2 1.1 3 2.5 3 .7 0 1.3-.2 1.6-.4l-.2-.4c-.3.2-.7.3-1.4.3-1.2 0-1.9-.8-2-2.3l3.7-.5c.1-1.9-.8-2.7-2-2.7zm-1.7 3c0-1.8.7-2.5 1.6-2.5.9 0 1.5.5 1.5 2l-3.1.5zM69 31.6c4.7-.5 9-1.3 12.6-2.1C132.3 18.4 108.8 3 56.1 3c-3.9 0-7.9.1-12 .3-8.8.4-16.2 1.2-16 1.2.2.1.3.1.5.2S36 4.2 44 3.9C99.9 2 126 17.1 78.3 27.3c-4.3.9-9.4 1.8-12.9 2.9-2.1.6-.6 1.9 3.6 1.4zM56 12.3c-1.8.1-2.6.3-2.8.7-.1.4.9.9 2 1.1 1.9.4 5.7-.2 7.2-.6 3.6-.9 2-2.3.2-3C58.9 8.9 51.1 8 43 7.5c-2.8-.2-5.5-.2-6.8-.2h-.8c.2.1.3.1.5.2s3.8.3 7.1.6c4.7.4 9.4 1 12.5 1.9 1.6.5 5.8 1.9.5 2.3z'/></svg></span>${transformString(
            dictionary.cookieTitle
          )}",
        intro: '${transformString(dictionary.cookieIntro)}',
        necessaryTitle: '${transformString(dictionary.necessaryTitle)}',
        necessaryDescription: '${transformString(
          dictionary.necessaryDescription
        )}',
        thirdPartyTitle: '${transformString(dictionary.thirdPartyTitle)}',
        thirdPartyDescription: '${transformString(
          dictionary.thirdPartyDescription
        )}',
        notifyTitle:
          "<span id='ccc-title__logo'><svg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 138 59' xml:space='preserve'><path fill='#fff' d='M8.4 49.9c-1.5 0-2.5 1.1-2.5 3 0 2 1 3 2.7 3 .9 0 1.5-.2 1.9-.4l-.3-.8c-.3.2-.8.3-1.5.3-1 0-1.5-.5-1.6-1.6l3.6-.5c0-1.9-.8-3-2.3-3zM7 52.8c0-1.4.5-2 1.3-2 .7 0 1.1.5 1.1 1.7l-2.4.3zm32.8-19.9c-2.6 0-3.9 2.1-3.9 4.8 0 2.8 1.3 4.8 3.9 4.8 2.6 0 3.9-2.1 3.9-4.8s-1.2-4.8-3.9-4.8zm0 8.3c-1.5 0-1.8-1.6-1.8-3.4s.3-3.5 1.8-3.5 1.8 1.7 1.8 3.5c0 1.7-.3 3.4-1.8 3.4zm-6.6-13.8c1.4 0 2.4-.3 3.1-.7l-.5-1.3c-.5.3-1.3.5-2.4.5-1.5 0-2.4-.9-2.5-2.6l5.7-.8c.1-3.1-1.3-4.8-3.7-4.8-2.4 0-4 1.8-4 4.8 0 3.2 1.7 4.9 4.3 4.9zm-.4-8.4c1.2 0 1.8.8 1.8 2.6l-3.9.6c0-2.2.9-3.2 2.1-3.2zM4.2 12.2c2.3 0 3.9-1.5 3.9-3.6V.1H6v8.4c0 1.3-.8 2-1.8 2s-1.8-.7-1.8-2V.1H.2v8.4c0 2.2 1.6 3.7 4 3.7zm13.3 29.7-.5-1.3c-.5.3-1.3.5-2.4.5-1.5 0-2.4-.9-2.5-2.6l5.7-.8c.1-3.1-1.3-4.8-3.7-4.8-2.4 0-4 1.8-4 4.8 0 3.1 1.7 4.9 4.3 4.9 1.5 0 2.5-.3 3.1-.7zM14 34.2c1.2 0 1.8.8 1.8 2.6l-3.8.7c0-2.3.8-3.3 2-3.3zM2 48.3c-.9 0-1.5.2-2 .4v6.8c.5.3 1.2.5 2.1.5 2.2 0 3.1-1.7 3.1-3.9s-.9-3.8-3.2-3.8zm.1 6.7c-.3 0-.6-.1-.7-.1v-5.6c.2-.1.4-.1.7-.1 1.2 0 1.8.9 1.8 2.8-.1 2.1-.5 3-1.8 3zm16.5-1.2-.2.8s0-.4-.1-.8l-1-3.8h-1.4l1.9 5.8H19l1.9-5.8h-1.2l-1.1 3.8zm21.1-26.6v-7.9c.5-.3 1.3-.3 2-.1l.4-1.5c-2.3 0-3.5.2-4.5.7v8.8h2.1zm-3.9 5.9H34l-1.4 6-.2 1.2c0-.4-.1-.8-.2-1.2l-1.6-6h-1.8l-1.6 6c-.2.7-.2 1.2-.2 1.2s0-.5-.2-1.2l-1.4-6h-2.1l2.6 9.3h1.9l1.6-5.8c.2-.6.2-1.2.2-1.2s0 .6.2 1.2l1.6 5.8h1.8l2.6-9.3zm-32.2-18c-1.4 0-2.5.3-3.3.7v11.4h2.1v-4.7h.5c3.5.3 5-1.5 5-3.7 0-2.1-1.3-3.7-4.3-3.7zm-.7 6.1h-.5v-4.6c.2-.1.6-.2 1.1-.2 1.6 0 2.3.8 2.3 2.4 0 1.6-.8 2.6-2.9 2.4zm11.8 26.5c-.4 0-.7.3-.7.7 0 .4.3.6.7.6.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7zM2.1 34.8c0-.7-.1-1.4-.1-1.4.2.5.4.9.7 1.3l4.5 7.7H9V30.5H7.2v7.2c0 .7.1 1.3.1 1.3s-.2-.5-.6-1.2l-4.3-7.2H.2v11.9h1.9v-7.7zM14 55.9h1.3v-5.8H14v5.8zm-2.4 0h1.3v-8.5h-1.3v8.5zm63.9-6c-1.2 0-2.2 1-2.2 3 0 2.2 1.1 3 2.5 3 .7 0 1.3-.2 1.6-.4l-.2-.4c-.3.2-.7.3-1.4.3-1.2 0-1.9-.8-2-2.3l3.7-.5c.1-1.9-.7-2.7-2-2.7zm.1.5c.9 0 1.5.5 1.5 2l-3.2.5c0-1.8.7-2.5 1.7-2.5zm8.1-2h-.2l-.5.3v1.4h-.7v.3h.7v4.1c0 .6.3 1.4 1.3 1.4.1 0 .2 0 .4-.1v-.4h-.2c-.6 0-.8-.4-.8-.9v-4.2h1.1V50h-1.1v-1.6zm-3 2c.5 0 .8.2 1 .3l.2-.4c-.2-.1-.5-.4-1.2-.4-1.3 0-2.2 1.1-2.2 3 0 1.8.9 3 2.1 3 .6 0 1-.2 1.2-.4l-.2-.4c-.2.2-.6.3-1 .3-1.1 0-1.6-1.1-1.6-2.6 0-1.3.4-2.4 1.7-2.4zm-62-23.2h1.9l1.6-5.8c.2-.6.2-1.2.2-1.2s0 .6.2 1.2l1.6 5.8h1.9l2.6-9.3h-1.9l-1.4 6-.2 1.2-.2-1.2-1.6-6h-1.8l-1.6 6c-.2.7-.2 1.2-.2 1.2 0-.4-.1-.8-.2-1.2l-1.4-6h-2.1l2.6 9.3zm82.5 27.4c-.1.4-.2.6-.2.6s0-.3-.1-.6L99.5 50h-.6l2 5.8-1 2.3h.6l2.7-8.1h-.5l-1.5 4.6zm-54.4-20c.5-.3 1.3-.3 2-.1l.4-1.5c-2.4-.1-3.5.2-4.5.7v8.8h2.1v-7.9zm50.6 13.8h-.1l-.6.2V50H96v.3h.7v4.1c0 .6.3 1.4 1.3 1.4.1 0 .2 0 .4-.1v-.4h-.2c-.6 0-.8-.4-.8-.9v-4.2h1.1v-.3h-1.1v-1.5zm-8.9 7.5h.6v-5.8h-.6v5.8zm-3 0h.6v-5.3c.3-.2.9-.3 1.4-.2l.2-.5c-1.3 0-1.7.2-2.2.5v5.5zm-2.6-25.5c-4.4 1-9.1 1.9-13.3 2.9-1.2.3-2.7.6-3.1 1-.4.3 0 1 1.9 1.1 1.3 0 3.2-.2 4.3-.4 4.6-.6 9.2-1.4 13.7-2.4C144.9 19.4 117.4 2 59.6 2c-4.9 0-10.1.1-15.4.4-9.7.5-17.9 1.5-17.7 1.6l.5.1c.2.1 8.2-.7 17.1-1.1 62.7-2.7 95.6 14.8 38.8 27.4zM61.3 37c-.8-.3-1.4-.7-1.4-1.5 0-.7.5-1.2 1.3-1.2.5 0 1.1.2 1.5.5l.5-1.2c-.6-.4-1.4-.7-2.4-.7-1.8 0-3 1.2-3 2.7 0 1 .4 1.9 2.1 2.6 1 .4 1.4.7 1.4 1.5s-.6 1.3-1.4 1.3c-.8 0-1.4-.3-1.7-.5l-.6 1.3c.6.4 1.5.7 2.6.7 2 0 3.3-1.3 3.3-2.8 0-1-.4-2-2.2-2.7zm-39.4 5.5c.5 0 .9-.1 1.1-.2V41c-.2.1-.3.1-.5.1-.7 0-1-.5-1-1.2v-5.4h1.4v-1.4h-1.5v-2.6l-2.1.6v2.1h-1v1.3h1V40c0 1.3.7 2.5 2.6 2.5zm31.9-5.1 3.2-4.3h-2.1l-3 4.2v-8.4h-2.1v13.5h2.1v-4.7l3.1 4.7h2.4l-3.6-5zm-41.7-10c2.6 0 3.9-2.1 3.9-4.8 0-2.8-1.2-4.8-3.9-4.8-2.6 0-3.9 2.1-3.9 4.8 0 2.7 1.2 4.8 3.9 4.8zm0-8.3c1.5 0 1.8 1.7 1.8 3.5s-.3 3.4-1.8 3.4-1.8-1.6-1.8-3.4c0-1.8.3-3.5 1.8-3.5zM11.9 6l3.4 6h2.5l-3.9-6.4L17.6.1h-2.3l-3.4 5.4V.1H9.7V12h2.2V6zm82.9 42c-.2 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4-.2-.4-.4-.4zM66.6 0c-7.3 0-14.7.2-22 .7-11.7.7-21.3 2.1-21.1 2.1l.5.2c.2.1 9.6-1.1 20.5-1.7 76.8-4.5 123.6 17.8 48 35.2-5.8 1.3-12 2.6-17.6 3.9-1.3.3-3.3.7-3.6 1.1s.8 1.2 3.5.9c1.9-.2 3.8-.5 5.5-.7 5.2-.8 10.4-1.8 15.6-3C170.8 21.4 135.1 0 66.6 0zM48.2 54.6c-.2.4-.2.7-.2.7s0-.3-.1-.6l-1.4-4.6h-.6l2 5.8-1 2.3h.6l2.7-8.1h-.5l-1.5 4.5zm46.3 1.3h.6v-5.8h-.6v5.8zm-64.4 0h1.3v-5.8h-1.3v5.8zm.6-8.2c-.4 0-.7.3-.7.7 0 .4.3.6.7.6.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7zm30.2 8.2h.6v-5.3c.3-.2.9-.3 1.4-.2l.2-.5c-1.3 0-1.7.1-2.2.4v5.6zM88.8 48c-.2 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4c-.1-.2-.2-.4-.4-.4zm3.6 7.4c-1.1 0-1.6-1.1-1.6-2.6 0-1.3.4-2.4 1.6-2.4.5 0 .8.2 1 .3l.2-.4c-.2-.1-.5-.4-1.2-.4-1.3 0-2.2 1.1-2.2 3 0 1.8.9 3 2.1 3 .6 0 1-.2 1.3-.4l-.2-.4c-.2.2-.5.3-1 .3zM62.3 27.7c.8.5 2.2.6 5.3.3 3.1-.3 6.2-.8 9.3-1.5C119.7 17.5 100.4 4 52.4 4c-2.8 0-5.6 0-8.6.1-7.8.3-14.5.9-14.3 1 .2.1.3.1.5.2s6.7-.4 13.8-.5C93 3.7 112.2 16.5 73.5 24.3c-3.2.6-6.6 1.3-9.3 2-1.4.4-2.6 1-1.9 1.4zM26.7 50.4v5.5H28V51c.3-.2.8-.2 1.2 0l.3-1c-1.4-.1-2.2.1-2.8.4zm26-.5c-1.5 0-2.1 1.3-2.1 3s.6 3 2.1 3 2.1-1.3 2.1-3-.6-3-2.1-3zm0 5.7c-1.3 0-1.6-1.3-1.6-2.6 0-1.2.2-2.7 1.6-2.7 1.3 0 1.5 1.4 1.5 2.7.1 1.2-.2 2.6-1.5 2.6zm-14.9-2.5c0 1.8.9 2.8 2.3 2.8.5 0 .9-.1 1.1-.2v.4c0 .8-.4 1.3-1.3 1.3-.5 0-1.1-.2-1.4-.3l-.4.9c.4.2 1.2.4 2 .4 1.4 0 2.4-.8 2.4-2.4v-5.6c-.4-.2-1-.4-1.9-.4-1.8-.1-2.8 1.2-2.8 3.1zm3.5 1.9c-.2.1-.4.2-.7.2-1 0-1.4-.7-1.4-2.1 0-1.5.4-2.3 1.4-2.3.3 0 .5 0 .7.1V55zm30.3.9h.6v-8.5h-.6v8.5zm-36.9-6c-1 0-1.7.2-2.3.4v5.5h1.3v-4.9c.3-.1.6-.2.9-.2.8 0 1 .5 1 1v4.1H37v-4.1c0-.9-.6-1.8-2.3-1.8zM59 55.3c-.3.2-.7.3-1.2.3-.9 0-1.4-.6-1.4-1.4v-4.1h-.6v4.1c0 1 .5 1.8 1.9 1.8.9 0 1.5-.2 1.9-.5V50H59v5.3zm3.7-30.8c3.2 0 7-.6 9.4-1.1 35.1-6.9 20.1-18.5-23.6-18.5h-4.9c-6.8.2-12.9.7-12.6.7.1.1.3.1.5.2s6-.2 12.1-.2c42.5-.3 54.9 10.2 25 15.6-2.7.5-7.3 1.2-8.2 1.9-.7.4-1 1.5 2.3 1.4zm28.5 11.2C158 20.4 126.3 1 63.2 1c-6 0-12.3.2-18.8.5-10.7.7-19.6 1.8-19.4 1.9l.5.2c.2.1 8.9-.9 18.8-1.4C114.1-1.4 154 18.5 87.7 33.5c-5 1.1-10.3 2.2-15.1 3.4-1.4.3-2.8.7-3.6 1-.7.3-.6 1.1 1.5 1.2 1.2 0 3.5-.3 4.5-.4 5.5-.8 10.8-1.8 16.2-3zM23.6 49.9c-1.5 0-2.5 1.1-2.5 3 0 2 1 3 2.7 3 .9 0 1.5-.2 1.9-.4l-.3-.8c-.3.2-.8.3-1.5.3-1 0-1.5-.5-1.6-1.6l3.6-.5c.1-1.9-.8-3-2.3-3zm-1.3 2.9c0-1.4.5-2 1.3-2 .7 0 1.1.5 1.1 1.7l-2.4.3zm33.4-36.1c1.4.4 3.8.7 6.5.3 18.7-2.1 15-9.7-18.9-10.4h-3.5c-3.4 0-6 .1-5.8.1.2.1.3.1.5.2s4.5.1 8.7.3c11.7.5 24.4 2.2 23.7 5.2-.1.5-.8 1.2-2.7 1.6-2.1.5-5.6.6-7.9 1.1-2.3.6-2 1.2-.6 1.6zm3.7 4c2.3.2 5.7-.2 7.7-.5 27.2-4.6 17-14.4-23.2-14.4h-.4c-5.9 0-11.2.3-11 .4.2.1.3.1.5.2h10.4c35.6.6 41 8.8 20.1 11.5-2.7.3-5.1.8-6.1 1.4-.8.5-.1 1.2 2 1.4zm9 29.2c-1.2 0-2.2 1-2.2 3 0 2.2 1.1 3 2.5 3 .7 0 1.3-.2 1.6-.4l-.2-.4c-.3.2-.7.3-1.4.3-1.2 0-1.9-.8-2-2.3l3.7-.5c.1-1.9-.8-2.7-2-2.7zm-1.7 3c0-1.8.7-2.5 1.6-2.5.9 0 1.5.5 1.5 2l-3.1.5zM69 31.6c4.7-.5 9-1.3 12.6-2.1C132.3 18.4 108.8 3 56.1 3c-3.9 0-7.9.1-12 .3-8.8.4-16.2 1.2-16 1.2.2.1.3.1.5.2S36 4.2 44 3.9C99.9 2 126 17.1 78.3 27.3c-4.3.9-9.4 1.8-12.9 2.9-2.1.6-.6 1.9 3.6 1.4zM56 12.3c-1.8.1-2.6.3-2.8.7-.1.4.9.9 2 1.1 1.9.4 5.7-.2 7.2-.6 3.6-.9 2-2.3.2-3C58.9 8.9 51.1 8 43 7.5c-2.8-.2-5.5-.2-6.8-.2h-.8c.2.1.3.1.5.2s3.8.3 7.1.6c4.7.4 9.4 1 12.5 1.9 1.6.5 5.8 1.9.5 2.3z'/></svg></span>${transformString(
            dictionary.cookieTitle
          )}",
        notifyDescription: '${transformString(dictionary.notifyDescription)}',
        accept: '${transformString(dictionary.accept)}',
        acceptSettings: '${transformString(dictionary.acceptSettings)}',
        acceptRecommended: '${transformString(dictionary.acceptRecommended)}',
        rejectSettings: false,
        settings: '${transformString(dictionary.settings)}',
      },
      excludedCountries: ['all'],
    }

      CookieControl.load( config );
  `
}
