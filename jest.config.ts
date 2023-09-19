import type { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
}

export default config
