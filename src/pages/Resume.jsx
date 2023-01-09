import React from 'react'
import { styled } from '@mui/system';

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
   2022 1학기 - 알고리즘 - 코테반 [4명] (완료)`
];

const Resume = () => {
    const studyList = study.map((study, key) => <li key = {key}>{study}</li>)
    const resumeList = study.map((resume, key) => <li key = {key}>{resume}</li>)
    return(
    <>
        <Mainbox>
            <Box>
                <ResumeTitle>동아리 활동 이력</ResumeTitle>
                <Resumebox>
                    <YearBox>
                      {year}
                    </YearBox>
                    <TextBox>
                    {resumeList}
                    </TextBox>
                </Resumebox>
            </Box>
            <Box>
                <StudyTitle>현재 진행중인 스터디</StudyTitle>
                <Studybox>
                    {studyList}
                </Studybox>
            </Box>
        </Mainbox>
    </>

    );
}

export default Resume;

  const Mainbox = styled("div")({
    display: 'flex',
    width: 'auto',
    height: 'auto',
  });


  const Box = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
  
  });

  const TextBox = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    lineHeight: '3.5vh',
  
  });

  const YearBox = styled("div")({
    marginTop: '3vw',
    marginBottom: '3vw',
    width: '15vw',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.2rem',
    fontWeight: '800',
    borderRight: '1px solid white',
  });

  const ListBox = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
  });

  const Resumebox = styled("div")({
    display: 'flex',
    border: '1px solid white',
    width: '45vw',
    height: '80vh',
    marginLeft: '15vw',
    marginBottom: '10vh',
    borderRadius:"2.5vh",
    fontSize: '1vw',
    fontWeight: '700',
    listStyle:'none',
  });

  const Studybox = styled("div")({
    display: 'flex',
    border: '1px solid white',
    width: '25vw',
    height: '38vh',
    flexDirection: 'column', 
    justifyContent: 'center',
    paddingLeft: '2vw',
    lineHeight: '5vh',
    marginLeft: '15px',
    marginBottom: '10vh',
    borderRadius:'2.5vh',
    textAlign: 'left',
    fontSize: '1vw',
    fontWeight: '700',
    listStyle:'none'
  });

  const ResumeTitle = styled("div")({
    display: 'flex',
    width: '500px',
    height: '55px',
    marginLeft: '17vw',
    marginTop: '2vh',
    fontSize: '2.5rem',
    fontWeight: '800',
  });

  const StudyTitle = styled("div")({
    display: 'flex',
    width: '300px',
    height: '30px',
    marginLeft: '30px',
    fontSize: '1.3rem',
    fontWeight: '800',
    marginTop: '47.5vh',
  });

