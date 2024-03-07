import nextJest from 'next/jest';
import {
  ProjectConfig,
  jsdomFilePattern,
  sharedProjectConfig,
} from './jest.config';

const createJestConfig = nextJest({
  dir: './',
});

const config: ProjectConfig = {
  ...sharedProjectConfig,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.jsdom.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`^(?!${jsdomFilePattern}).*`],
};

export default createJestConfig(config);
