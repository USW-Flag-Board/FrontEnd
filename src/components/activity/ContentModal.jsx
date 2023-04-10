import styled from "styled-components";
import { useState } from 'react';

const ContentModal = ({ closeModal }) => {
    const [apply, setApply] = useState(true);

    const handleApplyClick = () => { 
      setApply(!apply);
    };

    return(
      <ModalArea>
        <ModalBox>
          <SelectAndTitle>
            <Select>
              PROJECT
            </Select>
            <TitleArea>
              <Title>FLAG 프론트엔드(React) 추가 팀원 모집</Title>
            </TitleArea>
          </SelectAndTitle>
          <Master>활동장: 어준혁</Master>
          <ContentBox>
            <Content
              placeholder="내용을 입력해주세요."
              // value={content}
            >안녕하세요. 플래그 프론트엔드 팀장 어준혁입니다.</Content>
          </ContentBox>
          <CheckBox>
            <RadioBox>
              <Span>깃허브 링크:</Span>
                https://github.com/USW-Flag-Board/FrontEnd.git
            </RadioBox>
          </CheckBox>
          <ButtonBox>
            <div></div>
            {apply ?
              <ModalButton className="onApply" onClick={handleApplyClick}>신청하기</ModalButton>
            :
              <ModalButton className="offApply" onClick={handleApplyClick}>취소하기</ModalButton>
            }
            <ModalButton onClick={closeModal}>모달닫기</ModalButton>
          </ButtonBox>
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
  resize: none;
  ::placeholder {
    color: #acacac;
  }
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  height: 13%;

  .offApply{
    background-color: #CD5E5E;
    border: none;
    color: black;
  }
`;

const ModalButton = styled.button`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  height: 50%;
  background-color: #404040;
  color: white;
`;


const Span = styled.span`
    margin-right: 1rem;
`;