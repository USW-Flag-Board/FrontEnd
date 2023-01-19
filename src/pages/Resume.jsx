import styled from "styled-components";

const year = ["2022"];
const study = [
  "2022 2학기 - 코딩테스트 [6명] (진행중)",
  "2022 2학기 - 알고리즘 [6명] (진행중)",
  "2022 2학기 - 모의 해킹 (웹) [4명] (진행중)",
  "2022 2학기 - 모의 해킹 (시스템) [4명] (진행중)",
  "2022 2학기 - 네트워크 [6명] (진행중)]",
];

const resume = [
  `2021 2학기 - DB 스터디 [4명] (완료)
   2021 2학기 - 자료구조 스터디 [6명] (완료)
   2021 2학기 - 코딩 스터디 [5명] (완료)
   2022 겨울방학 - 정보처리기사 스터디 [3명] (완료)
   2022 1학기 - JAVA 스터디 [6명] (완료)
   2022 1학기 - 알고리즘 - 코테반 [4명] (완료)`,
];

const Resume = () => {
  const studyList = study.map((study, key) => <li key={key}>{study}</li>);
  const resumeList = study.map((resume, key) => <li key={key}>{resume}</li>);
  return (
    <>
      <Mainbox>
        <Box>
          <ResumeTitle>동아리 활동 이력</ResumeTitle>
          <Resumebox>
            <YearBox>{year}</YearBox>
            <TextBox>{resumeList}</TextBox>
          </Resumebox>
        </Box>
        <Box>
          <StudyTitle>현재 진행중인 스터디</StudyTitle>
          <Studybox>{studyList}</Studybox>
        </Box>
      </Mainbox>
    </>
  );
};

const Mainbox = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 3.5vh;
`;

const YearBox = styled.div`
  margin-top: 3vw;
  margin-bottom: 3vw;
  width: 15vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 800;
  border-right: 1px solid white;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Resumebox = styled.div`
  display: flex;
  border: 1px solid white;
  width: 45vw;
  height: 80vh;
  margin-left: 15vw;
  margin-bottom: 10vh;
  border-radius: 2.5vh;
  font-size: 1vw;
  font-weight: 700;
  list-style: none;
`;

const Studybox = styled.div`
  display: flex;
  border: 1px solid white;
  width: 25vw;
  height: 38vh;
  flex-direction: column;
  justify-content: center;
  padding-left: 2vw;
  line-height: 5vh;
  margin-left: 15px;
  margin-bottom: 10vh;
  border-radius: 2.5vh;
  text-align: left;
  font-size: 1vw;
  font-weight: 700;
  list-style: none;
`;

const ResumeTitle = styled.div`
  display: flex;
  width: 500px;
  height: 55px;
  margin-left: 17vw;
  margin-top: 2vh;
  font-size: 2.5rem;
  font-weight: 800;
`;

const StudyTitle = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  margin-left: 30px;
  font-size: 1.3rem;
  font-weight: 800px;
  margin-top: 47.5vh;
`;

export default Resume;
