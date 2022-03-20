import axios from "axios";
import config from "config";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `https://cors-ramen-heroku.herokuapp.com/`+ config.service.BASE_URL; //BASE URL


//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 10000;

axiosClient
  .get("/?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12")
  .then((response) => {
    console.log(response);
  });

export function getRequest(URL:string) {
  console.log("URL",URL)
  
  return axiosClient.get(`/${URL}`).then((response) => response);

}
export default axiosClient;
