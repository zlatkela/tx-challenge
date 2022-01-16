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
    getMessagesFromServer();
    const interval = setInterval(() => {
      getMessagesFromServer();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMessagesFromServer = async () => {
    const mockedMessages: MessageType[] = [{
      "timestamp": 1642240183049,
      "user": "Milos",
      "text": "this second is test message"
    }, {
      "timestamp": 1642242500336,
      "user": "Milos",
      "text": "this second is test message"
    },
      {
        "timestamp": 1642242500356,
        "user": "User 1",
        "text": "this third is test message"
      }];

    setMessages(mockedMessages);
    // const newMessagesPromise = await getMessages();
    // setMessages(newMessagesPromise.data);
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

