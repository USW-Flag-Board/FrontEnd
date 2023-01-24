import { useState } from 'react';
import styled from 'styled-components';

// styled component 이름은 pascalcase
// toggle을 component 생성
const ToggleBox = styled.div`
  position: relative;

  > .toggle-box { // >의 뜻은 해당 component의 자식 중이라는 의미다.
    background-color: #3C3C3C;
    border: 1px solid white;
    border-radius: 15px;
    width: 3.8vw;
    left: 56.7vw;
    top: -8px;
    height: 28px;
    position: absolute;
    transition: 0.3s;
  }

  > .toggle-box.toggle__checked {
   // 두개의 클래스 명을 붙일 경우 두개의 클래스 명을 모두 가지고 있는 tag를 가르킨다.
    background-color: #3C3C3C;
  }

  > .toggle-icon {
    top: -6px;
    left: 56.7vw;
    background-color: black;
    border: 1px solid white;
    width: 24px;
    height: 24px;
    border-radius: 25px;
    position: absolute;
    transition: 0.3s;
  }

  > .toggle-icon.toggle__checked {
    left: 58.9vw;
  }
`;

//${}는 styled component내에서 js를 사용 할 수 있게 해준다.
const ToggleState = styled.p`
  color: ${({ isOn }) => (isOn ? 'gray' : '#9a9a9a')}};
  color: white;
  left: 50vw;
  width: 90px;
  top: -3px;
  position: absolute;
`;

 

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <>

      <ToggleBox>
        <div className={isOn ? 'toggle-box toggle__checked' : 'toggle-box'} onClick={toggleHandler} />
        <div className={isOn ? 'toggle-icon toggle__checked' : 'toggle-icon'} onClick={toggleHandler} />        
        <ToggleState isOn={isOn} >
          {isOn ? '모집중' : '모집마감'}
        </ToggleState>
      </ToggleBox>

    </>
  );
};