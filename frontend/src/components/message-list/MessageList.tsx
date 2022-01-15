import React, {FC} from 'react';
import './MessageList.css';
import {Message} from "../message/Message";
import {MessageType} from "../../util/types";

interface MessageListProps {
  messages: MessageType[];
}

export const MessageList: FC<MessageListProps> = ({messages}) => {

  return <div>
    {
      messages.map((item, index) => {
        return <Message message={item} key={index}/>
      })
    }
  </div>
};

