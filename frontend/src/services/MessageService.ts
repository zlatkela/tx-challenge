import {MessageType} from "../util/types";
import axios, {AxiosResponse} from "axios";

// TODO: refactor to use env;


export const addMessage = (message: MessageType) : Promise<AxiosResponse<MessageType>> => {
  return axios.post('http://localhost:8080/messages', message);
};

export const getMessages = () : Promise<AxiosResponse<MessageType[]>> => {
  return axios.get('http://localhost:8080/messages');
};