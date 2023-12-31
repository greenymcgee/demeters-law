/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
import mockAxios from 'jest-mock-axios'
import ReactDOM from 'react-dom'

process.env.ENV = 'test'

/**
 * Globally mocks axios everywhere in unit tests.
 * See https://www.npmjs.com/package/jest-mock-axios
 * Can check mocks in test via `import mockAxios from 'jest-mock-axios'
 */
jest.mock('axios', () => mockAxios)

/**
 * We mock preload here for the Image component from next/image.
 */
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDOM>('react-dom'),
  preload: jest.fn(),
}))

const loggerChild = {
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
}

/**
 * This mocks our logger util so that we can just import the logger in any test
 * and expect any of the methods toHaveBeenCalled.
 */
jest.mock('./src/log/logger.ts', () => ({
  logger: {
    child: jest.fn(() => loggerChild),
    ...loggerChild,
  },
}))
