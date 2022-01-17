import React, {FC} from 'react';
import './Message.css';
import {MessageType} from "../../util/types";

interface MessageProps {
  message: MessageType;
}

export const Message: FC<MessageProps> = ({message}) => {

  const formatDate = (timestamp: number) : string => {
    const date = new Date(timestamp);

    return date.toLocaleDateString() + " " + date.toLocaleTimeString();


  };
  return <div>
    <p>{message.author}</p>
    <p>{message.text}</p>
    <p>{message.createdAt ? formatDate(message.createdAt) : undefined}</p>
  </div>
};

