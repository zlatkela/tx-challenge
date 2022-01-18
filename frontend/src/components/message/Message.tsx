import './Message.css';

import React, { FC } from 'react';

import { MessageType } from '../../util/types';

interface MessageProps {
  message: MessageType;
  currentUser: String;
}

export const Message: FC<MessageProps> = ({ message, currentUser }) => {

  const formatDate = (timestamp: number) : string => {
    const date = new Date(timestamp);

    return date.toLocaleDateString() + " " + date.toLocaleTimeString();


  };
  return <div
      className={ currentUser === message.author ? "message-box me" : "message-box" }
  >
    <p style={ {display: currentUser === message.author ? "none" : ""} } className="flex-left less-weight">{message.author}</p>
    <p className="content">{message.text}</p>
    <p className="flex-right italic less-weight">{message.createdAt ? formatDate(message.createdAt) : undefined}</p>
  </div>
};
