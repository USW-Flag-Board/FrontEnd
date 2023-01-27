import { GifBoxSharp } from "@mui/icons-material";
import {useState, useRef} from "react";
import styled from "styled-components";

const ActivityManagerModal = (props) =>{
    
    //ammmodal = ActivityManagerModal 
    const [ammmodal, setAmmModal] = useState(false);
    //uimmodal = UserInformationModal
    const [uimmodal, setUimModal] = useState(false);
    const [index, setIndex] = useState(0);
    const closeModal = () =>{
        props.closeModal();
      }

    const Post = () =>{
        return(
            <>
            <Box>
                <ModalMain type="value"></ModalMain>
                <ModalSub>책사용여부:<br/>온/오프라인:</ModalSub>
                <ButtonRowBox><UserInformation onClick={()=>{setIndex(1)}}>신청자 정보 확인</UserInformation></ButtonRowBox>
            </Box>
            </>
        );
    }

    const User = () =>{
        return(
            <>
                <Box>
                    <ApplicantInfo></ApplicantInfo>
                    <ButtonRowBox><Deadline>마감하기</Deadline><BackButton onClick={()=>{setIndex(0)}}>뒤로가기</BackButton></ButtonRowBox>
                </Box>
            </>
        );
    };

    return(
        <>
            <ModalBackground>
                <ModalBox>
                    <Box>
                        <CloseBox><CloseButton onClick={closeModal}>X</CloseButton></CloseBox>
                        <RowBox><ModalTitle>테스트 입니다</ModalTitle><ModalNamebox>이수빈</ModalNamebox></RowBox>
                        <RowBox><Modaltype>project</Modaltype><ModalPeriod>2023.01.01 ~ 2023.1.31</ModalPeriod><ModifyBox><ModifyButton>수정하기</ModifyButton></ModifyBox></RowBox>
                        {index === 1 ? <User/> : null}
                        {index === 0 ? <Post/> : null}
                    </Box>
                </ModalBox>
                
            </ModalBackground>
        </>
    );



};

const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0);
`;

const ModalBox = styled.div`
    position: absolute;
    top: calc(17vh); left: calc(31vw);
    background-color: white;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 40%;
    height: auto;
    color: black;
`;

const ModalTitle = styled.div`
    margin: 10px;
    font-weight: 800;
    font-size: 23px;
    width: auto;
    display:flex;
`;

const Modaltype = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: center;
    margin-left: 10px;
    margin-top: 7px;
    align-items: center;
`;

const ModalPeriod = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: center;
    margin-left: 10px;
    margin-top: 7px;
    align-items: center;
`;

const ModalMain = styled.textarea`
    width: 90%;
    height: 30vh;
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    resize: none;
`;

const ApplicantInfo = styled.div`
    width: 90%;
    height: 30vh;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;

`;

const ModalNamebox = styled.div`
    font-size: 15px;
    margin-top: 1.5%;
    align-items: center;
    display:flex;
    margin-left: 15px;
    width: auto;
    font-weight: 800;
    
`;

const Box = styled.div`
    margin: 5px;
    width: 95%;
    height: 95%;
    flex-direction: column;
`;

const ButtonRowBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-top: 12px;
`;

const RowBox = styled.div`
    display: flex;
    margin-top: 12px;
`;

const ModalSub = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 600;
    font-size: 15px;
    padding: 15px;
    margin-right: 10px;
    margin-left: 10px;
    align-items: center;
`;

const UserInformation = styled.button`
    width: auto;
    font-weight: 1000;
    font-size: 13px;
    margin-bottom: 10px; 
    border-radius: 20px; 
    padding-right: 18px;
    padding-left: 18px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-left: 10px;
    cursor:pointer;
    color: white;
    background-color: rgba(44,44,44);
    border: none;
`;

const BackButton = styled.button`
    width: auto;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 7px;
    padding-bottom: 7px;
    font-weight: 1000;
    font-size: 13px;
    margin-bottom: 10px; 
    border-radius: 20px; 
    margin-left: 10px;
    cursor:pointer;
    color: white;
    background-color: rgba(44,44,44);
    border: none;
`;

const ModifyBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 8vw;
    height: 6vh;
    align-items: flex-end;

`;

const ModifyButton = styled.button`
    font-weight: 800;
    font-size: 12px;
    display: flex;
    flex-direction: row-reverse;
    background: transparent;
    border: none;
    cursor:pointer;
`;

const Deadline = styled.button`
    width: auto;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 7px;   
    padding-bottom: 7px;
    font-weight: 1000;
    font-size: 13px;
    margin-bottom: 10px; 
    border-radius: 20px; 
    margin-right: 10px;
    cursor:pointer;
    color: white;
    background-color: rgba(44,44,44);
    border: none;
`;

const ButtonInterval = styled.div`
    width:dasd;
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 18px;
    font-weight: 800;
    cursor:pointer;

`;

const CloseBox = styled.div`
    width: auto;
    display: flex;
    flex-direction: row-reverse;
`;

export default ActivityManagerModal;