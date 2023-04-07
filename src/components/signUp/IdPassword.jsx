import { useEffect, useState } from "react";
import styled from "styled-components";
import { loginRegex } from "../../constants/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const IdPassword = ({ setButtonState, setIdPassword, signUpData}) => {
    const [userInput, setUserInput] = useState({
      loginId: {
        id: 0,
        inputData: "", 
        message: "",
        check: false,
        type: "text",
        placeholder: "아이디",
        icon: <Icon icon={faUser}/>
      },
      password: {
        id: 1,
        inputData: "",
        message: "", 
        check: false,
        type: "password",
        placeholder: "비밀번호",
        icon: <Icon icon={faLock}/>
      },
      passwordVerify: {
        id: 2,
        inputData: "",
        message: "", 
        check: false,
        type: "password",
        placeholder: "비밀번호 확인",
        icon: <Icon icon={faLock}/>
      }
    });

    useEffect(()=>{
      if(userInput.loginId.check &&
        userInput.password.check&&
        userInput.passwordVerify.check){
          setButtonState(true);
          setIdPassword({
            ...signUpData,
            loginId: userInput.loginId.inputData,
            password: userInput.password.inputData
          })
        }else{
          setButtonState(false);
        }
    },[userInput.loginId.check, userInput.password.check, userInput.passwordVerify.check, setButtonState])
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
          setUserInput({
            ...userInput,
            [name]: {
              ...userInput[name],
              inputData: value 
            }
        })
      }

    const handleNameBlur = (event) => {
      const { name } = event.target
      if(name === "loginId"){
        if(!loginRegex.id.test(userInput.loginId.inputData)){
            setUserInput({
              ...userInput,
              [name]: {
                ...userInput[name],
                message: "아이디는 영문자와 숫자로 이루어져 있어야 하며, 최소 4자 이상, 최대 16자 이하여야 합니다.",
                check: false
              }
            })
            return;
          }else{
            setUserInput({
              ...userInput,
              [name]: {
                ...userInput[name],
                message: "",
                check: true
              }
            })
          }
      }else if(name === "password"){
        if(!loginRegex.password.test(userInput.password.inputData)){
          setUserInput({
            ...userInput,
            [name]: {
              ...userInput[name],
              message: "비밀번호는 영문자와 숫자, 특수문자 중 2가지 이상을 조합하여 최소 8자 이상, 최대 20자 이하여야 합니다.",
              check: false
            }
          })
          return;
        }else{
          setUserInput({
            ...userInput,
            [name]: {
              ...userInput[name],
              message: "",
              check: true
            }
          })
        }
      }else if(name === "passwordVerify"){
        if(userInput.password.inputData !== userInput.passwordVerify.inputData){
          setUserInput({
            ...userInput,
            [name]: {
              ...userInput[name],
              message: "비밀번호를 정확히 입력해주세요.",
              check: false,
            }
          })
        }else{
          setUserInput({
            ...userInput,
            [name]: {
              ...userInput[name],
              message: "",
              check: true
            }
          })
        }
      }
    }

    return (
      <>
        <IntroduceArea>
          로그인에 사용할
          <br />
          아이디, 비밀번호를 입력해주세요
        </IntroduceArea>
        {Object.keys(userInput).map((item) =>(
            <div key={item}>
              <WriteArea
                name={item}
                type={userInput[item].type}
                placeholder={userInput[item].placeholder}
                value={userInput[item].inputData}
                onChange={handleInputChange}
                onBlur={handleNameBlur}
              />
              {userInput[item].icon}
              <InfoState>{userInput[item].message}</InfoState>
            </div>
          ))}
      </>
    );
  };

export default IdPassword;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;

const Icon = styled(FontAwesomeIcon)`
  color: black;
  left: 430px;
  top: 28px;
`;

const WriteArea = styled.input`
  font-size: 16px;
  color: black;
  padding: 0 30px 0 20px;
  height: 50px;
  width: 400px;
  background: transparent;
  border-radius: 30px;
  border: 2px solid gainsboro;
  outline: none;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  :hover {
    border-color: black;
  }
  ::placeholder {
    color: black;
  }
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: end;
  height: 11px;
  margin-bottom: 20px;
`;