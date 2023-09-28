const {
  getCSP,
  EVAL,
  INLINE,
  SELF,
  DATA,
  BLOB,
  UNSAFE_INLINE,
  UNSAFE_EVAL,
} = require('csp-header')

const sitePolicy = {
  'default-src': [SELF, 'https'],
  'connect-src': [
    SELF,
    'https://dc.services.visualstudio.com',
    'https://attach.ukpowernetworks.co.uk',
  ],
  'font-src': [SELF, 'ukpn.local', 'hello.myfonts.net', 'data:'],
  'style-src': [SELF, UNSAFE_INLINE, 'ukpn.local'],
  'script-src': [SELF, UNSAFE_EVAL, UNSAFE_INLINE, 'ukpn.local'],
  'img-src': [
    SELF,
    'data:',
    'https://api.umbraco.io',
    'https://media.umbraco.io',
    'https://img.youtube.com',
  ],
  'child-src': [SELF],
  'frame-src': [SELF],
}

const analyticsPolicy = {
  'connect-src': [
    'www.google-analytics.com',
    'region1.google-analytics.com',
    'https://apikeys.civiccomputing.com/c/v',
    'https://in.hotjar.com/',
    'https://vc.hotjar.io',
  ],
  'script-src': [
    'https://cc.cdn.civiccomputing.com/9/cookieControl-9.x.min.js',
    'https://www.googletagmanager.com/ns.html',
    'www.googletagmanager.com',
    'cdnjs.cloudflare.com www.google-analytics.com',
    'script.hotjar.com',
    'static.hotjar.com',
  ],
  'img-src': ['www.google-analytics.com'],
  'frame-src': ['https://vars.hotjar.com'],
}

const adsPolicy = {
  'connect-src': ['stats.g.doubleclick.net'],
  'img-src': [
    'stats.g.doubleclick.net',
    'www.google.com/ads',
    'www.google.co.uk/ads',
  ],
  'script-src': ['z.moatads.com'],
  'child-src': ['https://www.googletagmanager.com/ns.html'],
}

const genericGooglePolicy = {
  'connect-src': [
    'https://translate.googleapis.com',
    'https://maps.googleapis.com',
    'https://api.what3words.com',
  ],
  'script-src': [
    'https://translate.google.com/',
    'https://translate.googleapis.com/',
    'apis.google.com',
    'www.google.com',
    'www.gstatic.com',
    'maps.googleapis.com',
    'ajax.googleapis.com',
  ],
  'img-src': [
    'https://translate.google.com',
    'maps.gstatic.com',
    'maps.googleapis.com',
    'https://www.google.com',
    'https://www.google.co.uk/',
    'https://www.google.com/images/cleardot.gif',
    'https://www.gstatic.com',
    'fonts.googleapis.com',
    'apis.google.com',
  ],
  'font-src': ['fonts.googleapis.com', 'fonts.gstatic.com'],
  'style-src': ['fonts.googleapis.com'],
  'child-src': ['https://content.googleapis.com'],
  'frame-src': ['www.google.com'],
}

const azurePolicy = {
  'connect-src': [
    'https://*.applicationinsights.azure.com',
    'https://*.azurewebsites.net',
    'https://graph.microsoft.com/',
    'https://*.tangentlabs.co.uk',
  ],
  'script-policy': [
    'https://pfw-prod-ukwest-safespaceonline.azurewebsites.net',
    'az416426.vo.msecnd.net',
  ],
  'font-src': ['https://pfw-prod-ukwest-safespaceonline.azurewebsites.net/'],
}

const site24x7rumPolicty = {
  'connect-src': ['https://col.site24x7rum.eu'],
  'script-src': ['https://static.site24x7rum.eu'],
}

const socialsPolicy = {
  'connect-src': ['https://*.addthis.com'],
  'script-src': [
    'widget.trustpilot.com',
    '*.addthis.com',
    'v1.addthisedge.com',
    'graph.facebook.com',
    'https://www.youtube.com',
    's.ytimg.com',
  ],
  'frame-src': ['www.youtube.com', 'https://widget.trustpilot.com'],
}

const browserloudPolicy = {
  'connect-src': [
    'https://plus.browsealoud.com/',
    'https://plusqa.browsealoud.com',
    'https://www.browsealoud.com',
  ],
  'script-src': ['https://plus.browsealoud.com', 'https://www.browsealoud.com'],
  'img-src': [
    'https://www.browsealoud.com',
    'https://www.browsealoud.com',
    'https://plus.browsealoud.com',
  ],
  'frame-src': ['https://s7.addthis.com'],
}

const liveChatPolicy = {
  'script-src': ['v4in1-si.click4assistance.co.uk'],
  'img-src': [
    'https://pfw-prod-ukwest-safespaceonline.azurewebsites.net',
    'prod3si.click4assistance.co.uk',
    'v4in1-si.click4assistance.co.uk',
  ],
  'frame-src': ['v4in1-ti.click4assistance.co.uk'],
}

const learningPolicy = {
  'connect-src': [
    'https://speechstreamv3-webservices-8.texthelp.com/',
    'https://wikisum.texthelp.com/',
    'https://babm.texthelp.com',
    'https://*.speechstream.net',
    'https://en.wikipedia.org/',
  ],
  'script-src': ['https://*.speechstream.net', 'https://wikisum.texthelp.com/'],
  'img-src': [
    'https://speechstreamv3-webservices-8.texthelp.com/',
    'https://upload.wikimedia.org',
  ],
  'frame-src': ['https://*.speechstream.net'],
  'media-src': ['self', 'https://*.speechstream.net'],
}

const tangentlabsPolicy = {
  'font-src': ['https://ukpn-dev-cdn.tangentlabs.co.uk'],
  'style-src': ['https://ukpn-dev-cdn.tangentlabs.co.uk'],
  'script-src': ['https://ukpn-dev-cdn.tangentlabs.co.uk'],
}

const parcelforcePolicy = {
  'connect-src': [
    'https://pfw-prod-ukwest-safespaceonline.azurewebsites.net',
    'https://apps.parcelforce.com/sso/Home/IsAlive',
    'https://apps.parcelforce.com/sso/',
  ],
  'style-src': ['https://pfw-prod-ukwest-safespaceonline.azurewebsites.net'],
  'script-src': ['https://pfw-prod-ukwest-safespaceonline.azurewebsites.net'],
}

const queueItPolicy = {
  'connect-src': ['https://static.queue-it.net'],
  'script-src': [
    'https://ukpowernetworks.queue-it.net',
    'https://ukpowernetwork.queue-it.net',
    'https://static.queue-it.net/script/queueclient.min.js',
    'https://static.queue-it.net/script/queueconfigloader.min.js',
    'https://assets.queue-it.net',
  ],
}

const cspHeader = getCSP({
  presets: [
    sitePolicy,
    analyticsPolicy,
    adsPolicy,
    genericGooglePolicy,
    azurePolicy,
    site24x7rumPolicty,
    socialsPolicy,
    browserloudPolicy,
    liveChatPolicy,
    learningPolicy,
    tangentlabsPolicy,
    parcelforcePolicy,
    queueItPolicy,
  ],
})

module.exports = cspHeader
