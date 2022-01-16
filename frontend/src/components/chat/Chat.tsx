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
      getMessagesFromServer();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMessagesFromServer = async () => {
    const newMessagesPromise = await getMessages();
    setMessages(newMessagesPromise.data);
  };

  const onMessageEntered = async (text: string) => {
    await addMessage({user, text});
    getMessagesFromServer();
  };

  return <div>
    <p>User: {user} </p>
    <MessageList messages={messages}/>
    <InputMessageArea onMessageEntered={onMessageEntered}/>
  </div>
};

