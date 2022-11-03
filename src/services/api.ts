import axios from "axios";

export const coreApi = axios.create({
    baseURL:'https://pets-json-server-m3.herokuapp.com',
    timeout:5000,
})