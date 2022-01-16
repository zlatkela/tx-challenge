import React, {ChangeEvent, FC, useState} from 'react';
import './InputMessageArea.css';

interface InputMessageAreaProps {
  onMessageEntered: (value: string) => void;
}

export const InputMessageArea: FC<InputMessageAreaProps> = ({onMessageEntered}) => {

  const [inputValue, setInputValue] = useState<string>('');

  const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    onMessageEntered(inputValue);
    setInputValue('');
  };

  const onEnterPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if(event.key === 'Enter') {
      sendMessage();
    }
  };


  const onButtonClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    sendMessage();
  };

  return <div>
    <input type="text" value={inputValue} onChange={onInputChanged} onKeyUp={onEnterPressed}/>
    <button onClick={onButtonClicked}>Send</button>
  </div>
};

