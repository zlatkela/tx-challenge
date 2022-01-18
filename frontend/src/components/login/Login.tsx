import './Login.css';

import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  user: string;
  onEnterChat: (value: string) => void;
}

export const Login: FC<LoginProps> = ({ user, onEnterChat }) => {
  const [inputValue, setInputValue] = useState<string>(user);

  const navigate = useNavigate();

  const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createUsername = () => {
    onEnterChat(inputValue);
    navigate("/chat");
  };

  const onButtonClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    createUsername();
  };

  const onEnterPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "Enter") {
      createUsername();
    }
  };

  return (
    <div className="container">
      <div className="panel-container">
        <p className="strong">Enter your name</p>
        <form action="">
          <input
            className="text-field"
            type="text"
            value={inputValue}
            onChange={onInputChanged}
            onKeyUp={onEnterPressed}
          />
          <button className="primary" onClick={onButtonClicked}>
            Enter chat
          </button>
        </form>
      </div>
    </div>
  );
};
