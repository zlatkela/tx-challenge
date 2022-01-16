import React, {ChangeEvent, FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';

interface LoginProps {
  user: string
  onEnterChat: (value: string) => void;
}

export const Login: FC<LoginProps> = ({user, onEnterChat}) => {

  const [inputValue, setInputValue] = useState<string>(user);

  const navigate = useNavigate();

  const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createUsername = () => {
    onEnterChat(inputValue);
    navigate('/chat');
  };

  const onButtonClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    createUsername();
  };

  const onEnterPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === 'Enter') {
      createUsername();
    }
  };

  return <div>
    <p>Enter you name</p>
    <input type="text" value={inputValue} onChange={onInputChanged} onKeyUp={onEnterPressed}/>
    <button onClick={onButtonClicked}>Enter chat</button>
  </div>
};

