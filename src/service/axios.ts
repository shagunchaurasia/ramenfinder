import axios from "axios";
import config from "config";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = config.service.BASE_URL; //BASE URL

axiosClient.defaults.timeout = 10000;

export function getRequest(URL: string) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}


export function postRequest(URL: string) {
//Axios post request
}

export function putRequest(URL: string) {
//Axios put request
}
export default axiosClient;
