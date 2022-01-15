import React, {FC} from 'react';
import './Login.css';

interface LoginProps {
  onEnterChat: (value: string) => void;
}

export const Login: FC<LoginProps> = ({onEnterChat}) => {

  const onButtonClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    // TODO: get value from input text
    onEnterChat("test");
    // TODO: reroute on chat page
  };

  return <div>
    <p>Enter you name</p>
    <input type="text"/>
    <button onClick={onButtonClicked}>Enter chat</button>
  </div>
};

