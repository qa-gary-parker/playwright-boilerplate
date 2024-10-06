// In appwright.config.ts
import { defineConfig, Platform } from "appwright";
export default defineConfig({
  testDir: './tests/mobile/',
  projects: [
    {
      name: "android",
      testMatch: 'mobile/mobile-real-check.spec.ts',
      use: {
        platform: Platform.ANDROID,
        device: {
          provider: "emulator", // or 'local-device' or 'browserstack'
        },
        buildPath: "app-release.apk",
      },
    },
    {
      name: "ios",
      testMatch: 'mobile/mobile-real-check.spec.ts',
      use: {
        platform: Platform.IOS,
        device: {
          provider: "emulator", // or 'local-device' or 'browserstack'
          name: "iPhone 14 Pro",
        },
        buildPath: "app-release.app", // Path to your .app file
      },
    },
  ],
});