/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: { enzymeAdapter: 'react16' },
  transform: {
    '\\.jsx$': 'babel-jest',
  },
};
