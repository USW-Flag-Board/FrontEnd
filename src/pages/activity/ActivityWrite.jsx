import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { Header } from "../../components";
import {
  SELECT_OPTION,
  ONLINE_RADIO_OPTION,
  BOOK_RADIO_OPTION,
} from "../../constants/activity";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;

const Check = styled.div`
  display: flex;
  align-items: center;
`;

const CheckInput = styled.input`
  margin-left: 0.3rem;
  outline: none;
  cursor: pointer;
  margin-bottom: 0.2rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const ContentHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ::after {
    content: "*";
    color: red;
    margin-left: 0.5rem;
  }
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const TitleInputBox = styled.div`
  width: 100%;
  height: 2.5rem;
`;

const Title = styled.input`
  width: 40%;
  height: 100%;
  padding: 0 0.6rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const InfoBox = styled.ul`
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  .github {
    width: 100%;
  }
`;

const InfoItem = styled.li`
  width: 48%;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  gap: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

const InfoTitle = styled.div`
  color: #339af0;
`;

const InfoContent = styled.div`
  min-width: 30%;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.1rem 0.5rem;
  border-radius: 0.2rem;
  height: 80%;
  border: 1px solid #ced4da;
`;

const Select = styled.select`
  width: 100%;
  height: 80%;
  border: 1px solid #ced4da;
  padding-left: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ContentDetail = styled.div`
  margin: 2rem 0;
`;

const DescriptionBox = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.3rem;
`;

const ContentButtonBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ContentButton = styled.button`
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  width: 6rem;
  height: 100%;
  border: none;
  padding: 0.3rem 0 0 0;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
`;

const ActivityWrite = () => {
  const navigate = useNavigate();
  const editorRef = useRef();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [bookUsage, setBookUsage] = useState("");
  const [content, setContent] = useState("");
  const [bookName, setbookName] = useState("");
  const [proceed, setProceed] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const handleType = (event) => {
    setType(event.target.value);
  };

  const submit = async () => {
    const data = {
      type: type,
      bookName: bookName,
      bookUsage: bookUsage,
      description: content,
      githubURL: githubLink,
      proceed: proceed,
      name: title,
    };
    try {
      const response = await instance.post("/activities", data);
      if (response.status === 201) {
        alert("활동이 작성되었습니다");
        navigate("/activity");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleContent = () => {
    setContent(editorRef.current?.getInstance().getMarkdown());
  };

  useEffect(() => {
    if (type === "PROJECT") setBookUsage("NOT_USE");
    else setBookUsage("");
    setbookName("");
    setGithubLink("");
  }, [type]);
  return (
    <div>
      <Header />
      <ContentArea>
        <ContentBox>
          <Label>제목</Label>
          <ContentHeader>
            <TitleInputBox>
              <Title
                value={title}
                placeholder="제목을 입력하세요"
                onChange={(e) => setTitle(e.target.value)}
              />
            </TitleInputBox>
          </ContentHeader>
          <Label>정보</Label>
          <InfoBox>
            <InfoItem>
              <InfoTitle>모집 구분</InfoTitle>
              <InfoContent>
                <Select onChange={handleType} value={type}>
                  {SELECT_OPTION.map(({ id, title }) => (
                    <option key={id} value={title}>
                      {title}
                    </option>
                  ))}
                </Select>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoTitle>진행 방식</InfoTitle>
              <InfoContent>
                <CheckBox>
                  {ONLINE_RADIO_OPTION.map(({ id, option, value }) => (
                    <Check key={id}>
                      <span>{option}</span>
                      <CheckInput
                        type="radio"
                        value={value}
                        name="online"
                        onClick={() => setProceed(value)}
                      />
                    </Check>
                  ))}
                </CheckBox>
              </InfoContent>
            </InfoItem>
            {type === "PROJECT" && (
              <InfoItem className="github">
                <InfoTitle>깃헙 주소</InfoTitle>
                <InfoContent>
                  <InputBox>
                    <Input
                      type="text"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                    />
                  </InputBox>
                </InfoContent>
              </InfoItem>
            )}
            {(type === "STUDY" || type === "MENTORING") && (
              <InfoItem>
                <InfoTitle>책 사용</InfoTitle>
                <InfoContent>
                  <CheckBox>
                    {BOOK_RADIO_OPTION.map(({ id, option, value }) => (
                      <Check key={id}>
                        <span>{option}</span>
                        <CheckInput
                          type="radio"
                          value={value}
                          name="bookUsage"
                          onClick={() => setBookUsage(value)}
                        />
                      </Check>
                    ))}
                  </CheckBox>
                </InfoContent>
              </InfoItem>
            )}
            {bookUsage === "USE" && (
              <InfoItem>
                <InfoTitle>책 이름</InfoTitle>
                <InfoContent>
                  <InputBox>
                    <Input
                      type="text"
                      value={bookName}
                      onChange={(e) => setbookName(e.target.value)}
                    />
                  </InputBox>
                </InfoContent>
              </InfoItem>
            )}
          </InfoBox>
          <ContentDetail>
            <Label>내용</Label>
            <DescriptionBox>
              <Editor
                minHeight="30rem"
                placeholder="내용을 입력해 주세요"
                previewStyle="vertical"
                initialEditType="wysiwyg"
                ref={editorRef}
                onChange={handleContent}
                toolbarItems={[
                  ["heading", "bold", "italic", "strike"],
                  ["hr", "quote"],
                  ["ul", "ol"],
                  ["table", "link"],
                  ["code"],
                ]}
                useCommandShortcut={false}
                plugins={[colorSyntax]}
              />
            </DescriptionBox>
          </ContentDetail>
          <ContentButtonBox>
            <ContentButton onClick={() => navigate("/activity")}>
              취소
            </ContentButton>
            <ContentButton onClick={submit}>등록</ContentButton>
          </ContentButtonBox>
        </ContentBox>
      </ContentArea>
    </div>
  );
};

export default ActivityWrite;
