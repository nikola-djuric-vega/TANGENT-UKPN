import PowerCutCurvedBanner from '_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner'
import { PowerCutFormPage as PowerCutFormPageType } from '_types/CMS/pages/form-pages'
import DangerousSituation from '_molecules/DangerousSituation/DangerousSituation'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import { ComponentsTypeName, Form, UmbracoForm } from '_types/CMS'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import DynamicForm from '_organism/DynamicForm/DynamicForm'
import { destroyCookie, parseCookies } from 'nookies'
import styles from './PowerCutFormPage.module.scss'
import SmartMeterPing from '_lib/smart-meter-ping'
import { identifyThankyouPage } from '_utils'
import { useState, useEffect } from 'react'
import Loader from '_atoms/Loader/Loader'
import { useRouter } from 'next/router'
import { Address } from '_types/local'
import { timeSlots } from '_utils'
import axios from 'axios'

interface PowerCutFormPageProps {
  data: PowerCutFormPageType
  formData?: Form
}

interface PowerCutFormPageState {
  smartPingEnabled: boolean
  isSmartMeter: boolean
  isLoading: boolean
  showForm: boolean
  isLogged: boolean
  isDS1: boolean
}

export const PowerCutFormPage = ({ data, formData }: PowerCutFormPageProps) => {
  const [PCFState, setPCFState] = useState<PowerCutFormPageState>({
    smartPingEnabled: false,
    isSmartMeter: false,
    isLoading: false,
    showForm: false,
    isLogged: false,
    isDS1: false,
  })
  const {
    isLoading,
    isSmartMeter,
    showForm,
    smartPingEnabled,
    isDS1,
    isLogged,
  } = PCFState
  const router = useRouter()
  const form = formData
    ? formData
    : (data.formDetails as UmbracoForm[])?.[0]?.umbracoForm

  const smartMeterData = {
    smartMeterSubtitle: data?.smartMeterSubtitle,
    smartMeterBodyText: data?.smartMeterBodyText,
    smartMeterTitle: data?.smartMeterTitle,
    smartMeterIcon: data?.smartMeterIcon,
  }

  const notAvailableData = {
    intro: data?.intro,
    title: data?.title,
    text: data?.text,
    telephoneNumber1: data?.telephoneNumber1,
    telephoneNumber2: data?.telephoneNumber2,
  }

  const thankYouUrl = identifyThankyouPage(
    data.descendants.items,
    data.thankYouPageId
  )

  const appointmentTimes = {
    Today: timeSlots('Today'),
    Tomorrow: timeSlots('Tomorrow'),
  }

  useEffect(() => {
    const address = localStorage.getItem('searchedAddress')
    if (!!isLoading && !!address && !isLogged) {
      SmartMeterPing.checkIsSmartMeter(address)
        .then(({ data }) => {
          setPCFState((prevState) => ({
            ...prevState,
            smartPingEnabled: data.smartPingEnabled,
            isSmartMeter: data.isSmart,
            isDS1: data.onSupply,
            isLoading: false,
          }))
        })
        .catch((err) => {
          setPCFState((prevState) => ({ ...prevState, isLoading: false }))
        })
    } else if (!address) {
      setPCFState((prevState) => ({ ...prevState, isLoading: false }))
    }
  }, [isLoading])

  useEffect(() => {
    const address = localStorage.getItem('searchedAddress')
    const addressObj = address ? (JSON.parse(address) as Address) : null

    if (!!addressObj) {
      const checkMpanLogs = async () => {
        const { data: isLogged } = await axios.post(`/api/recent-mpan`, {
          mpan: addressObj.mpan,
        })

        if (isLogged) {
          setPCFState((prevState) => ({ ...prevState, isLogged: true }))
        }
      }

      checkMpanLogs()
    }
  }, [])

  useEffect(() => {
    if (showForm && PCFState.isLogged) {
      const cookies = parseCookies()
      if (cookies) {
        destroyCookie(null, 'referenceNumber')
      }
      router.push(thankYouUrl)
    }
  }, [showForm])

  return (
    <>
      <CoreMetadata data={data} />
      <PowerCutPageContainer>
        {!!isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}
        {!!form && !!showForm && !isLoading && (
          <DynamicForm
            {...form}
            address={localStorage.getItem('searchedAddress')}
            includeReference={data.includeReference}
            appointmentTimes={appointmentTimes}
            notAvailableData={notAvailableData}
            smartPingEnabled={smartPingEnabled}
            smartMeterData={smartMeterData}
            thankYouPageUrl={thankYouUrl}
            isSmartMeter={isSmartMeter}
            type={data.__typename}
            _id={data.id}
            isDS1={isDS1}
          />
        )}
        {!showForm &&
          !isLoading &&
          data.components?.map((comp, i) => {
            switch (comp.__typename) {
              case ComponentsTypeName.POWER_CUT_CURVED_BANNER:
                return <PowerCutCurvedBanner key={i} {...comp} />
              case ComponentsTypeName.DANGEROUS_SITUATION:
                return (
                  <DangerousSituation
                    {...comp}
                    setShowForm={(value) =>
                      setPCFState({
                        ...PCFState,
                        isLoading: true,
                        showForm: value,
                      })
                    }
                    key={i}
                  />
                )
              default:
                return null
            }
          })}
      </PowerCutPageContainer>
    </>
  )
}
