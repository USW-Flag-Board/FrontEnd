import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import {cookiesOption} from "../utils/cookiesOption";
import {GetProfileData} from "../apis/user";
import {LocalStorage, SessionStorage} from "../utils/browserStorage";

// activity 이름 연도 모집 상태

const ACTIVITY_LIST = [
  {
    id: "player1552",
    year: "2022",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2022",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2022",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2022",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2023",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2023",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2023",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2023",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
  {
    id: "player1552",
    year: "2022",
    history_name: "알고리즘 스터디 (기초반)",
    status: "모집중",
  },
];

const POSTDATA = [
  {
    id: 1,
    title: "제목이다",
    createdAt: "",
    viewCount: 150,
    likeCount: 30,
  },
  {
    id: 2,
    title: "제목이다2",
    createdAt: "",
    viewCount: 156,
    likeCount: 38,
  },
];

const MyPage = ({setHeader}) => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [nickname, setNickname] = useState("");
  const [introduceMessage, setIntroduceMessage] = useState("");
  const [profileImg, setProfileImg] = useState("");

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
        setNickname(response.data.payload.nickName);
        setIntroduceMessage(response.data.payload.bio);
        setProfileImg(response.data.payload.profileImg);
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

  const years = ACTIVITY_LIST.map((activity) => activity.year);
  const uniqueYear = [...new Set(years)];

  const activityLists = uniqueYear.map((uniqueYear) => {
    const activityNames = ACTIVITY_LIST.filter(
      (activity) => activity.year === uniqueYear
    ).map((activity) => (
      <HistoryYearListItem>{activity.history_name}</HistoryYearListItem>
    ));

    return (
      <HistoryYearList>
        <HistoryYear>{uniqueYear}</HistoryYear>
        {activityNames}
      </HistoryYearList>
    );
  });

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
      <UpPage>
        <LeftPage>
          <UserPage>
            <ProfileArea>
              <RelativeArea>
                <ProfileIcon
                  style={
                    profileImg === "default"
                      ? {
                          backgroundImage: `url("../images/base-profile.png")`,
                        }
                      : {backgroundImage: `url(${profileImg})`}
                  }
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
        </LeftPage>
        <RightPage>
          <HistoryArea>
            <HistoryContent>{activityLists}</HistoryContent>
            <HistoryPaginationArea>
              <HistoryPagination>
                <HistoryPaginationButton key="prev">
                  &lt;
                </HistoryPaginationButton>
                {ACTIVITY_LIST.map((e, idx) => {
                  if ((idx + 1) % 5 === 1)
                    return <HistoryPaginationButton>O</HistoryPaginationButton>;
                })}
                <HistoryPaginationButton key="next">
                  &gt;
                </HistoryPaginationButton>
              </HistoryPagination>
            </HistoryPaginationArea>
          </HistoryArea>
        </RightPage>
      </UpPage>
    </PageArea>
  );
};

const HistoryPaginationArea = styled.div`
  display: flex;
`;

const HistoryPagination = styled.ul`
  display: flex;
`;

const HistoryPaginationButton = styled.li`
  margin: 5px;
`;

const ProfileIcon = styled.div`
  border-radius: 50%;
  border: 2px solid white;
  width: 220px;
  height: 220px;
  margin-bottom: 2vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const PageArea = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
`;
const UpPage = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
`;

const LeftPage = styled.div`
  width: 100%;
  height: 100%;
  flex: 4 0 0;
`;

const RightPage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../images/home-book.JPG);
  background-size: cover;
  flex: 6 0 0;
`;

const UserPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
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
  margin-right: 5%;
  margin-left: 15%;
`;

const EditProfile = styled.button`
  position: absolute;
  font-size: 5px;
  color: white;
  background-color: #434343;
  height: 25px;
  width: 80px;
  left: 130px;
  top: 170px;
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
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HistoryContent = styled.div`
  margin: auto 0;
  height: 50%;
  display: flex;
  width: 80%;
  justify-content: space-around;
`;

const HistoryYear = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const HistoryYearList = styled.ul`
  margin: 2rem;
`;

const HistoryYearListItem = styled.li`
  margin-bottom: 0.5rem;
  list-style-type: disc;
  margin-left: 2rem;
  font-size: 1rem;
`;

export default MyPage;
