import { useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ServiceAgree = ({setButtonState}) => {
  const [allAgree, setAllAgree] = useState(false);
  const [AccountAgree, setAccountAgree] = useState(false);
  const [personalAgree, setPersonalAgree] = useState(false);

  useEffect(() => {
    if (AccountAgree & personalAgree) {
      return setButtonState(true);
    }
    return setButtonState(false);
  }, [AccountAgree, personalAgree, setButtonState]);

  return (
    <>
      <IntroduceArea>
        Flaground
        <br />
        서비스 약관에 동의해 주세요.
      </IntroduceArea>
      <ServiceAgreeArea>
        <AllCheckButton setAllAgree={setAllAgree} />
        <AllAgreeMessage>
          전체 동의는 필수/선택 정보에 대한 동의가 포함되어 있으며
          <br />
          개별적으로도 동의하실 수 있습니다.
        </AllAgreeMessage>
        <RowLine />
        <CheckButton
          setAccountAgree={setAccountAgree}
          message={"[필수] FLAG 계정 약관"}
          allAgree={allAgree}
        />
        <CheckButton
          setAccountAgree={setPersonalAgree}
          message={"[필수] 개인정보 수집 및 이용 동의"}
          allAgree={allAgree}
        />
      </ServiceAgreeArea>
    </>
  );
};

const AllCheckButton = ({setAllAgree}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setAllAgree(toggle);
  }, [setAllAgree, toggle]);

  return (
    <>
      {toggle ? (
        <RelativeArea>
          <AgreeButton
            icon={faCircleCheck}
            onClick={() => setToggle(!toggle)}
          />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            모두 동의합니다.
          </AgreeMessage>
        </RelativeArea>
      ) : (
        <RelativeArea>
          <AgreeButton icon={faCircle} onClick={() => setToggle(!toggle)} />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            모두 동의합니다.
          </AgreeMessage>
        </RelativeArea>
      )}
    </>
  );
};

const CheckButton = ({setAccountAgree, message, allAgree}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(allAgree);
  }, [allAgree]);

  useEffect(() => {
    setAccountAgree(toggle);
  }, [setAccountAgree, toggle]);

  return (
    <>
      {toggle ? (
        <RelativeArea>
          <AgreeButton
            icon={faCircleCheck}
            onClick={() => setToggle(!toggle)}
          />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            {message}
          </AgreeMessage>
        </RelativeArea>
      ) : (
        <RelativeArea>
          <AgreeButton icon={faCircle} onClick={() => setToggle(!toggle)} />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            {message}
          </AgreeMessage>
        </RelativeArea>
      )}
    </>
  );
};

export default ServiceAgree;


const ServiceAgreeArea = styled.div`
  display: flex;
  width: 450px;
  justify-content: flex-start;
  flex-direction: column;
`;

const AllAgreeMessage = styled.div`
  color: black;
  font-size: 16px;
  width: 450px;
  padding-left: 25px;
  line-height: 25px;
  font-weight: 600;
`;

const RelativeArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.6rem 0;
`;

const AgreeButton = styled(FontAwesomeIcon)`
  height: 20px;
  margin-right: 0.8rem;
`;

const AgreeMessage = styled.div`
  font-size: 20px;
  font-weight: 100;
  line-height: 33px;
  color: black;
`;

const RowLine = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #9a9a9a;
  width: 100%;
  opacity: 0.6;
`;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: black;
  margin-top: 20px;
  margin-bottom: 45px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;