import { AxiosError, InternalAxiosRequestConfig } from 'axios'

const config = {} as unknown as InternalAxiosRequestConfig

export const AXIOS_ERROR: AxiosError<{ message: string }> = {
  isAxiosError: true,
  name: 'API_ERROR',
  message: 'The api responded with an error',
  response: {
    config,
    data: { message: 'Server error' },
    headers: {},
    status: 500,
    statusText: 'Bad',
  },
  toJSON: jest.fn(),
}

export const AXIOS_ERROR_WITHOUT_RESPONSE_MESSAGE: AxiosError = {
  isAxiosError: true,
  name: 'API_ERROR',
  message: 'The api responded with an error',
  response: {
    config,
    data: {},
    headers: {},
    status: 500,
    statusText: 'Bad',
  },
  toJSON: jest.fn(),
}

export const AXIOS_ERROR_WITHOUT_RESPONSE: AxiosError = {
  isAxiosError: true,
  name: 'UNKNOWN_ERROR',
  message: 'The api responded with an error',
  toJSON: jest.fn(),
}
