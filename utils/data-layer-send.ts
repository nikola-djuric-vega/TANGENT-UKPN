export function dataLayerSend(data: any) {
  if (!!process.env.NEXT_PUBLIC_GTM_ID) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(data)
  }
}
