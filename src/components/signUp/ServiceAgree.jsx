import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ServiceAgree = ({setButtonState}) => {
  const [checkItems, setCheckitems] = useState([]);
  
  const checkAll = (checked) => {
    checked
    ? setCheckitems(["personalAgree", "accountAgree"])
    : setCheckitems([]);
  }

  const check = (checked, name) => {
    console.log(checked)
    checked
      ? setCheckitems([...checkItems, name])
      : setCheckitems(checkItems.filter((choice)=> choice !== name));
  }

  useEffect(() => {
    if(
      checkItems.includes("personalAgree") &&
      checkItems.includes("accountAgree")
    ){
      setButtonState(true);
    } else{
      setButtonState(false);
    }
  }, [checkItems, setButtonState])

  return (
    <IdPasswordArea>
      <IntroduceArea>
        Flaground
        <br />
        서비스 약관에 동의해 주세요.
      </IntroduceArea>
      <ServiceAgreeArea>
        <RelativeArea>
          <AgreeButton 
            type='checkbox'
            checked={checkItems.length === 2}
            onChange={(e) => checkAll(e.target.checked)}
          />
          <AgreeMessage>모두 동의합니다.</AgreeMessage>
        </RelativeArea>
        <AllAgreeMessage>
          전체 동의는 필수/선택 정보에 대한 동의가 포함되어 있으며
          <br />
          개별적으로도 동의하실 수 있습니다.
        </AllAgreeMessage>
        <RowLine />
        <RelativeArea>
          <AgreeButton
            type='checkbox'
            name="accountAgree"
            checked={checkItems.includes("accountAgree")}
            onChange={(e) => check(e.target.checked, "accountAgree")}
            />
          <AgreeMessage>[필수] FLAG 계정 약관</AgreeMessage>
        </RelativeArea>
        <RelativeArea>
          <AgreeButton 
            type='checkbox'
            name="personalAgree"
            checked={checkItems.includes("personalAgree")}
            onChange={(e) => check(e.target.checked, "personalAgree")}
          />
          <AgreeMessage>[필수] 개인정보 수집 및 이용 동의</AgreeMessage>
        </RelativeArea>
      </ServiceAgreeArea>
    </IdPasswordArea>
  );
};

export default ServiceAgree;

const IdPasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ServiceAgreeArea = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const AllAgreeMessage = styled.div`
  color: black;
  font-size: 1rem;
  padding-left: 1.6rem;
  line-height: 1.6rem;
  font-weight: 600;
`;

const RelativeArea = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;
`;

const AgreeButton = styled.input`
  width: 1.2rem;
  height: 1.25rem;
  margin-right: 0.8rem;
  appearance: none;
  border: 1px solid #868e96;
  border-radius: 3.1rem;
  &:checked{
    background-color: #228be6;
  }
`;

const AgreeMessage = styled.label`
  font-size: 1.25rem;
  font-weight: 100;
  line-height: 2rem;
  color: black;
`;

const RowLine = styled.hr`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #9a9a9a;
  width: 100%;
  opacity: 0.6;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2.1rem;
  width: 80%;
  color: black;
  margin-top: 1.25rem;
  margin-bottom: 2.8rem;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;