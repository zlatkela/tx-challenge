import './InputMessageArea.css';

import React, { ChangeEvent, FC, useState } from 'react';

interface InputMessageAreaProps {
  onMessageEntered: (value: string) => void;
}

export const InputMessageArea: FC<InputMessageAreaProps> = ({
  onMessageEntered,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    onMessageEntered(inputValue);
    setInputValue('');
  };

  const onEnterPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const onButtonClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    sendMessage();
  };

  return (
    <div id="bottom-footer" className="input-message-container">
      <input
        className="text-field"
        type="text"
        value={inputValue}
        onChange={onInputChanged}
        onKeyUp={onEnterPressed}
      />
      <button className="primary" onClick={onButtonClicked}>
        Send
      </button>
    </div>
  );
};
