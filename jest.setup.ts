/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
import mockAxios from 'jest-mock-axios'

process.env.ENV = 'test'

/**
 * Globally mocks axios everywhere in unit tests.
 * See https://www.npmjs.com/package/jest-mock-axios
 * Can check mocks in test via `import axios from 'jest-mock-axios'
 */
jest.mock('axios', () => mockAxios)

/* eslint-enable import/no-extraneous-dependencies */
