import styled from "styled-components";
import { useEffect, useState } from 'react';
import { baseInstance } from "../../apis/instance";
import { SessionStorage } from "../../utils/browserStorage";
import ApplyCheckModal from "./ApplyCheckModal";
import instance from "../../apis/AxiosInterceptorSetup";

const ContentModal = ({ closeModal, cardId }) => {
    const [apply, setApply] = useState(true);
    const [modalContent, setModalContent] = useState("");
    const [applyCheck, setApplyCheck] = useState(false);
    const { activityType, id, leader, name, semester, status, description } = modalContent;
    const writerName = SessionStorage.get("name");
    
    const hadleApplyClick = async () => {
      try{
        const response = await instance.post(`activities/${id}/apply`)
        console.log(response)
      }catch(error){
        console.log(error);
      }
    };

    const handledDelteClick = async () => {
      try{
        await instance.delete(`activities/${id}`)
        closeModal();
      }catch(error){
        console.log(error)
      }
    }

    const handleCancelClick = async () => {
      try{
        await instance.delete(`activities/${id}/apply`)
        closeModal();
      }catch(error){
        console.log(error)
      }
    }

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
    }, [cardId])

    useEffect(()=>{
      async function fetchData(){
        try{
          const response = await instance.post(`/activities/${cardId}/check`)
          if(response.data.payload) setApply(false)
          else setApply(true)
        }catch(error){
          console.log(error);
        }
      }
      fetchData();
    },[cardId])

    return(
      <ModalArea>
        <ModalBox>
        {!applyCheck ?
        <>
          <SelectAndTitle>
            <Select>{activityType}</Select>
            <TitleArea><Title>{name}</Title></TitleArea>
          </SelectAndTitle>
          <Master>활동장: {leader}</Master>
          <EditButtonBox>
            <EditButton type="button">수정</EditButton>
          </EditButtonBox> 
          <ContentBox>
            <Content>{description}</Content>
          </ContentBox>
          <CheckBox>
            <RadioBox>
              <Span>깃허브 링크:</Span>
            </RadioBox>
          </CheckBox>
          <ButtonArea>
            {leader === writerName ?
              <>
                <ButtonBox>
                  <ModalButton 
                    className="delete-button"
                    type="button"
                    onClick={handledDelteClick}
                  >
                    활동삭제
                  </ModalButton>
                </ButtonBox>
                <ButtonBox className="on-writer">
                  <ModalButton 
                    type="button"
                    onClick={()=>setApplyCheck(true)}
                    >
                      신청자 정보 확인
                    </ModalButton>
                  <ModalButton
                    type="button"
                    onClick={closeModal}
                  >
                    닫기
                  </ModalButton>
                </ButtonBox>
              </>
            :
              <ButtonBox className="no-writer">
                {apply ?
                  <ModalButton 
                    type="button"
                    className="onApply"
                    onClick={hadleApplyClick}
                    >
                      신청하기
                  </ModalButton>
                :
                  <ModalButton
                    type="button"
                    className="offApply"
                    onClick={handleCancelClick}
                    >
                      취소하기
                    </ModalButton>
                }
                <ModalButton type="button" onClick={closeModal}>닫기</ModalButton>
              </ButtonBox>}
            </ButtonArea>
          </>
          : 
          <ApplyCheckModal setApplyCheck={setApplyCheck} id={id}/>
          }
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
  gap: 10px;
  font-weight: bold;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const ButtonArea = styled.div`
  width: 100%;
  gap: 1rem;
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

const EditButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const EditButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`