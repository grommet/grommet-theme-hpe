// Standard Vitest/Jest test setup for codemods
// Place this file as codemod/setupTests.js

import { beforeAll, afterAll, vi } from 'vitest';

// Mock console.warn to avoid polluting test output
beforeAll(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterAll(() => {
  vi.restoreAllMocks();
});

// If using Jest, replace 'vi' with 'jest' and use jest.spyOn, jest.restoreAllMocks
// Example:
// beforeAll(() => {
//   jest.spyOn(console, 'warn').mockImplementation(() => {});
// });
// afterAll(() => {
//   jest.restoreAllMocks();
// });
