/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse } from 'axios'
import { delegateObject, delegateString } from '../utils'

const DEFAULT_MESSAGE =
  'We may be experiencing technical issues. Check the information provided and try again momentarily.'

interface AxiosErrorFacadeOptions {
  fallbackMessage?: string
}

export class AxiosErrorFacade<Data = { message: string }> {
  private error: AxiosError<Data>

  private options: AxiosErrorFacadeOptions

  constructor(
    error: AxiosError<Data> | any,
    options?: AxiosErrorFacadeOptions,
  ) {
    this.error = delegateObject(error)
    this.options = delegateObject(options)
  }

  public get response(): AxiosResponse<Data> {
    return delegateObject(this.error.response)
  }

  public get responseData(): AxiosResponse['data'] {
    return this.response.data
  }

  private get fallbackMessage(): string {
    return delegateString(this.options.fallbackMessage, DEFAULT_MESSAGE)
  }

  public get message(): string {
    return delegateString(
      delegateObject(this.responseData).message,
      this.fallbackMessage,
    )
  }
}

/* eslint-enable @typescript-eslint/no-explicit-any */
