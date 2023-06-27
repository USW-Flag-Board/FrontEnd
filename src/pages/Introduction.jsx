import styled from "styled-components";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";
import chungil from "../assets/images/chungil.jpg";
import hejow from "../assets/images/hejow.jpg";
import { CLUB_PROGRAM_CATEGORIE } from "../constants/introduction";
import { useState } from "react";

const IntroductionArea = styled.div`
  width: 100%;
`;

const IntroductionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlagIntroductionBox = styled.div`
  width: 100%;
  height: 89vh;
  background-color: #f8f9fa;
  @media screen and (max-width: 480px) {
    height: 35rem;
  }
`;

const FlagIntroductionContents = styled.div`
  border-bottom: 1px solid #ced4da;
  display: flex;
  align-items: center;
  font-size: 4.5rem;
  font-weight: 700;
  padding-left: 4rem;
  height: 25%;
  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
    padding-left: 2rem;
  }
`;

const FlagSignUpBox = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.button`
  padding: 1.5rem 4rem;
  font-weight: bold;
  color: white;
  background-color: #339af0;
  border: none;
  border-radius: 2.5rem;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    padding: 1rem 2rem;
  }
`;

const ClubLeaderArea = styled.div`
  width: 100%;
  padding-top: 2rem;
  @media screen and (max-width: 480px) {
    padding-top: 0;
  }
`;

const ClubLeadersBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ClubLeaderTitle = styled.h2`
  font-weight: 600;
  width: 80%;
  height: 6rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`;

const ClubLeaderBox = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 5rem;
  @media screen and (max-width: 480px) {
    height: 13rem;
    margin-bottom: 2.5rem;
  }
`;

const LeaderHeaderBox = styled.div`
  width: 100%;
  height: 25%;
  border: 1px solid #ced4da;
  display: flex;
  justify-content: center;
`;

const LeaderHeader = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Generation = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    justify-content: center;
  }
`;

const LeaderName = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background-color: #339af0;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const LeaderDescriptionBox = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
`;

const DescriptionBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const LeaderImg = styled.img`
  width: 20%;
  height: 100%;
`;

const Description = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 1rem 1.2rem;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const ClubActivityArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const ClubActivityTitle = styled.h2`
  font-weight: 600;
  width: 80%;
  height: 6rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 1.2rem;
    padding-left: 1rem;
    height: 5rem;
  }
`;

const ClubActivityBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ActivityCategoriesBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  border: 1px solid #ced4da;
  @media screen and (max-width: 480px) {
    height: 2.5rem;
  }
`;

const ActivityCategory = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#339af0" : null)};
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ActivityProgramArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ActivityProgramBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #ced4da;
  @media screen and (max-width: 480px) {
    padding: 1rem 0.8rem;
  }
`;

const ProgramYear = styled.div`
  color: #3b5bdb;
  font-size: 1.2rem;
  font-weight: bold;
  width: 5%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    width: 15%;
    font-size: 1rem;
  }
