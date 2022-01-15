import React, {FC} from 'react';
import './Chat.css';
import {MessageList} from "../message-list/MessageList";
import {InputMessageArea} from "../input-message-area/InputMessageArea";
import {MessageType} from "../../util/types";

export const Chat: FC = () => {

  const [messages, setMessages] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log('Runs every 5 seconds');
      getMessagesFromServer();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMessagesFromServer = () => {
    //TODO: implement service to call backend
    setMessages([]);
  };

  const onMessageEntered = (text: string) => {
    // TODO: send message to server
    getMessagesFromServer();
  };

  return <div>
    <MessageList messages={messages}/>
    <InputMessageArea onMessageEntered={onMessageEntered}/>
  </div>
};

