import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

// Polyfill fetch for Node.js test environment
if (!global.fetch) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
      text: () => Promise.resolve(''),
      ok: true,
      status: 200,
    })
  ) as any;
}

// Mock Firebase Auth to avoid fetch-related issues
jest.mock('@angular/fire/auth', () => ({
  Auth: jest.fn(),
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signOut: jest.fn(),
  user: jest.fn(() => ({ subscribe: jest.fn() })),
}));
