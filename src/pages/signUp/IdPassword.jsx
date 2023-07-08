import { useEffect, useState } from "react";
import styled from "styled-components";
import { loginRegex } from "../../constants/signUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import instance from "../../apis/AxiosInterceptorSetup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/slice/signUpSlice";

const IdPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState(false);
  const [state, setState] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    idMessage: "",
    passwordMessage: "",
    passwordConfirmMessage: "",
    idCheck: false,
  });
  const { id, password, passwordConfirm } = state;
  const { idMessage, passwordMessage, passwordConfirmMessage } = state;
  const data = useSelector((state) => state.signUpSlice);
  console.log(data);
  const handleIdCheck = async () => {
    const value = id;
    try {
      const res = await instance.post("/auth/check/id", {
        loginId: value,
      });
      res.data.payload.exist
        ? updateState("idMessage", "중복된 아이디입니다.")
        : updateState("idMessage", "사용가능한 아이디입니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (
      idMessage === "사용가능한 아이디입니다." &&
      passwordMessage === "사용가능한 비밀번호입니다." &&
      passwordConfirmMessage === "비밀번호와 일치합니다."
    ) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [idMessage, passwordConfirmMessage, passwordMessage]);

  useEffect(() => {
    if (password === "") {
      updateState("passwordConfirmMessage", "");
      updateState("passwordMessage", "");
      if (passwordConfirm !== "")
        updateState("passwordConfirmMessage", "비밀번호와 일치하지 않습니다.");
    } else if (password !== "") {
      if (passwordConfirm === "") {
        updateState("passwordConfirmMessage", "");
      } else {
        if (password === passwordConfirm)
          updateState("passwordConfirmMessage", "비밀번호와 일치합니다.");
        else
          updateState(
            "passwordConfirmMessage",
            "비밀번호와 일치하지 않습니다."
          );
      }
    }
  }, [password, passwordConfirm]);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    updateState(name, value);

    switch (name) {
      case "id":
        updateState(
          "idMessage",
          value === ""
            ? ""
            : loginRegex.id.test(value)
            ? ""
            : "아이디는 영문자와 숫자로 이루어져 있어야 하며, 최소 4자 이상, 최대 16자 이하여야 합니다."
        );
        break;
      case "password":
        updateState(
          "passwordMessage",
          loginRegex.password.test(value)
            ? "사용가능한 비밀번호입니다."
            : "숫자+영문자+특수문자(!@#$%^+=-) 조합으로 8자리 이상 입력해주세요!"
        );
        break;
      default:
        break;
    }
  };

  return (
    <PageArea>
      <PageBox>
        <IdPasswordArea>
          <IntroduceArea>
            로그인에 사용할
            <br />
            아이디, 비밀번호를 입력해주세요.
          </IntroduceArea>
          <InputBox className="loginId-box">
            <WriteArea
              className="loginId"
              name="id"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={handleInputChange}
            />
            <IdCheckButton onClick={handleIdCheck}>중복체크</IdCheckButton>
          </InputBox>
          <InfoState>{idMessage}</InfoState>
          <InputBox>
            <WriteArea
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handleInputChange}
            />
            <Icon icon={faLock} />
          </InputBox>
          <InfoState>{passwordMessage}</InfoState>
          <InputBox>
            <WriteArea
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={handleInputChange}
            />
            <Icon icon={faLock} />
          </InputBox>
          <InfoState>{passwordConfirmMessage}</InfoState>
        </IdPasswordArea>
        <ButtonBox>
          <Button
            type="button"
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={() => {
              navigate("/signUp/idPassword");
              dispatch(
                setUserData({
                  loginId: id,
                  password: password,
                })
              );
            }}
          >
            계속
          </Button>
        </ButtonBox>
      </PageBox>
    </PageArea>
  );
};

export default IdPassword;

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
  .loginId-box {
    justify-content: space-between;
    border: none;
  }
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
  .loginId {
    width: 75%;
    border: 1px solid #9a9a9a;
  }
`;

const IdCheckButton = styled.button`
  width: 20%;
  border-radius: 10px;
  height: 3.1rem;
  background-color: #228be6;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  @media (max-width: 480px) {
    width: 23%;
  }
`;

const Icon = styled(FontAwesomeIcon)``;

const WriteArea = styled.input`
  font-size: 1rem;
  color: black;
  height: 3.1rem;
  width: 93%;
  outline: none;
  border: none;
  padding: 0 1rem;
  border-radius: 10px;
  ::placeholder {
    color: #9a9a9a;
  }
`;

const InfoState = styled.div`
  width: 75%;
  color: black;
  font-size: 0.8rem;
  display: flex;
  justify-content: end;
  height: 0.7rem;
  margin-top: 0.6rem;
  margin-bottom: 1.2rem;
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
