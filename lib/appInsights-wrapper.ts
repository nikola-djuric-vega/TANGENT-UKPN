import { telemetryInitializer } from '_utils/app-insights-telemetry-initializer'
import { AppProps, AppContext } from 'next/app'
import * as React from 'react'

import {
  ApplicationInsights,
  IConfiguration,
  IConfig,
} from '@microsoft/applicationinsights-web'
import { AppType } from 'next/dist/shared/lib/utils'

const IS_BROWSER = typeof window !== 'undefined'

interface WithApplicationInsightsProps {
  pageName: string
}

let appInsights: ApplicationInsights

export interface ICustomConfig {
  isEnabled: boolean
}

export const withApplicationInsights = (
  config: IConfiguration & IConfig & ICustomConfig
) => {
  return (App: AppType) => {
    return class WithApplicationInsights extends React.Component<
      WithApplicationInsightsProps & AppProps
    > {
      public static getInitialProps = async (appCtx: AppContext) => {
        let appProps = { pageProps: {} }
        if (App.getInitialProps) {
          appProps = { ...appProps, ...(await App.getInitialProps(appCtx)) }
        }
        return {
          ...appProps,
        }
      }

      public componentDidMount() {
        this.initializeAppInsights()
        this.trackPageView()
      }

      public componentDidCatch(error: Error) {
        if (appInsights) {
          appInsights.trackException({ exception: error })
        }
      }

      public initializeAppInsights() {
        if (IS_BROWSER && config.isEnabled && !appInsights) {
          appInsights = new ApplicationInsights({ config })
          appInsights.loadAppInsights()
          appInsights.addTelemetryInitializer(telemetryInitializer)
          window.appInsights = appInsights
        }
      }

      public trackPageView() {
        if (appInsights) {
          const name =
            this.props.Component.displayName ||
            this.props.Component.name ||
            location.pathname
          const properties: {
            route: string
            [key: string]: string | string[] | undefined
          } = {
            route: this.props.router.route,
          }
          if (this.props.router.query) {
            for (const key in this.props.router.query) {
              properties[`query.${key}`] = this.props.router.query[key]
            }
          }
          appInsights.trackPageView({ name, properties })
        }
      }

      public render() {
        this.trackPageView()
        return React.createElement(App, this.props)
      }
    }
  }
}
