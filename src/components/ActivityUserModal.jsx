import {useState} from "react";
import styled from "styled-components";

const ActivityUserModal  = (props) =>{

    const [modal, setModal] = useState(false);
    const closeModal = () =>{
        props.closeModal();
      }


    return(
            <ModalBackground>
                <ModalBox>
                    <Box>
                        <CloseBox><CloseButton onClick={closeModal}>X</CloseButton></CloseBox>
                        <RowBox><ModalTitle>테스트 입니다</ModalTitle><ModalNamebox>이수빈</ModalNamebox></RowBox>
                        <RowBox><Modaltype>project</Modaltype><ModalPeriod>2023.01.01 ~ 2023.1.31</ModalPeriod></RowBox>
                        <ModalMain type="text"></ModalMain>
                        <Modalgit>깃허브 링크:{props.git}</Modalgit>
                        <RowBox><OffapplyButton onClick={() => { setModal(!modal);}} >
                        {!modal ? '신청하기' : '취소하기'}</OffapplyButton><Textalign>{!modal ? '' : '신청이 완료되었습니다'}</Textalign></RowBox>
                    </Box>
                </ModalBox>
            </ModalBackground>
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
    width: 38vw;
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

const ModalMain = styled.div`
    width: auto;
    height: 30vh;
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px;
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

const RowBox = styled.div`
    display: flex;
    margin-top: 12px;
`;

const Modalgit = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 600;
    font-size: 15px;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    align-items: center;
`;

const OffapplyButton = styled.button`
    width: 80px;
    height: 30px;
    font-weight: 1000;
    font-size: 13px;
    margin-bottom: 10px; 
    border-radius: 20px; 
    margin-left: 10px;
    cursor:pointer;
    background-color: ${({ modal }) => (!modal ? '#008d62' : '#ff5b7c')};
    border: none;
`;

const Textalign = styled.div`
    margin-left: 10px;
    padding-top:5px;   

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



export default ActivityUserModal;