import { useEffect, useState } from "react";
import styled from "styled-components";
import { loginRegex } from "../../constants/signUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { baseInstance } from "../../apis/instance";

const IdPassword = ({ setButtonState, setIdPassword, signUpData}) => {
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
    const { idMessage, passwordMessage, passwordConfirmMessage} = state;
    
    const handleIdCheck = async () => {
      const value = id;
      try{
        const res = await baseInstance.post("/auth/check/id", {
          loginId: value,
        });
        res.data.payload ? updateState("idMessage", "중복된 아이디입니다.") : updateState("idMessage", "사용가능한 아이디입니다.")
      }catch(error){
        console.log(error)
      }
    };

    const updateState = (key, value) => {
      setState(prevState => ({
        ...prevState,
        [key]: value
      }));
    };

    useEffect(()=>{
      if(idMessage === "사용가능한 아이디입니다." &&
        passwordMessage === "사용가능한 비밀번호입니다." &&
        passwordConfirmMessage === "비밀번호와 일치합니다."){
          setButtonState(true);
          setIdPassword({
            ...signUpData,
            loginId: id,
            password: password
          })
        }else{
          setButtonState(false);
        }
    },[idMessage, passwordConfirmMessage, passwordMessage])
    
    useEffect(() => {
      if(password === ""){
        updateState("passwordConfirmMessage", "");
        updateState("passwordMessage", "");
        if(passwordConfirm !== "") updateState("passwordConfirmMessage", "비밀번호와 일치하지 않습니다.");
      }else if(password !== ""){
        if(passwordConfirm === ""){
          updateState("passwordConfirmMessage", "")
        }else{
          if(password === passwordConfirm) updateState("passwordConfirmMessage", "비밀번호와 일치합니다.");
          else updateState("passwordConfirmMessage", "비밀번호와 일치하지 않습니다.");
        }
      }
      
    }, [password, passwordConfirm]);
  
    const handleInputChange = (event) => {
      const { value, name } = event.target;
      updateState(name, value);
    
      switch (name) {
        case "id":
          updateState("idMessage", value === "" ? "" : loginRegex.id.test(value) ? "" : "아이디는 영문자와 숫자로 이루어져 있어야 하며, 최소 4자 이상, 최대 16자 이하여야 합니다.");
          break;
        case "password":
          updateState("passwordMessage", loginRegex.password.test(value) ? "사용가능한 비밀번호입니다." : "숫자+영문자+특수문자(!@#$%^+=-) 조합으로 8자리 이상 입력해주세요!.");
          break;
        default:
          break;
      }
    };
  
    return (
      <IdPasswordArea>
        <IntroduceArea>
          로그인에 사용할
          <br />
          아이디, 비밀번호를 입력해주세요
        </IntroduceArea>
        <InputBox>
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
          <Icon icon={faLock}/>
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
          <Icon icon={faLock}/>
        </InputBox>
        <InfoState>{passwordConfirmMessage}</InfoState>
      </IdPasswordArea>
    );
  };

export default IdPassword;

const IdPasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  .loginId{
    width: 70%;
  }
`;

const IdCheckButton = styled.button`
  width: 30%;
  height: 3.1rem;
`;

const Icon = styled(FontAwesomeIcon)``;

const WriteArea = styled.input`
  font-size: 1rem;
  color: black;
  padding: 0 1.9rem 0 1.25rem;
  height: 3.1rem;
  width: 100%;
  background: transparent;
  border-radius: 1.9rem;
  border: 2px solid gainsboro;
  outline: none;
  margin: 0.6rem 1rem 0.6rem 0;
  :focus {
    border-color: black;
  }
  ::placeholder {
    color: gainsboro;
  }
`;

const InfoState = styled.div`
  width: 75%;
  color: black;
  font-size: 0.8rem;
  display: flex;
  justify-content: end;
  height: 0.7rem;
  margin-bottom: 1.25rem;
`;