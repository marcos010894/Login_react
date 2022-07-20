import { Enviroment } from "../../../enviroment";


import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";


const Api = axios.create({
    baseURL: Enviroment.URL_BASE,
    headers:{
        Autorization: `Bearer ${localStorage.getItem(Enviroment.LOCAL_STORAGE_ACCESS_TOKEN)}`
    }
})


Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
)

export { Api }
///login