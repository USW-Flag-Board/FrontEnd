import styled from "styled-components";

const ContentModal = ({ closeModal }) => {
    return(
    <ModalArea>
      <ModalBox>
        <SelectAndTitle>
          <Select>
          </Select>
          <TitleArea>
            <Title></Title>
            <Master></Master>
          </TitleArea>
        </SelectAndTitle>
        <ContentBox>
          <Content
            placeholder="내용을 입력해주세요."
            // value={content}
          />
        </ContentBox>
        <CheckBox>
          <RadioBox>
            <Span>책 사용 여부</Span>
                d
          </RadioBox>
          <RadioBox>
            <Span>온/오프라인</Span>
                d
          </RadioBox>
          <RadioBox>
            <Span>Github:</Span>
                d
          </RadioBox>
        </CheckBox>
        <ButtonBox>
          <ModalButton>신청하기</ModalButton>
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

const ModalBox = styled.form`
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
`;

const Select = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding-left: 0.5rem;
`;

const TitleArea = styled.div`
  width: 68%;
  height: 100%;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding: 0 1rem;
`;

const Title = styled.div`
    
`;

const Master = styled.div`
    
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
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
  height: 20%;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  height: 13%;
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