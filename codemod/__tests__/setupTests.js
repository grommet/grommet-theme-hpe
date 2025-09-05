import { beforeAll, afterAll, vi } from 'vitest';

// Mock console.warn to avoid polluting test output
beforeAll(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterAll(() => {
  vi.restoreAllMocks();
});
