import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const config = {} as unknown as InternalAxiosRequestConfig

export const AXIOS_RESPONSE: AxiosResponse = {
  config,
  data: {},
  headers: {},
  status: 200,
  statusText: 'ok',
}
