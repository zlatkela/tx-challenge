import {MessageType} from "../util/types";
import axios, {AxiosResponse} from "axios";

// TODO: refactor to use env;
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

export const addMessage = (message: MessageType) : Promise<AxiosResponse<MessageType>> => {
  return axios.post('http://localhost:8080/messages', message, config);
};

export const getMessages = () : Promise<AxiosResponse<MessageType[]>> => {
  return axios.get('http://localhost:8080/messages', config);
};