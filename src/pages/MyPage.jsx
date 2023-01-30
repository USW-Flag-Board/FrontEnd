import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import axios from "axios";
import Cookies from "universal-cookie";

//1. member api가 이상함. 수정되면 작업 진행.
//2. profile url 받아와서 img 바꾸는거는 나중에 해야 할 듯
//3. profile update 함수는 나중에 모달창 만들어지면 그때 수정, 지금은 임의로 값을 보냈다는 가정

const MyPage = ({setHeader}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cookies = new Cookies();
  const [loginId, setLoginId] = useState("");
  const [nickname, setNickname] = useState("");
  const [introduceMessage, setIntroduceMessage] = useState("");
  useEffect(() => {
    async function DataSet() {
      if (
        localStorage.getItem("UserToken") ||
        sessionStorage.getItem("UserToken")
      ) {
        console.log("정보 받아오기 시작");
        await LoginIdSetting();
        SetMyData();
      } else {
        navigate("/login");
      }
    }
    DataSet();
  });

  async function LoginIdSetting() {
    setLoginId(sessionStorage.getItem("id"));
  }

  const SetMyData = () => {
    axios
      .get(`http://3.39.36.239:8080/api/members/${loginId}`)
      .then((response) => {
        setNickname(response.data.payload.avatarResponse.nickName);
        setIntroduceMessage(response.data.payload.avatarResponse.bio);
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          navigate("/login");
        }
      });
  };

  const LogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    cookies.remove("refresh_token");
    cookies.remove("remember_id");
    navigate("/");
  };

  useEffect(() => {
    setHeader(true);
  });

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
              <EditProfile onClick={() => navigate("/edit")}>
                Edit Profile
              </EditProfile>
            </RelativeArea>
            <EditProfile onClick={() => LogOut()}>logout</EditProfile>
          </ProfileArea>
          <NickNameArea>
            <NickName>{nickname}</NickName>
            <IntroduceArea>
              <Introduce>{introduceMessage}</Introduce>
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
      <RightPage></RightPage>
    </PageArea>
  );
};

const PageArea = styled.div`
  width: 100%;
  height: 88vh;
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
  background-image: url(../images/home-book.JPG);
`;

const UserPage = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  background-color: #2c2c2c;
`;

const RelativeArea = styled.div`
  position: relative;
`;

const ProfileArea = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15%;
`;

const EditProfile = styled.button`
  position: absolute;
  font-size: 5px;
  color: white;
  background-color: #434343;
  height: 25px;
  width: 80px;
  left: 70px;
  top: 100px;
  outline: none;
  border: 0px;
  border-radius: 28px;
  :hover {
    background-color: #4d4d4d;
  }
`;

const NickNameArea = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
`;

const NickName = styled.div`
  display: flex;
  height: 40%;
  font-size: 40px;
  font-weight: bold;
  flex-direction: row;
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

const HistoryArea = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
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

export default MyPage;
