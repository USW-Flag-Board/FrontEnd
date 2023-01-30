import {useState, useRef} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "../components/ActivityCard";
import { Toggle } from "../components/Toggle";
import ActivityUserModal from "../components/ActivityUserModal";
import ActivityManagerModal from "../components/ActivityManagerModal";
import ActivityWrite from "../components/ActivityWrite";

const name = ['이수빈'];
const day = ['2023.1.20 ~ 2023.01.30'];
const title = ['알고리즘 스터디 초급반 모집합니다.'];
const tag = ['#flag #flag2'];
const git = ['Https://www.naver.com'];

const Activity = () => {

    const [user, setUser] = useState(false);
    const [manager, setManager] = useState(false);
    const [write, setWrite] = useState(false);
    const outside = useRef();

    const Click = () => {
        setUser(!user)
    };

    return (
        <>
            <Mainbox>
                <HeaderMenu>
                    <ActivityButton><FontAwesomeIcon icon={faCopy}/> All</ActivityButton>
                    <ActivityButton onClick={() => setManager(!manager)}><FontAwesomeIcon icon={faFolderClosed}/>  Project</ActivityButton>
                    <ActivityButton><FontAwesomeIcon icon={faPencil}/>  Study</ActivityButton>
                    <ActivityButton><PostButton onClick={() => setWrite(!write)}>글 작성하기</PostButton></ActivityButton>
                    <ActivityButton><Toggle/></ActivityButton>
                </HeaderMenu>
                <MainContent>
                    <ButtonBox onClick={() => setUser(!user)}><ActivityCard title = {title} text = {day} tag = {tag} name = {name}/></ButtonBox>
                    <ButtonBox onClick={() => setManager(!manager)}><ActivityCard title = '누르면 개설자 컴포넌트 나와요' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/></ButtonBox>
                    <ButtonBox onClick={() => setUser(!user)}><ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/></ButtonBox>
                    <ButtonBox onClick={() => setUser(!user)}><ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/></ButtonBox>
                    <ButtonBox onClick={() => setUser(!user)}><ActivityCard title = '테스트 입니다' text = '모집 마감일: 2023.01.30' tag = '#flag #flag2' name = '이수빈'/></ButtonBox>
    
                    {write && (
                    <ActivityWrite closeModal={() => setWrite(!write)}>
                        </ActivityWrite>
                    )}
                    {user && (
                    <ActivityUserModal closeModal={() => setUser(!user)}>
                        </ActivityUserModal>
                    )}
                    {manager && (
                    <ActivityManagerModal closeModal={() => setManager(!manager)}>
                        </ActivityManagerModal>
                    )}
                    
                </MainContent>
                
            </Mainbox>
        </>
    );

};

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

const PostButton = styled.button`
    width: auto;
    height: auto;
    border: none;
    background: transparent;
    font-size: 20px;
    font-weight: 800;
    color: white;
    cursor:pointer;
`;

const ButtonBox = styled.button`  
    margin: 5px;
    color: white;
    border: none;
    background: transparent;
`

export default Activity;
