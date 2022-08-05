import "dotenv/config";

export default {
  expo: {
    name: "afrofit-app",
    slug: "afrofit-app",
    version: "1.0.0",
    description:
      "Getting Afrofit club members to lose weight and stay in shape by dancing.",
    orientation: "portrait",
    icon: "./app/assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./app/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#141723",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.afrofit.afrofit",
    },
    android: {
      package: "com.afrofit.afrofit",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./app/assets/adaptive-icon.png",
        backgroundColor: "#141723",
      },
      softwareKeyboardLayoutMode: "pan",
      permissions: [
        "MANAGE_DOCUMENTS",
        "READ_CONTACTS",
        "READ_CALENDAR",
        "WRITE_CALENDAR",
        "READ_EXTERNAL_STORAGE",
        "READ_PHONE_STATE",
        "RECORD_AUDIO",
        "WAKE_LOCK",
        "WRITE_EXTERNAL_STORAGE",
        "com.anddoes.launcher.permission.UPDATE_COUNT",
        "com.android.launcher.permission.INSTALL_SHORTCUT",
        "com.google.android.c2dm.permission.RECEIVE",
        "ACTIVITY_RECOGNITION",
        "android.permission.ACTIVITY_RECOGNITION",
        "com.google.android.gms.permission.ACTIVITY_RECOGNITION",
      ],
    },
    web: {
      favicon: "./app/assets/favicon.png",
    },
    extra: {
      firebaseApiKey: process.env.API_KEY,
      firebaseAuthDomain: process.env.AUTH_DOMAIN,
      firebaseProjectId: process.env.PROJECT_ID,
      firebaseStorageBucket: process.env.STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.MESSAGING_SENDER_ID,
      firebaseAppId: process.env.APP_ID,
      firebaseMeasurementId: process.env.MEASUREMENT_ID,
    },
  },
};
