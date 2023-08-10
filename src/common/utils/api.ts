import axios, { AxiosResponse } from 'axios'
import { INTERNAL_API_HOST } from '@/common/constants'
import { Apis } from '@/common/types'
import { isArray } from './is'
import { camelCaseKeys } from './camelCaseKeys'

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
