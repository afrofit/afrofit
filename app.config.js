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
      eas: {
        projectId: "7eb3d0cb-e880-41d5-a70a-7a9ee1a8e91f",
      },
    },
  },
};
