import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faFolderClosed} from "@fortawesome/free-regular-svg-icons";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "../components/ActivityCard";
import {Toggle} from "../components/Toggle";
import ActivityUserModal from "../components/ActivityUserModal";
import ActivityManagerModal from "../components/ActivityManagerModal";

const name = ["이수빈"];
const day = ["2023.1.20 ~ 2023.01.30"];
const title = ["알고리즘 스터디 초급반 모집합니다."];
const tag = ["#flag #flag2"];
const git = ["Https://www.naver.com"];

const Project = () => {
  
const [description, setDescription] = useState("");
const [githubLink, setGithubLink] = useState("");
const [name, setName] = useState("");
const [activityType, setActivityType] = useState("PROJECT");

const onChangeDescription = (e) => {
  setDescription(e.target.value); 
};

const onChangeName = (e) => {
  setName(e.target.value);
};

const onChangeGithubLink = (e) => {
  setGithubLink(e.target.value);
};

const Completed = () => {  

  axios.post('http://api.flaground.kr/api/activities', {
    
    data: {
      activityType: activityType,
      description: description,
      githubLink: githubLink,
      name: name,
      },
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
};

  return(
      <>
          <FormBox>
          <RowBox>
              <Title 
                type="text"
                placeholder="제목을 입력해주세요."
                value={name}
                onChange={onChangeName}
              >
              </Title>
            </RowBox>
              <ModalMain
                  type="text" 
                  placeholder="내용을 입력해 주세요"
                  value={description}
                  onChange={onChangeDescription}
              ></ModalMain>
              <Modalgit 
                  type="text"
                  placeholder="깃허브 링크:"
                  value={githubLink}
                  onChange={onChangeGithubLink}
              ></Modalgit>
              <CompletedButtonBox>
              <CompletedButton onClick={() => Completed()}>작성완료</CompletedButton>
              </CompletedButtonBox>
          </FormBox>
      </>
  );
};

const Study = () =>{
  const [name, setName] = useState("");
  const [proceed, setProceed] = useState("");
  const [description, setDescription] = useState("");
  const [bookUsage, setBookUsage] = useState("");
  const [activityType, setActivityType] = useState("PROJECT");
  
  const onChangeBookUsage = (e) => {
    setBookUsage(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value); 
  };
  
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeProceed = (e) => {
    setProceed(e.target.value);
  };

  const Completed = () => {  

    axios.post('http://api.flaground.kr/activities', {
      data: {
        activityType: activityType,
        bookUsage:bookUsage,
        description: description,
        name: name,
        proceed: proceed,
        }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  };

  return(
      <>
          <FormBox>
            <RowBox>
              <Title 
                type="text"
                placeholder="제목을 입력해주세요."
                value={name}
                onChange={onChangeName}
                >
              </Title>
            </RowBox>
              <ModalMain 
                  type="text" 
                  placeholder="내용을 입력해 주세요"
                  value={description}
                  onChange={onChangeDescription}
              ></ModalMain>
              <BookBox>
                  <RowBox>책 사용여부:
                      Yes
                      <Book
                          type="radio"
                          name="book"
                          value="사용"
                          checked
                          onChange={onChangeBookUsage}
                      ></Book>
                      No 
                      <Book
                          type="radio"
                          name="book"
                          value="미사용"
                          checked
                          onChange={onChangeBookUsage}
                      >
                      </Book>
                  </RowBox>
                  <RowBox>온/오프라인: 
                      온라인
                      <OnOff
                          type="radio"
                          name="on/of"
                          value="온라인"
                          checked
                          onChange={onChangeProceed}
                      >
                      </OnOff>
                      오프라인
                      <OnOff
                          type="radio"
                          name="on/of"
                          value="오프라인"
                          checked
                          onChange={onChangeProceed}
                      >
                      </OnOff>
                  </RowBox>
              </BookBox>
              <CompletedButtonBox>
              <CompletedButton onClick={Completed}>작성완료</CompletedButton>
              </CompletedButtonBox>
          </FormBox>
      </>
  );
}; 

const Mentoring = () =>{
  const [name, setName] = useState("");
  const [proceed, setProceed] = useState("");
  const [description, setDescription] = useState("");
  const [bookUsage, setBookUsage] = useState("");
  
  const onChangeBookUsage = (e) => {
    setBookUsage(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value); 
  };
  
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeProceed = (e) => {
    setProceed(e.target.value);
  };

  return(
      <>
          <FormBox>
          <RowBox>
              <Title 
                type="text"
                placeholder="제목을 입력해주세요."
                value={name}
                onChange={onChangeName}>
              </Title>
            </RowBox>
              <ModalMain 
                  type="text" 
                  placeholder="내용을 입력해 주세요"
                  value={description}
                  onChange={onChangeDescription}
              ></ModalMain>
              <BookBox>
                  <RowBox>책 사용여부:
                      Yes
                      <Book
                          type="radio"
                          name="book"
                          value="사용"
                          checked
                          onChange={onChangeBookUsage}
                      ></Book>
                      No 
                      <Book
                          type="radio"
                          name="book"
                          value="미사용"
                          checked
                          onChange={onChangeBookUsage}
                      ></Book>
                  </RowBox>
                  <RowBox>온/오프라인: 
                      온라인
                      <OnOff
                          type="radio"
                          name="on/of"
                          value="온라인"
                          checked
                          onChange={onChangeProceed}
                      >
                      </OnOff>
                      오프라인
                      <OnOff
                          type="radio"
                          name="on/of"
                          value="오프라인"
                          checked
                          onChange={onChangeProceed}
                      >
                      </OnOff>
                  </RowBox>
              </BookBox>
              <CompletedButtonBox>
              <CompletedButton>작성완료</CompletedButton>
              </CompletedButtonBox>
          </FormBox>
      </>
  );
};

const WriteActivity = (props) => {

  const [write, setWrite] = useState(false);
  const [activityType, setActivityType] = useState("PROJECT");
  const closeModal = () =>{
    props.closeModal();
  }
  const onSelect = (event) => {
    setActivityType(event.target.value);
  };

  return(
    <>
      <ModalBackground>
        <ModalBox>
          <Box>
            <CloseBox><CloseButton onClick={closeModal}>X</CloseButton></CloseBox>
            <RowBox>
            <ModalTitle>
              <Modaltype select value={activityType} onChange={onSelect}>
                <option value="PROJECT">Project</option>
                <option value="STDUY">Study</option>
                <option value="MENTIRING">Mentoring</option>
              </Modaltype>
            </ModalTitle>
            </RowBox>
          </Box>
            {activityType === "PROJECT" ? <Project/> : null}
            {activityType === "STDUY" ? <Study/> : null}
            {activityType === "MENTIRING" ? <Mentoring/> : null}
        </ModalBox>
      </ModalBackground>
  </>
  );
};


const Activity = ({setHeader}) => {
  const [user, setUser] = useState(false);
  const [manager, setManager] = useState(false);
  const [write, setWrite] = useState(false);
  const WriteModal = () => {
    setWrite(true);
  };

  useEffect(() => {
    setHeader(true);

  });


  return (
    <>
      <Mainbox>
        <HeaderMenu>
          <ActivityButton>
            <FontAwesomeIcon icon={faCopy} /> All
          </ActivityButton>
          <ActivityButton onClick={() => setManager(!manager)}>
            <FontAwesomeIcon icon={faFolderClosed} /> Project
          </ActivityButton>
          <ActivityButton>
            <FontAwesomeIcon icon={faPencil} /> Study
          </ActivityButton>
          <ActivityButton>
            <PostButton onClick={() => setWrite(!write)}>
              글 작성하기
            </PostButton>
          </ActivityButton>
          <ActivityButton>
            <Toggle />
          </ActivityButton>
        </HeaderMenu>
        <MainContent>
          <ButtonBox onClick={() => setUser(!user)}>
            <ActivityCard title={title} name={name} />
          </ButtonBox>
          <ButtonBox onClick={() => setManager(!manager)}>
            <ActivityCard
              title="누르면 개설자 컴포넌트 나와요"
              name="이수빈"
            />
          </ButtonBox>
          <ButtonBox onClick={() => setUser(!user)}>
            <ActivityCard
              title="테스트 입니다"
              name="이수빈"
            />
          </ButtonBox>
          <ButtonBox onClick={() => setUser(!user)}>
            <ActivityCard
              title="테스트 입니다"
              name="이수빈"
            />
          </ButtonBox>
          <ButtonBox onClick={() => setUser(!user)}>
            <ActivityCard
              title="테스트 입니다"
              name="이수빈"
            />
          </ButtonBox>
          {write && (
            <WriteActivity
              closeModal={() => setWrite(!write)}
            ></WriteActivity>
          )}
          {user && (
            <ActivityUserModal
              closeModal={() => setUser(!user)}
            ></ActivityUserModal>
          )}
          {manager && (
            <ActivityManagerModal
              closeModal={() => setManager(!manager)}
            ></ActivityManagerModal>
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
  cursor: pointer;
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
  cursor: pointer;
`;

const ButtonBox = styled.button`
  margin: 5px;
  color: white;
  border: none;
  background: transparent;
`;

//write 모달창

const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
`;

const ModalBox = styled.div`
    position: absolute;
    top: calc(17vh); left: calc(31vw);
    background-color: white;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    width: 38%;
    height: auto;
    color: black;
`;

const Box = styled.div`
    margin: 10px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center; 

`;

const RowBox = styled.div`
    display: flex;
    align-items: center;
   
`;

const CompletedButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Modaltype = styled.select`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    width: 20vw;
    display: flex;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: center;
    margin-left: 20px;
    margin-top: 5px;
    align-items: center;
`;

const ModalMain = styled.textarea`
    width: 91%;
    height: 30vh;
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    resize: none;
    padding: 10px;
`;

const FormBox = styled.div`
    margin: 5px;
    width: 36vw;
    flex-direction: column;
    justify-content: center; 

`;

const Modalgit = styled.input`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 600;
    font-size: 15px;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    width: 91%;
    align-items: center;
`;

const CompletedButton = styled.button`
    width: auto;
    height: 30px;
    font-weight: 1000;
    font-size: 13px;
    border-radius: 20px; 
    cursor:pointer;
    color: white;
    margin: 11px;
    background-color: rgba(44,44,44);
    border: none;
`;

const BookBox = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    font-weight: 800;
    font-size: 15px;
`;

const Title = styled.input`
    font-weight: 1000;
    font-size: 20px;
    width: 90%;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    height: auto;
    border: 1px solid black;
    border-radius: 20px;
`;

const Book = styled.input`
    width: auto;
    padding: 3px;
    border: none;
    font-weight: 800;
    font-size: 15px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 5px;
    
`;

const OnOff = styled.input`
    width: auto;
    border: none;
    padding: 3px;
    width: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: 800;
    font-size: 15px;
    margin-left: 5px;
`;

const ModalTitle = styled.div`
  margin: 5px;
  font-weight: 800;
  font-size: 23px;
  width: auto;
  display:flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 18px;
    font-weight: 800;
    margin-right:10px;
    cursor:pointer;

`;

const CloseBox = styled.div`
    width: auto;
    display: flex;
    flex-direction: row-reverse;
`;


export default Activity;
