import React, {FC} from 'react';
import './Message.css';

interface MessageProps {
  user: string,
  text: string,
  timestamp: number
}

export const Message: FC<MessageProps> = (
    {
        user,
        text,
        timestamp
    }
) => {
// TODO: check timestamp to date conversion
  return <div>
    <p>{user}</p>
    <p>{text}</p>
    <p>{new Date(timestamp)}</p>
  </div>
};

