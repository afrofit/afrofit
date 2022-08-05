const settings = {
  dev: {
    apiUrl: "http://192.168.1.169:9099",
  },
  prod: {
    apiUrl: "https://192.168.1.169:9099",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
