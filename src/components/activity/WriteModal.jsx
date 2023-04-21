import { useEffect, useState } from "react";
import styled from "styled-components";
import { SELECT_OPTION, BOOK_RADIO_OPTION, ONLINE_RADIO_OPTION } from "../../constants/activity";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";


const ActivityWriteModal = ({ closeModal }) => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [bookUsage, setBookUsage] = useState("");
  const [content, setContent] = useState("");
  const [bookName, setbookName] = useState("");
  const [proceed, setProceed] = useState("");
  const [githubLink, setGithubLink] = useState("");
  
  useEffect(()=>{
    setbookName("");
    setProceed("");
    setGithubLink("");
    setBookUsage("");
  }, [type])

  const handleType = (e) => {
    setType(e.target.value);
  };

  const submit = async () => {
    const data = {
      activityType: type,
      bookName: bookName,
      bookUsage: bookUsage,
      description: content,
      githubLink: githubLink,
      name: title,
      proceed: proceed,
    }
      instance.post("/activities", data)
      .then((response) => {
      if(response.status === 201) closeModal();
      })
      .catch((error) => {
        console.log(error);
      })

  }  

  return (
    <ModalArea>
      <ModalBox>
        <SelectAndTitle>
          <Select onChange={handleType}>
            {SELECT_OPTION.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </Select>
          <Title
            type="text"
            placeholder="활동의 이름을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </SelectAndTitle>
        <ContentBox>
          <ContentInput
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </ContentBox>
        {type === "MENTORING" || type === "STUDY" ?
        <CheckBox>
          <RadioBox>
            <Label>책 사용 여부</Label>
            {BOOK_RADIO_OPTION.map(({ id, option, value }) => (
              <Radio key={id}>
                <span>{option}</span>
                <RadioInput
                  type="radio"
                  value={value}
                  name="bookUsage"
                  onClick={() => setBookUsage(value)}
                />
              </Radio>
            ))}
            {bookUsage === "USE" ? 
              <RadioInput 
                type="text"
                placeholder="책 이름을 입력해주세요"
                value={bookName}
                onChange={(e) => setbookName(e.target.value)}/> : null}
          </RadioBox> 
          <RadioBox>
            <Label>온/오프라인</Label>
            {ONLINE_RADIO_OPTION.map(({ id, option, value }) => (
              <Radio key={id}>
                <span>{option}</span>
                <RadioInput
                  type="radio"
                  value={value}
                  name="online"
                  onClick={() => setProceed(value)}
                />
              </Radio>
            ))}
          </RadioBox>
        </CheckBox> : null}
        {type === "PROJECT" ? 
          (<RadioBox>
            <CheckBox>
              <RadioBox>
                <Label>깃허브 링크:</Label>
                <RadioInput 
                  type="text"
                  placeholder="링크를 입력해주세요."
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}/>
              </RadioBox>
              <RadioBox>
                <Label>온/오프라인</Label>
                {ONLINE_RADIO_OPTION.map(({ id, option, value }) => (
                  <Radio key={id}>
                    <span>{option}</span>
                    <RadioInput
                      type="radio"
                      value={value}
                      name="online"
                      onClick={() => setProceed(value)}
                    />
                  </Radio>
                ))}
              </RadioBox>
            </CheckBox>
          </RadioBox>): null}
        <ButtonBox>
          <ModalButton onClick={submit}>작성완료</ModalButton>
          <ModalButton onClick={closeModal}>작성취소</ModalButton>
        </ButtonBox>
      </ModalBox>
    </ModalArea>
  );
};

export default ActivityWriteModal;

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
`;

const Select = styled.select`
  width: 30%;
  height: 100%;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding-left: 0.5rem;
`;

const Title = styled.input`
  width: 68%;
  height: 100%;
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  padding: 0 1rem;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55%;
  margin: 1rem 0;
`;

const ContentInput = styled.textarea`
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
  padding: 1rem;
  width: 100%;
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

const Radio = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const RadioInput = styled.input`
  margin-left: 0.3rem;
  outline: none;
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

const Label = styled.label`
  margin-right: 1rem;
`;
