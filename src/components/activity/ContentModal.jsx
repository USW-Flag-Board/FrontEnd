import styled from "styled-components";
import { useEffect, useState } from 'react';
import { baseInstance } from "../../apis/instance";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";
import ApplyCheckModal from "./ApplyCheckModal";
import SelectedCheckModal from "./SelectedCheckModal";
import EditModal from "./EditModal";

const ContentModal = ({ closeModal, cardId }) => {
    const [apply, setApply] = useState(null);
    const [edit, setEdit] = useState(false);
    const [isLeader, setIsLeader] = useState(null);
    const [modalContent, setModalContent] = useState("");
    const [applyMembersCheck, setApplyMembersCheck] = useState(false);
    const [selectedMembersCheck, setSelectedMembersCheck] = useState(false);
    const { type, id, leader, name, semester, status, description, githubURL, proceed, bookUsage, bookName } = modalContent;
    const writerName = SessionStorage.get("name");
    
    const hadleApplyClick = async () => {
      try{
        await instance.post(`activities/${id}/apply`)
        setApply(true)
      }catch(error){
        console.log(error);
      }
    };

    const handledDelteClick = async () => {
      if(window.confirm("정말 삭제하시겠습니까?")){
        try{
          await instance.delete(`activities/${id}`)
          alert("삭제되었습니다.")
          closeModal();
        }catch(error){
          console.log(error)
        }
      }
    }

    const handleFinishClick = async () => {
      if(window.confirm("활동을 종료하시겠습니까?")){
        try{
          await instance.patch(`activities/${id}/finish`)
          alert("활동이 종료되었습니다.")
          closeModal();
        }catch(error){
          console.log(error);
        }
      }
    }

    const handleCancelClick = async () => {
      if(window.confirm("신청을 취소하시겠습니까?")){
        try{
          await instance.delete(`activities/${id}/apply`)
          alert("신청이 취소되었습니다.")
          closeModal();
        }catch(error){
          console.log(error)
        }
      }
    }

    useEffect(()=>{
      if(leader === writerName)setIsLeader(true);
      else setIsLeader(false);
    }, [writerName, leader])

    useEffect(()=>{
      async function fetchData(){
        try{
          const response = await baseInstance.get(`/activities/${cardId}`)
          setModalContent(response.data.payload);
        }catch(error){
          console.log(error);
        }
      }
      fetchData();
    }, [edit])
    
    useEffect(()=>{
      if(sessionStorage.getItem("name")){
        async function fetchData(){
          try{
            const response = await instance.post(`/activities/${cardId}/check`)
            if(response.data.payload) setApply(true)
            else setApply(false)
          }catch(error){
            console.log(error);
          }
          }
          fetchData();
      }
    }, [])

    return(
      <ModalArea>
        <ModalBox>
          {!applyMembersCheck && !selectedMembersCheck && !edit && (
          <>
            <SelectAndTitle>
              <Select>{type}</Select>
              <TitleArea><Title>{name}</Title></TitleArea>
            </SelectAndTitle>
            <Master>활동장: {leader}</Master>
            <ContentBox>
              <Content>{description}</Content>
            </ContentBox>
            <CheckBox>
              {type === 'PROJECT' ? (
                <>
                  <RadioBox>
                    <Span>깃허브 링크: {githubURL}</Span>
                  </RadioBox>
                  <RadioBox>
                    <Span>온/오프라인: {proceed}</Span>
                  </RadioBox>
                </>
              ) :
                <>
                  <RadioBox>
                    <Span>책 사용 여부: {bookUsage}</Span>
                  </RadioBox>
                  {bookUsage === 'USE' ? 
                    <RadioBox>
                      <Span>책 이름: {bookName}</Span>
                    </RadioBox>
                  : null }
                  <RadioBox>
                    <Span>온/오프라인: {proceed}</Span>
                  </RadioBox>
                </>}
            </CheckBox>
            <ButtonArea>
              <ButtonBox>
                {isLeader && writerName && (
                  <ModalButton 
                    className="delete-button"
                    type="button"
                    onClick={handledDelteClick}>
                    활동삭제
                  </ModalButton>
                )}

                {isLeader && status === 'RECRUIT' && writerName && (
                <>
                  <ModalButton 
                    type="button"
                    className="delete-button"
                    onClick={()=>setEdit(true)}>
                    수정
                  </ModalButton>
                  <ModalButton 
                    type="button"
                    className="check-members"
                    onClick={()=>setApplyMembersCheck(true)}
                    >
                      신청자 정보 확인
                  </ModalButton>
                </>
                )}

                {isLeader && status === 'ON' && writerName && (
                <>
                  <ModalButton 
                    className="delete-button"
                    type="button"
                    onClick={handleFinishClick}
                    >
                    활동종료
                  </ModalButton>
                  <ModalButton 
                    type="button"
                    className="check-members"
                    onClick={()=>setSelectedMembersCheck(true)}
                    >
                      참여자 정보 확인
                  </ModalButton>
                </>
                )}

                {!isLeader && status !== 'ON' && !apply && writerName && (
                  <ModalButton 
                    type="button"
                    className="onApply"
                    onClick={hadleApplyClick}
                    >
                      신청하기
                  </ModalButton>
                )}
                
                {!isLeader && status !== 'ON' && apply && writerName && (
                  <ModalButton
                    type="button"
                    className="offApply"
                    onClick={handleCancelClick}
                    >
                      취소하기
                  </ModalButton>
                )}
                <ModalButton 
                  type="button"
                  onClick={closeModal}
                  >
                    닫기
                </ModalButton>
              </ButtonBox>
            </ButtonArea>
          </>
        )}
        {leader && status !== 'ON' && applyMembersCheck && writerName && (
          <ApplyCheckModal 
            setApplyMembersCheck={setApplyMembersCheck}
            id={id}
            closeModal={closeModal}
          />
        )}

        {leader && status === 'ON' && selectedMembersCheck && writerName && (
          <SelectedCheckModal id={id}
          setSelectedMembersCheck={setSelectedMembersCheck}
          />
        )}
        {edit ? <EditModal 
          setEdit={setEdit}
          modalContent={modalContent}
          /> : null}
        </ModalBox>
      </ModalArea>
    )
  }

export default ContentModal;

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  width: 680px;
  height: 550px;
  padding: 2rem;
`;

const SelectAndTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Select = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleArea = styled.div`
  width: 68%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1rem;
`;

const Master = styled.div`
  margin-left: calc(30% + 2rem);
  font-weight: bold;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55%;
  margin: 1rem 0;
`;

const Content = styled.div`
  box-sizing: border-box;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

const CheckBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding: 0 1rem;
  height: 10%;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: space-between;

  .on-writer{
    width: 25%;
  }

  .no-writer{
    width: 100%;
  }
  
  .offApply{
    background-color: #CD5E5E;
    border: none;
    color: black;
  }
  .delete-button{
    background: none;
    width: fit-content;
    color: black;
    border: none;
    margin-right: 0.5rem;
  }

  .check-members{
    float: right;
  }
`;

const ButtonBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  height: 50%;
  background-color: #404040;
  color: white;
  cursor: pointer;
`;

const Span = styled.span`
    margin-right: 1rem;
`;
