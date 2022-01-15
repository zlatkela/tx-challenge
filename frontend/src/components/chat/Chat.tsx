import React, {FC} from 'react';
import './Chat.css';
import {MessageList} from "../message-list/MessageList";
import {InputMessageArea} from "../input-message-area/InputMessageArea";
import {MessageType} from "../../util/types";
import {addMessage, getMessages} from "../../services/MessageService";

interface ChatProps {
  user: string;
}

export const Chat: FC<ChatProps> = ({user}) => {

  const [messages, setMessages] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log('Runs every 5 seconds');
      getMessagesFromServer();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMessagesFromServer = async () => {
    const newMessagesPromise = await getMessages();
    setMessages(newMessagesPromise.data);
  };

  const onMessageEntered = (text: string) => {
    addMessage({user, text});
    getMessagesFromServer();
  };

  return <div>
    <MessageList messages={messages}/>
    <InputMessageArea onMessageEntered={onMessageEntered}/>
  </div>
};

