import { Config } from 'jest';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export type ProjectConfig = Exclude<
  NonNullable<Config['projects']>[number],
  string
>;

export const jsdomFilePattern = '<rootDir>/src/(components|test-utils)/';

export const sharedProjectConfig: ProjectConfig = {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  resetMocks: true,
  restoreMocks: true,
};

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  projects: ['<rootDir>/jest.config.node.ts', '<rootDir>/jest.config.jsdom.ts'],
};

export default createJestConfig(config);
