import React, {FC} from 'react';
import './InputMessageArea.css';

interface InputMessageAreaProps {
  onMessageEntered: (value: string) => void;
}

export const InputMessageArea: FC<InputMessageAreaProps> = ({onMessageEntered}) => {

  const onButtonClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    // TODO: get value from input text
    onMessageEntered("test");
  };

  return <div>
    <input type="text"/>
    <button onClick={onButtonClicked}>Send</button>
  </div>
};

