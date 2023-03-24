import { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <ToggleBox>
      <div className={isOn ? 'toggle-box toggle__checked' : 'toggle-box'} onClick={toggleHandler} />
      <div className={isOn ? 'toggle-icon toggle__checked' : 'toggle-icon'} onClick={toggleHandler} />        
    </ToggleBox>
  );
};

export default Toggle;

const ToggleBox = styled.div`
  position: relative;
  width: 4rem;
  cursor: pointer;
  
  > .toggle-box {
    height: 1.75rem;
    background-color: #dee2e6;
    border: 1px solid white;
    border-radius: 15px;
    transition: 0.3s;
  }
  
  > .toggle-box.toggle__checked {
    background-color: #5c7cfa;
  }
  
  > .toggle-icon {
    background-color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    transition: 0.3s;
    top: 0;
    margin: 2px;
  }

  > .toggle-icon.toggle__checked {
    right: 0;
  }
`;