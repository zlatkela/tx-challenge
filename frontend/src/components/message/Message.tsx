import React, {FC} from 'react';
import './Message.css';
import {MessageType} from "../../util/types";

interface MessageProps {
  message: MessageType;
}

export const Message: FC<MessageProps> = ({message}) => {
// TODO: check timestamp to date conversion
  return <div>
    <p>{message.user}</p>
    <p>{message.text}</p>
    <p>{message.timestamp ? new Date(message.timestamp): undefined}</p>
  </div>
};

