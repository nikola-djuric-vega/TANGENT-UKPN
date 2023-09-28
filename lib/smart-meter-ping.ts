import { isSmartResponse, Address, SmartMeterPingResponse } from '_types/local'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const parseAddress = (address: string) => JSON.parse(address) as Address

export default class SmartMeterPing {
  attempts: number
  constructor() {
    this.attempts = 0
  }

  static checkIsSmartMeter = async (address: string) => {
    const mpan = parseAddress(address).mpan

    return await axios.post<isSmartResponse>(`/api/smart-meter-check`, {
      mpan,
    })
  }

  public initiatePing = async (address: string, correlationID: string) => {
    const addressObj = JSON.parse(address)

    return await axios.get<SmartMeterPingResponse>(
      '/api/smart-meter-ping-smart',
      {
        params: {
          mpan: addressObj.mpan,
          correlationID,
        },
      }
    )
  }

  public attemptPing = async (correlationID: string) => {
    return await axios.post<SmartMeterPingResponse>(
      '/api/smart-meter-ping-result',
      {
        correlationID,
      }
    )
  }

  public handleSmartMeterPing = async (
    address: string,
    id: string,
    shouldInitiate: boolean
  ) => {
    try {
      if (shouldInitiate) {
        const pingSmart = await this.initiatePing(address, id)
        this.attempts += 1
        return pingSmart
      } else {
        const pingResult = await this.attemptPing(id)
        if (
          pingResult.data.energisationStatus === 'Error' &&
          this.attempts < 3
        ) {
          const newCorrelationId = uuidv4()
          const rePing = await this.initiatePing(address, newCorrelationId)
          this.attempts += 1
          if (rePing.status === 202) {
            return rePing
          } else {
            rePing.data = {
              ...pingResult.data,
              newCorrelationId: newCorrelationId,
              pingAttempts: this.attempts,
            }
            return rePing
          }
        } else if (
          pingResult.data.energisationStatus === 'Error' &&
          this.attempts === 3
        ) {
          pingResult.data = { ...pingResult.data, stopPinging: true }
          return pingResult
        } else {
          return pingResult
        }
      }
    } catch (error) {
      throw error
    }
  }
}
