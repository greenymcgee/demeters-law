import {
  AXIOS_ERROR,
  AXIOS_ERROR_WITHOUT_RESPONSE,
  AXIOS_ERROR_WITHOUT_RESPONSE_MESSAGE,
} from '../../../../fixtures'
import { AxiosErrorFacade } from '..'

describe('AxiosErrorFacade', () => {
  describe('delegations', () => {
    describe('response', () => {
      it('should return an empty object when the response is blank', () => {
        const result = new AxiosErrorFacade(AXIOS_ERROR_WITHOUT_RESPONSE)
        expect(result.response).toEqual({})
      })

      it('should return the response when it is present', () => {
        const result = new AxiosErrorFacade(AXIOS_ERROR)
        expect(result.response).toEqual(AXIOS_ERROR.response)
      })
    })

    describe('responseData', () => {
      it('should return the response.data', () => {
        const result = new AxiosErrorFacade(AXIOS_ERROR)
        expect(result.responseData).toEqual(AXIOS_ERROR.response?.data)
      })
    })

    describe('message', () => {
      it('should delegate the message from the responseData when it is present', () => {
        const result = new AxiosErrorFacade(AXIOS_ERROR)
        expect(result.message).toEqual(AXIOS_ERROR.response?.data.message)
      })

      it('should return a default message when responseData.message is blank', () => {
        const result = new AxiosErrorFacade(
          AXIOS_ERROR_WITHOUT_RESPONSE_MESSAGE,
        )
        expect(result.message).toEqual(
          'We may be experiencing technical issues. Check the information provided and try again momentarily.',
        )
      })

      it('should return the provided fallback message when it is present and responseData.message is blank', () => {
        const message = 'A custom message'
        const result = new AxiosErrorFacade(
          AXIOS_ERROR_WITHOUT_RESPONSE_MESSAGE,
          { fallbackMessage: message },
        )
        expect(result.message).toEqual(message)
      })
    })
  })
})
