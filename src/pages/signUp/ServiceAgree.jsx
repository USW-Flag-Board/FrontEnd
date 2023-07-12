import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ServiceAgree = () => {
  const navigate = useNavigate();
  const [checkItems, setCheckitems] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const checkAll = (checked) => {
    checked
      ? setCheckitems(["personalAgree", "accountAgree"])
      : setCheckitems([]);
  };

  const check = (checked, name) => {
    checked
      ? setCheckitems([...checkItems, name])
      : setCheckitems(checkItems.filter((choice) => choice !== name));
  };

  useEffect(() => {
    if (
      checkItems.includes("personalAgree") &&
      checkItems.includes("accountAgree")
    ) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [checkItems, setButtonState]);

  return (
    <PageArea>
      <PageBox>
        <IdPasswordArea>
          <IntroduceArea>
            Flaground
            <br />
            서비스 약관에 동의해 주세요.
          </IntroduceArea>
          <ServiceAgreeArea>
            <CheckBoxArea>
              <CheckBox>
                <AgreeButton
                  type="checkbox"
                  checked={checkItems.length === 2}
                  onChange={(e) => checkAll(e.target.checked)}
                />
                모두 동의합니다.
              </CheckBox>
            </CheckBoxArea>
            <AllAgreeMessage>
              전체 동의는 필수/선택 정보에 대한 동의가 포함되어 있으며
              개별적으로도 동의하실 수 있습니다.
            </AllAgreeMessage>
            <RowLine />
            <CheckBoxArea>
              <CheckBox>
                <AgreeButton
                  type="checkbox"
                  name="accountAgree"
                  checked={checkItems.includes("accountAgree")}
                  onChange={(e) => check(e.target.checked, "accountAgree")}
                />
                이용약관 동의(필수)
              </CheckBox>
              <AgreeMessage>
                <a
                  href="https://sites.google.com/view/suwiki-policy-terms"
                  rel="noreferrer"
                  target="_blank"
                >
                  상세보기
                </a>
              </AgreeMessage>
            </CheckBoxArea>
            <CheckBoxArea>
              <CheckBox>
                <AgreeButton
                  type="checkbox"
                  name="personalAgree"
                  checked={checkItems.includes("personalAgree")}
                  onChange={(e) => check(e.target.checked, "personalAgree")}
                />
                개인정보처리방침 동의(필수)
              </CheckBox>
              <AgreeMessage>
                <a
                  href="https://sites.google.com/view/suwiki-policy-privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  상세보기
                </a>
              </AgreeMessage>
            </CheckBoxArea>
          </ServiceAgreeArea>
        </IdPasswordArea>
        <ButtonBox>
          <Button
            type="button"
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={() => navigate("/signUp/joinType")}
          >
            계속
          </Button>
        </ButtonBox>
      </PageBox>
    </PageArea>
  );
};

export default ServiceAgree;

const PageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageBox = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  @media (max-width: 480px) {
    border: none;
  }
`;

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
  margin-bottom: 1rem;
`;

const AllAgreeMessage = styled.div`
  color: #868e96;
  padding-left: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
`;

const CheckBoxArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.6rem 0;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const AgreeButton = styled.input`
  width: 1.2rem;
  height: 1.25rem;
  cursor: pointer;
  margin-right: 0.8rem;
  border: 1px solid #868e96;
  &:checked {
    background-color: #228be6;
  }
`;

const AgreeMessage = styled.label`
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 1.5rem;
  color: black;
  > a {
    text-decoration: underline;
    font-size: 0.8rem;
    color: black;
  }
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
  line-height: 2.3rem;
  width: 80%;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const ButtonBox = styled.div`
  width: 80%;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  color: white;
  height: 4rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background: #228be6;
  border-radius: 10px;
  &.close {
    background: #a5d8ff;
  }

  &.open {
    background: #228be6;
  }
`;
