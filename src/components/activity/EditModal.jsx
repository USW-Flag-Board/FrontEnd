import { useState } from "react";
import styled from "styled-components";
import {
  BOOK_RADIO_OPTION,
  ONLINE_RADIO_OPTION,
} from "../../constants/activity";
import instance from "../../apis/AxiosInterceptorSetup";

const EditModal = ({ modalContent, setEdit }) => {
  const type = modalContent.type;
  const [title, setTitle] = useState(modalContent.name);
  const [bookUsage, setBookUsage] = useState(modalContent.bookUsage);
  const [content, setContent] = useState(modalContent.description);
  const [bookName, setbookName] = useState(modalContent.bookName);
  const [proceed, setProceed] = useState(modalContent.proceed);
  const [githubLink, setGithubLink] = useState(modalContent.githubURL || "");

  const submit = async () => {
    const data = {
      bookName: bookName,
      bookUsage: bookUsage,
      description: content,
      githubURL: githubLink,
      proceed: proceed,
      name: title,
    };
    try {
      await instance.put(`/activities/${modalContent.id}`, data);
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SelectAndTitle>
        <Select>{type}</Select>
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
      {type === "MENTORING" || type === "STUDY" ? (
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
                  checked={bookUsage === value}
                  onChange={() => setBookUsage(value)}
                />
              </Radio>
            ))}
            {bookUsage === "USE" ? (
              <RadioInput
                type="text"
                placeholder="책 이름을 입력해주세요"
                value={bookName}
                onChange={(e) => setbookName(e.target.value)}
              />
            ) : null}
          </RadioBox>
          <RadioBox>
            <Label>온/오프라인</Label>
            {ONLINE_RADIO_OPTION.map(({ id, option, value }) => (
              <Radio key={id}>
                <span>{option}</span>
                <RadioInput
                  type="radio"
                  value={value}
                  checked={proceed === value}
                  name="online"
                  onChange={() => setProceed(value)}
                />
              </Radio>
            ))}
          </RadioBox>
        </CheckBox>
      ) : null}
      {type === "PROJECT" ? (
        <RadioBox>
          <CheckBox>
            <RadioBox>
              <Label>깃허브 링크:</Label>
              <RadioInput
                type="text"
                placeholder="링크를 입력해주세요."
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
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
                    checked={proceed === value}
                    onChange={() => setProceed(value)}
                  />
                </Radio>
              ))}
            </RadioBox>
          </CheckBox>
        </RadioBox>
      ) : null}
      <ButtonBox>
        <ModalButton onClick={() => setEdit(false)}>취소</ModalButton>
        <ModalButton onClick={submit}>완료</ModalButton>
      </ButtonBox>
    </>
  );
};

export default EditModal;

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
  display: flex;
  justify-content: center;
  align-items: center;
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
