import styled from 'styled-components';
import React, {useState} from 'react';

const ChangePw = () => {
    
const [password,setPassword] = useState('');
const [passwordCheck,setPasswordCheck] = useState('');
const [passwordError,setPasswordError] = useState(false);

const onSubmit = (e) => {
    e.preventDefault();

    if(password !== passwordCheck){
        return setPasswordError(true);
    }
};

const onChangePassword = (e) => {
    setPassword(e.target.value);
};
const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
};

    return(
    <>
        <Mainbox>
        <PwTitle>
            비밀번호 변경 <SaveButton>저장하기</SaveButton>
        </PwTitle>
            <Pwbox>
                <Pwfield>
                    <Box><TextBox>비밀번호</TextBox><Box><PwChange name="user-password" type="password" value={password} required onChange={onChangePassword}></PwChange></Box><ErrorBox></ErrorBox></Box>
                    <Box><TextBox>비밀번호 확인</TextBox><Box><PwChange name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk}></PwChange></Box><ErrorBox>{ passwordError && <div>비밀번호가 일치하지 않습니다.</div>}</ErrorBox></Box>
                </Pwfield>
            </Pwbox>
        </Mainbox>
    </>
    );
}

const Mainbox = styled.div`
    display: flex;
    width: auto;
    height: auto;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
  `;

const Pwbox = styled.div`
    display: flex;
    width: 53%;
    height: 26vh;
    margin-top: 3vh;
    flex-direction: column; 
    align-items: center;
    border: 1px solid gray;
    border-radius:"2.5vh";
`;

const Box = styled.div`
    display: flex;
    margin: 4px;
    justify-content: center;
    align-items: center;
    text-align: left;
    font-size: 1rem;
`;

const TextBox = styled.div`
    width: 110px;
    align-items: center;
    text-align: left;
    font-size: 1rem;
`;

const PwChange = styled.input`
    width: 16vw;
    height: 5vh;
    margin-left: 3vw;
    padding-left: 2vw;
    background-color: transparent;
    border: 2px solid gray;
    border-radius:"2vh";
    font-size: 1rem;
    color: white;
`;

const Pwfield = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 15vh;
    font-size: 1rem;
    margin-top: 5.5vh;

`;

const PwTitle = styled.div`
    display: flex;
    width: 500px;
    height: 55px;
    margin-top: 17vh;
    margin-right: 15%;
    font-size: 2.2rem;
    font-weight: 800;
  `;

  const ErrorBox = styled.div`
    width:200px;
    margin-left: 2vw;
    font-size: 0.8rem;
    align-items: center;
  `;

  const SaveButton =  styled.button`
    width:20%;
    height: 50%;
    background: gray;
    color: white;
    border-radius:"1vh";
    border: 2px solid gray;
    margin-left: 5%;
    margin-top: 1%;
  `;

export default ChangePw;