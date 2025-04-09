// import type { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: 'com.example.app',
//   appName: 'my-todos',
//   webDir: 'public'
// };

// export default config;

import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mytodos.app",
  appName: "my-todos",
  webDir: "public",
  server: {
    // url: 'https://octopus-app-49vcd.ondigitalocean.app',
    url: "http://192.168.29.107:3000",
    cleartext: true,
  },
  plugins: {
    App: {
      android: {
        shouldShowLaunchScreen: true,
      },
    },
    SwipeBack: {
      enabled: true,
    },
    StatusBar: {
      overlaysWebView: false,
      style: "DARK",
      backgroundColor: "#000000",
    },
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: "#000000",
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
