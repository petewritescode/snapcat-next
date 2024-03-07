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
  testEnvironment: 'node',
  testPathIgnorePatterns: [jsdomFilePattern],
};

export default createJestConfig(config);
