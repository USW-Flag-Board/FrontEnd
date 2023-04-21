import styled from "styled-components";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import instance from "../../apis/AxiosInterceptorSetup";

const ApplyCheckModal = ({setApplyCheck, id}) => {
    const [applyMember, setApplyMembers] = useState("");
    const [selectedMember, setSelectedMember] = useState([]);
    console.log(selectedMember)
    const handleMemberClick = (name, major, id, loginId) => {
      if(!selectedMember.some(member => member.loginId === loginId)){
      const newMember = {
        name: name,
        major: major,
        id: id,
        loginId: loginId
      };
      setSelectedMember([...selectedMember, newMember])
      }
    }
    
    useEffect(()=>{
        async function fetchData(){
          try{
            const response = await instance.get(`/activities/${id}/apply`)
            setApplyMembers(response.data.payload)
          }catch(error){
            console.log(error);
          }
        }
        fetchData();
      }, [])
    
    return(
        <>
            <ContentBox>
                <Content className="content-area">
                  <MembersTitle>신청자 정보 확인</MembersTitle>
                  {applyMember && applyMember.map(({name, major, id, loginId})=> (
                    <MembersBox key={id} onClick={()=>handleMemberClick(name, major, id, loginId)}>
                      <MemberIcon icon={faUser}/>
                      <span>{name}</span>
                      <span>({major})</span>
                    </MembersBox>
                  ))}
                </Content>
            </ContentBox>
            <ContentBox className="selected-member">
            <Content>
              <MembersTitle>선택한 멤버</MembersTitle>
              {selectedMember && selectedMember.map(({name, major, id, loginId})=>(
                <MembersBox key={id}>
                  <MemberIcon icon={faUser}/>
                  <span>{name}</span>
                  <span>({major})</span>
                </MembersBox>
              ))}
            </Content>
            </ContentBox>
            <ButtonArea>
                <ButtonBox>
                    <ModalButton type="button" onClick={()=>setApplyCheck(false)}>뒤로가기</ModalButton>
                </ButtonBox>
                <ButtonBox>
                    <ModalButton type="button">마감하기</ModalButton>
                </ButtonBox>
            </ButtonArea>
        </>
    )
}

export default ApplyCheckModal;

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  margin: 1rem 1rem 1rem 0;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid #8e8e8e;
  border-radius: 20px;

  :nth-child(2){
    height: 30%;
  }
`;


const Content = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  resize: none;
  overflow-y: auto;

    /* 스크롤바 전체 */
  ::-webkit-scrollbar {
    width: 1rem;
  }
  
  /* 스크롤바의 슬라이더 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #555;
  }
  
  /* 스크롤바의 트랙 */
  ::-webkit-scrollbar-track {
    border: 1px solid #8e8e8e;
    background-color: white;
    border-radius: 10px;
  }
`;

const MembersTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const MembersBox = styled.div`
  cursor: pointer;
  margin-bottom: 0.6rem;
  width: fit-content;
`

const MemberIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  width: 100%;
  height: 50%;
  background-color: #404040;
  color: white;
  cursor: pointer;
`;