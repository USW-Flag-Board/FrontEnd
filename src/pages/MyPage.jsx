import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import {cookiesOption} from "../utils/cookiesOption";
import {GetProfileData} from "../apis/user";
import {LocalStorage, SessionStorage} from "../utils/browserStorage";

const MyPage = ({setHeader}) => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [nickname, setNickname] = useState("");
  const [introduceMessage, setIntroduceMessage] = useState("");

  const LoginIdSetting = async () => {
    if (SessionStorage.get("id")) {
      setLoginId(SessionStorage.get("id"));
    } else if (LocalStorage.get("id")) {
      setLoginId(LocalStorage.get("id"));
    }
  };

  const SetMyData = async () => {
    if (loginId !== "") {
      try {
        const response = await GetProfileData(loginId);
        setNickname(response.data.payload.avatarResponse.nickName);
        setIntroduceMessage(response.data.payload.avatarResponse.bio);
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/login");
        }
      }
    }
  };

  const LogOut = () => {
    LocalStorage.clear();
    SessionStorage.clear();
    cookiesOption.remove("refresh_token");
    cookiesOption.remove("remember_id");
    navigate("/");
  };

  useEffect(() => {
    const DataSet = async () => {
      if (LocalStorage.get("UserToken") || SessionStorage.get("UserToken")) {
        await LoginIdSetting();
        await SetMyData();
      } else {
        navigate("/login");
      }
    };
    setHeader(true);
    DataSet();
  }, [loginId]);

  return (
    <PageArea>
      <LeftPage>
        <UserPage>
          <ProfileArea>
            <RelativeArea>
              <ProfileIcon icon={faUser} />
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

const ProfileIcon = styled(FontAwesomeIcon)`
  width: 120px;
  height: 120px;
  marginbottom: 30px;
`;

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
