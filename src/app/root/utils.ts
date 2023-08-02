import { isArray } from '@/utils'
import { camelCaseKeys } from '@/utils/caseFormats'
import { AxiosResponse } from 'axios'

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