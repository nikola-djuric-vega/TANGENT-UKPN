import axios, { AxiosRequestConfig } from 'axios'

export const createAxiosInstance = (config: AxiosRequestConfig) => {
  return axios.create(config)
}
