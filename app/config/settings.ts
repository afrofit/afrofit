const settings = {
  dev: {
    // apiUrl: "http://192.168.1.169:9099/api",
    apiUrl: "https://shark-app-y5ox6.ondigitalocean.app/api/",
  },
  prod: {
    // apiUrl: "https://192.168.1.169:9099",
    apiUrl: "https://shark-app-y5ox6.ondigitalocean.app/api/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
