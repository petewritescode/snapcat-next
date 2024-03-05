import { Config } from 'jest';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from '../../tsconfig.json';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/../../',
  }),
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/../../jest-setup.ts'],
};

export default createJestConfig(config);
