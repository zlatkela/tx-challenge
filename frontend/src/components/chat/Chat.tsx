import './Chat.css';

import React, { FC } from 'react';

import {addMessage, getMessages} from '../../services/MessageService';
import { MessageType } from '../../util/types';
import { InputMessageArea } from '../input-message-area/InputMessageArea';
import { MessageList } from '../message-list/MessageList';

interface ChatProps {
  user: string;
}

export const Chat: FC<ChatProps> = ({ user }) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    getMessagesFromServer();
    const interval = setInterval(() => {
      getMessagesFromServer();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMessagesFromServer = async () => {
    const newMessagesPromise = await getMessages();
    setMessages(newMessagesPromise.data);
  };

  const onMessageEntered = async (text: string) => {
    await addMessage({author: user, text});
    getMessagesFromServer();
  };

  return <div>
    <MessageList messages={messages} currentUser={user}/>
    <InputMessageArea onMessageEntered={onMessageEntered}/>
  </div>
};