`;

const ProgramHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 95%;
  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;

const HistoryItem = styled.div`
  width: 100%;
  display: flex;
  .project-titel {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`;

const Semester = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    width: 20%;
  }
`;

const ProjectUrl = styled.a`
  width: 95%;
  display: flex;
  padding-left: 2rem;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 480px) {
    width: 85%;
    padding-left: 1rem;
  }
`;

const Content = styled.div`
  width: 85%;
`;

const Introduction = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("강의");

  return (
    <div>
      <Header />
      <IntroductionArea>
        <IntroductionBox>
          <FlagIntroductionBox>
            <FlagIntroductionContents>Flag는</FlagIntroductionContents>
            <FlagIntroductionContents>
              IT 개발을 좋아하는
            </FlagIntroductionContents>
            <FlagIntroductionContents>
              수원대생들을 위한 동아리입니다.
            </FlagIntroductionContents>
            <FlagSignUpBox>
              <SignUpButton onClick={() => navigate("/signUp")}>
                동아리 가입하기
              </SignUpButton>
            </FlagSignUpBox>
          </FlagIntroductionBox>
          <ClubLeaderArea>
            <ClubLeadersBox>
              <ClubLeaderTitle>동아리장 소개</ClubLeaderTitle>
              <ClubLeaderBox>
                <LeaderHeaderBox>
                  <LeaderHeader>
                    <Generation>1대</Generation>
                    <LeaderName>정충일(컴퓨터SW)</LeaderName>
                  </LeaderHeader>
                </LeaderHeaderBox>
                <LeaderDescriptionBox>
                  <DescriptionBox>
                    <LeaderImg src={chungil} />
                    <Description>
                      <p>해병대 전역(병 1223기)</p>
                      <p>FLAG 설립</p>
                      <p>SUWIKI FE 참여</p>
                      <p>구름톤 최우수상 수상</p>
                      <p>전국대학연합 FE 컨퍼런스 주최</p>
                      <p>현 카카오브레인 인턴</p>
                    </Description>
                  </DescriptionBox>
                </LeaderDescriptionBox>
              </ClubLeaderBox>
              <ClubLeaderBox>
                <LeaderHeaderBox>
                  <LeaderHeader>
                    <Generation>2대</Generation>
                    <LeaderName>이수빈(데이터과학부)</LeaderName>
                  </LeaderHeader>
                </LeaderHeaderBox>
                <LeaderDescriptionBox>
                  <DescriptionBox>
                    <LeaderImg src={hejow} />
                    <Description>ㅇㅁㄴㅇㅁㄴㅇ</Description>
                  </DescriptionBox>
                </LeaderDescriptionBox>
              </ClubLeaderBox>
            </ClubLeadersBox>
          </ClubLeaderArea>
          <ClubActivityArea>
            <ClubActivityTitle>동아리 프로그램 소개</ClubActivityTitle>
            <ClubActivityBox>
              <ActivityCategoriesBox>
                {Object.keys(CLUB_PROGRAM_CATEGORIE).map((key) => (
                  <ActivityCategory
                    key={CLUB_PROGRAM_CATEGORIE[key].id}
                    selected={CLUB_PROGRAM_CATEGORIE[key].title === category}
                    onClick={() =>
                      setCategory(CLUB_PROGRAM_CATEGORIE[key].title)
                    }
                  >
                    {CLUB_PROGRAM_CATEGORIE[key].title}
                  </ActivityCategory>
                ))}
              </ActivityCategoriesBox>
              {category === "강의" && (
                <ActivityProgramArea>
                  {Object.keys(CLUB_PROGRAM_CATEGORIE.lecture.programs).map(
                    (program) => (
                      <ActivityProgramBox key={program}>
                        <ProgramYear>{program}</ProgramYear>
                        <ProgramHistory>
                          {CLUB_PROGRAM_CATEGORIE.lecture.programs[program].map(
                            (item) => (
                              <HistoryItem key={item.name}>
                                <Semester>{item.semester}</Semester>
                                <Content>{item.name}</Content>
                              </HistoryItem>
                            )
                          )}
                        </ProgramHistory>
                      </ActivityProgramBox>
                    )
                  )}
                </ActivityProgramArea>
              )}
              {category === "프로젝트" && (
                <ActivityProgramArea>
                  {Object.keys(CLUB_PROGRAM_CATEGORIE.project.programs).map(
                    (program) => (
                      <ActivityProgramBox key={program}>
                        <ProgramYear>{program}</ProgramYear>
                        <ProgramHistory>
                          {CLUB_PROGRAM_CATEGORIE.project.programs[program].map(
                            (item) => (
                              <HistoryItem key={item.name}>
                                <ProjectUrl href={item.url} target="_blank">
                                  {item.name}
                                </ProjectUrl>
                              </HistoryItem>
                            )
                          )}
                        </ProgramHistory>
                      </ActivityProgramBox>
                    )
                  )}
                </ActivityProgramArea>
              )}
              {category === "멘토링" && (
                <ActivityProgramArea>
                  {Object.keys(CLUB_PROGRAM_CATEGORIE.mentoring.programs).map(
                    (program) => (
                      <ActivityProgramBox key={program}>
                        <ProgramYear>{program}</ProgramYear>
                        <ProgramHistory>
                          {CLUB_PROGRAM_CATEGORIE.mentoring.programs[
                            program
                          ].map((item) => (
                            <HistoryItem key={item.name}>
                              <Semester>{item.semester}</Semester>
                              <Content>{item.name}</Content>
                            </HistoryItem>
                          ))}
                        </ProgramHistory>
                      </ActivityProgramBox>
                    )
                  )}
                </ActivityProgramArea>
              )}

              {category === "스터디" && (
                <ActivityProgramArea>
                  {Object.keys(CLUB_PROGRAM_CATEGORIE.study.programs).map(
                    (program) => (
                      <ActivityProgramBox key={program}>
                        <ProgramYear>{program}</ProgramYear>
                        <ProgramHistory>
                          {CLUB_PROGRAM_CATEGORIE.study.programs[program].map(
                            (item) => (
                              <HistoryItem key={item.name}>
                                <Semester>{item.semester}</Semester>
                                <Content>{item.name}</Content>
                              </HistoryItem>
                            )
                          )}
                        </ProgramHistory>
                      </ActivityProgramBox>
                    )
                  )}
                </ActivityProgramArea>
              )}
            </ClubActivityBox>
          </ClubActivityArea>
        </IntroductionBox>
      </IntroductionArea>
    </div>
  );
};

export default Introduction;
