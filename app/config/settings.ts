const settings = {
  dev: {
    // apiUrl: "http://192.168.1.45:9090/api",
    apiUrl: "https://shark-app-y5ox6.ondigitalocean.app/api/",
      // apiUrl:  " http://161.97.170.81:9090/api/"
    // apiUrl: "http://192.168.1.7:9090/api/",
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
