let { REACT_APP_SERVICE_BASE_URL} = process.env;

const config = {
  deviceType: "web",
  service: {
    BASE_URL:  REACT_APP_SERVICE_BASE_URL,
  },
};

export default config;
