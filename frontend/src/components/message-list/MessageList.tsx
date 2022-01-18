import './MessageList.css';

import React, { FC } from 'react';

import { MessageType } from '../../util/types';
import { Message } from '../message/Message';

interface MessageListProps {
  messages: MessageType[];
  currentUser: String;
}

export const MessageList: FC<MessageListProps> = ({
  messages,
  currentUser,
}) => {
  return (
    <div className="ml-container">
      {messages.map((item, index) => {
        return <Message message={item} currentUser={currentUser} key={index} />;
      })}
    </div>
  );
};
