import {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "../components/ActivityCard";
import { Toggle } from "../components/Toggle";

const name = ['이수빈'];
const day = ['2023.1.20' ,'2023.01.30'];
const title = ['알고리즘 스터디 초급반 모집합니다.'];
const tag = ['#flag #flag2'];
const git = ['Https://www.naver.com']

const ActivityModal = () =>{

    const [on, setOn] = useState(false);

    const applyHandler = () => {
        setOn(!on);
    };

    return(
        <>
            <ModalBackground>
                <ModalBox>
                    <Box>
                        <ModalTitle>{title}<ModalNamebox>{name}</ModalNamebox></ModalTitle>
                        <RowBox><Modaltype>project</Modaltype><ModalPeriod>{day[0]} ~ {day[1]}</ModalPeriod></RowBox>
                        <ModalMain type="text"></ModalMain>
                        <Modalgit>깃허브 링크:{git}</Modalgit>
                        <RowBox><OffapplyButton>
                          신청하기 </OffapplyButton> {!on ? '' : '신청이 완료되었습니다'}</RowBox>
                    </Box>
                </ModalBox>
            </ModalBackground>
        </>
    );
};

const Activity = () => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <Mainbox>
                <HeaderMenu>
                    <ActivityButton onClick={()=>{setModal(true)}}><FontAwesomeIcon icon={faCopy}/> All</ActivityButton>
                    <ActivityButton><FontAwesomeIcon icon={faFolderClosed}/>  Project</ActivityButton>
                    <ActivityButton><FontAwesomeIcon icon={faPencil}/>  Study</ActivityButton>
                    <ActivityButton><Toggle/></ActivityButton>
                </HeaderMenu>
                <MainContent>
                    <ActivityCard title = {title} text = {day[1]} tag = {tag} name = {name}/>
                    <ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/>
                    <ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/>
                    <ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/>
                    <ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/>
                    {modal == true ? <ActivityModal /> : null}
                </MainContent>
                
            </Mainbox>
        </>
    );

}

export default Activity;

const ActivityButton = styled.div`

    height: auto;
    color: gray;
    font-size: 1.3rem;
    font-weight: 500;
    margin-right: 10px;
    margin-bottom: 15px;
    border: none;
    background: transparent;
    cursor:pointer;
    
`;

const HeaderMenu = styled.div`
    display: flex;
    width: 80vw;
    height: 10%;
    align-items: center;
    margin-bottom: 50px;
`;

const Mainbox = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 3%;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

const MainContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: auto;
`;

const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0);
`;

const ModalBox = styled.div`
    position: absolute;
    top: calc(23vh); left: calc(31vw);
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
    margin: 8px;
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
    font-size: 17px;
    margin-top: 1.5%;
    text-align: right;
    width: 7vw;
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
    background-color: ${({ on }) => (on ? '#008d62' : '#ff5b7c')}};
    border: none;
`;



