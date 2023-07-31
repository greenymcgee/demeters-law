// eslint-disable-next-line import/no-extraneous-dependencies, import/no-import-module-exports
import { defaults } from 'jest-config'

module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  watchPathIgnorePatterns: ['node_modules'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/pages/api/**/*.(ts|tsx)',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 97,
      functions: 99,
      lines: 99,
      statements: 99,
    },
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
