import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import Grass from "../components/Grass";

const MyPage = () => {
  return (
    <PageArea>
      <LeftPage>
        <UserPage>
          <ProfileArea>
            <RelativeArea>
              <FontAwesomeIcon
                icon={faUser}
                style={{width: 120, height: 120, marginBottom: 30}}
              />
              <EditProfile>Edit Profile</EditProfile>
            </RelativeArea>
          </ProfileArea>
          <NickNameArea>
            <NickName>문희조</NickName>
            <IntroduceArea>
              <Introduce>
                Hi
                <br />
                Korean Language Is Broken...
              </Introduce>
              <IntroduceTag>
                <Tag>
                  #Spring #Java #FullStack
                  <br />
                  #Be #응애
                </Tag>
              </IntroduceTag>
            </IntroduceArea>
          </NickNameArea>
        </UserPage>
        <HistoryArea>
          <HistoryContent>
            <HistoryYear>2021</HistoryYear>
            <HistoryYearList>
              <HistoryYearListItem>알고리즘 스터디(기초반)</HistoryYearListItem>
            </HistoryYearList>
            <HistoryYear>2022</HistoryYear>
            <HistoryYearList>
              <HistoryYearListItem>알고리즘 스터디(코테반)</HistoryYearListItem>
              <HistoryYearListItem>FLAG-게시판 (BE)</HistoryYearListItem>
            </HistoryYearList>
          </HistoryContent>
        </HistoryArea>
      </LeftPage>
      <RightPage>
        <GrassArea>
          <GrassName>STUDY_WEB-BACKEND</GrassName>
          <Grass />
        </GrassArea>
      </RightPage>
    </PageArea>
  );
};

const PageArea = styled.div`
  width: 100%;
  height: 82.5vh;
  display: flex;
`;

const LeftPage = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RightPage = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(/home-book.JPG);
`;

const UserPage = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
`;

const RelativeArea = styled.div`
  position: relative;
`;

const ProfileArea = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 40px;
`;

const EditProfile = styled.button`
  position: absolute;
  fontsize: 5px;
  color: white;
  background-color: #434343;
  height: 25px;
  width: 80px;
  left: 70px;
  top: 100px;
  outline: none;
  border-radius: 28px;
  :hover {
    background-color: #4d4d4d;
  }
`;

const NickNameArea = styled.div`
  display: flex;
  width: 55%;
  height: 100%;
  flex-direction: column;
`;

const NickName = styled.div`
  display: flex;
  height: 40%;
  font-size: 40px;
  font-weight: bold;
  align-items: flex-end;
`;

const IntroduceArea = styled.div`
  width: 100%;
  height: 60%;
`;

const Introduce = styled.div`
  display: flex;
  font-size: 20px;
  align-items: flex-end;
  height: 40%;
`;

const IntroduceTag = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  height: 40%;
`;

const Tag = styled.p`
  margin: 0px;
`;

const HistoryArea = styled.div`
  background-color: rgba(0; 0; 0; 0.2);
  width: 100%;
  height: 60%;
  display: flex;
`;

const HistoryContent = styled.div`
  margin-left: 20%;
  padding-top: 10%;
`;

const HistoryYear = styled.h1`
  font-size: 25px;
  padding-top: 20px;
`;

const HistoryYearList = styled.ul`
  margin-bottom: 10px;
`;

const HistoryYearListItem = styled.li`
  margin-bottom: 3px;
  list-style-type: disc;
  margin-left: 20px;
`;

const GrassArea = styled.div`
  padding-left: 80px;
  height: 100%;
  top: 700px;
  display: flex;
  flex-direction: column;
`;

const GrassName = styled.h3`
  color: white;
  padding-top: 600px;
  margin: 0;
  font-weight: bold;
`;

export default MyPage;
