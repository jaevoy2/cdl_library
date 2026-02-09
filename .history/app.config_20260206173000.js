export default {
  expo: {
    name: "mlgcl-library-frontend",
    slug: "mlgcl-library-frontend",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "mlgcllibraryfrontend",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: {
      supportsTablet: true,
      NSCameraUsageDescription: "We need camera access"
    },

    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },

    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
      "expo-web-browser"
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      LIBRARY_API_KEY: process.env.LIBRARY_API_KEY, 
      LIBRARY_API_URL: process.env.LIBRARY_API_URL,
      LIBRARY_ORIGIN: process.env.LIBRARY_ORIGIN,
      ANDROID_CLIENT_ID: process.env.ANDROID_CLIENT_ID,
      IOS_CLIENT_ID: process.env.IOS_CLIENT_ID,
      WEB_CLIENT_ID:process.env.WEB_CLIENT_ID
    }
  },
};
