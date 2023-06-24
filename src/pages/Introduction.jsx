import styled from "styled-components";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";
import chungil from "../assets/images/chungil.jpg";
import hejow from "../assets/images/hejow.jpg";
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
`;

const FlagIntroductionContents = styled.div`
  border-bottom: 1px solid #ced4da;
  display: flex;
  align-items: center;
  font-size: 4.5rem;
  font-weight: bold;
  padding-left: 4rem;
  height: 25%;
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
`;

const ClubLeaderArea = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const ClubLeadersBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ClubLeaderTitle = styled.h2`
  font-weight: bold;
  width: 80%;
  height: 6rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const ClubLeaderBox = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 5rem;
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
`;

const Generation = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const LeaderName = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #339af0;
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
`;

const LeaderImg = styled.img`
  width: 20%;
  height: 100%;
`;

const Description = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;

const Introduction = () => {
  const navigate = useNavigate();
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
                    <Description>ㅇㅁㄴㅇㅁㄴㅇ</Description>
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
        </IntroductionBox>
      </IntroductionArea>
    </div>
  );
};

export default Introduction;
