import { camelCaseKeys, isArray } from '@/utils'
import axios, { AxiosResponse } from 'axios'
import { INTERNAL_API_HOST } from '@/constants'
import { Apis } from '@/common/types'

export function camelCaseResponseDataKeys(
  response: AxiosResponse,
): AxiosResponse {
  return {
    ...response,
    data: isArray(response.data)
      ? response.data.map((value) => camelCaseKeys(value as AnyObject))
      : camelCaseKeys(response.data),
  }
}

export function createApis(): Apis {
  const internal = axios.create({ baseURL: INTERNAL_API_HOST })
  axios.interceptors.response.use(camelCaseResponseDataKeys)
  internal.interceptors.response.use(camelCaseResponseDataKeys)
  return { internal }
}

export const apis = createApis()
