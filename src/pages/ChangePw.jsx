import React, {useState} from 'react';
import { styled } from '@mui/system';

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

export default ChangePw;

const Mainbox = styled("div")({
    display: 'flex',
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    flexDirection: 'column', 
    alignItems: 'center',
  });

const Pwbox = styled("div")({
    display: 'flex',
    width: '53%',
    height: '26vh',
    marginTop: '3vh',
    flexDirection: 'column', 
    alignItems: 'center',
    border: '1px solid gray',
    borderRadius:"2.5vh",
});

const Box = styled("div")({
    display: 'flex',
    margin: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: '1rem',
});

const TextBox = styled("div")({
    width: '110px',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: '1rem',
});

const PwChange = styled("input")({
    width: '16vw',
    height: '5vh',
    marginLeft: '3vw',
    paddingLeft: '2vw',
    backgroundColor: 'transparent',
    border: '2px solid gray',
    borderRadius:"2vh",
    fontSize: '1rem',
    color: 'white',
})

const Pwfield = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40vw',
    height: '15vh',
    fontSize: '1rem',
    marginTop: '5.5vh',

});

const PwTitle = styled("div")({
    display: 'flex',
    width: '500px',
    height: '55px',
    marginTop: '17vh',
    marginRight: '15%',
    fontSize: '2.2rem',
    fontWeight: '800',
  });

  const ErrorBox = styled("div")({
    width:'200px',
    marginLeft: '2vw',
    fontSize: '0.8rem',
    alignItems: 'center',
  });

  const SaveButton = styled("button")({
    width:'20%',
    height: '50%',
    background: 'gray',
    color: 'white',
    borderRadius:"1vh",
    border: '2px solid gray',
    marginLeft: '5%',
    marginTop: '1%',
  });
