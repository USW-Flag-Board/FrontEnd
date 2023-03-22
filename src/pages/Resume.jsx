import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {GetAllFlagHistory} from "../apis/activity";

const STUDY2022 = [
  "2022 2학기 - 코딩테스트 [6명] (진행중)",
  "2022 2학기 - 알고리즘 [6명] (진행중)",
  "2022 2학기 - 모의 해킹 (웹) [4명] (진행중)",
  "2022 2학기 - 모의 해킹 (시스템) [4명] (진행중)",
  "2022 2학기 - 네트워크 [6명] (진행중)]",
];

const RESUME = ["2021 겨울방학", "2021 1학기", "2021 1학기"];
const RESUME2 = [
  "2022 겨울방학 - 정보처리기사 스터디 [3명] (완료)",
  "2022 1학기 - JAVA 스터디 [6명] (완료)",
  "2022 1학기 - 알고리즘 - 코테반 [4명] (완료)",
];

const Resume = ({setHeader}) => {
  const [year, setYear] = useState(2022);
  const study = STUDY2022.map((study, key) => <li key={key}>{study}</li>);
  const [resumeList, setResumeList] = useState("");

  const PrevYear = (currentYear) => {
    if (currentYear !== 2021) {
      setYear(currentYear - 1);
    }
  };

  const NextYear = (currentYear) => {
    if (currentYear !== 2022) {
      setYear(currentYear + 1);
    }
  };

  useEffect(() => {
    GetAllFlagHistory().then((response) => {
      console.log(response);
    })

    if (year === 2021) {
      setResumeList(RESUME.map((resume, key) => <li key={key}>{resume}</li>));
    } else if (year === 2022) {
      setResumeList(RESUME2.map((resume, key) => <li key={key}>{resume}</li>));
    }
  }, [year]);

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <>
      <Mainbox>
        <Box>
          <FlexArea>
            <YearSelectButton onClick={() => PrevYear(year)}>
              &lt;
            </YearSelectButton>
            <YearTitle>{year}</YearTitle>
            <YearSelectButton onClick={() => NextYear(year)}>
              &gt;
            </YearSelectButton>
          </FlexArea>
          <ResumeTitle>동아리 활동 이력</ResumeTitle>
        </Box>
        <Resumebox>
          <RelativeArea>
            <TextTitle>강의 목록</TextTitle>
            <TextBox>{resumeList}</TextBox>
          </RelativeArea>
          <RelativeArea>
            <TextTitle>Project</TextTitle>
            <TextBox>{resumeList}</TextBox>
          </RelativeArea>
          <RelativeArea>
            <TextTitle>멘토링</TextTitle>
            <TextBox>{resumeList}</TextBox>
          </RelativeArea>
          <RelativeArea>
            <TextTitle>스터디</TextTitle>
            <TextBox>{study}</TextBox>
          </RelativeArea>
        </Resumebox>
      </Mainbox>
    </>
  );
};

const YearSelectButton = styled.button`
  width: 50px;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  background: none;
  outline: none;
  border: none;
  margin-bottom: 50px;
`;

const TextTitle = styled.div`
  display: flex;
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const RelativeArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexArea = styled.div`
  display: flex;
  align-items: space-evenly;
`;

const Mainbox = styled.div`
  display: flex;
  width: 100%;
  height: 88vh;
`;

const Box = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  border-radius: 2.5vh;
  height: auto;
  padding: 20px;
`;

const Resumebox = styled.div`
  display: flex;
  border: 1px solid white;
  height: auto;
  border-radius: 2.5vh;
  font-size: 1vw;
  font-weight: 700px;
  list-style: none;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 2%;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  width: 60%;
  flex-wrap: wrap;
`;

const ResumeTitle = styled.div`
  display: flex;
  width: 500px;
  height: 55px;
  font-size: 2.5rem;
  font-weight: 800px;
  justify-content: center;
  margin-bottom: 50px;
`;

const YearTitle = styled.div`
  display: flex;
  width: 200px;
  height: 55px;
  font-size: 2.5rem;
  font-weight: 800px;
  justify-content: center;
  margin-bottom: 50px;
`;

export default Resume;
