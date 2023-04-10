import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Header, ActivityCard, Toggle, WriteModal, ContentModal } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import activityData from "../constants/activity";

const allActivities = {
  2022: {
    PROJECT: [{id: 1, name: "제목1", leader: "어준혁", activityType: "PROJECT", }],
    MENTORING: [{id: 2, name: "제목2", leader: "문희조", activityType: "MENTORING", }],
    STUDY: [{id: 3, name: "제목3", leader: "정충일", activityType: "STUDTY", }],
  },
  2023: { 
    PROJECT: [{id: 4, name: "제목4", leader: "이준엽", activityType: "PROJECT", }],
    MENTORING: [{id: 5, name: "제목5", leader: "김진수", activityType: "MENTORING", }],
    STUDY: [{id: 6, name: "제목6", leader: "조주현", activityType: "STUDTY", }],
  },
};

const Activity = () => {
  const header = true;
  const [isOpen, setIsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [cardId, setCardId] = useState();
  const [kategorie, setKategorie] =  useState("전체");
  const dispatch = useDispatch();
  // const allActivities = useSelector((state)=> state.activitySlice.getAllActivitiesData);
  // useEffect(()=>{
  // }, [])


  const handleCard = () => {
    setContentOpen(!contentOpen);
  }

  const handleWrite = () => {
    setIsOpen(!isOpen);
  }

  const KategorieClick = (title) => {
    setKategorie(title)
  };

  return (
    <>
      {header && <Header />}
      {isOpen && <WriteModal closeModal={handleWrite} />}
      {contentOpen && <ContentModal closeModal={handleCard}/>}
      <ActivityArea>
        <ActivityBox>
          <KategorieBox>
            {activityData.ACTIVITY_CATEGORIE.map(({ id, icon, title }) => (
              <Kategorie 
                key={id}

                onClick={() => KategorieClick(title)}>
                <KategorieIcon icon={icon} />
                <KategorieContent>{title}</KategorieContent>
              </Kategorie>
            ))}
          </KategorieBox>
          <SwitchArea>
            <SwitchBox>
              <SwitchTitle>모집 중만 보기</SwitchTitle>
              <Toggle />
            </SwitchBox>
            <ActivityWriteButton onClick={handleWrite} type="button">
              <WriteButtonIcon icon={faPencil} />
              <WriteButton>
                글쓰기
              </WriteButton>
            </ActivityWriteButton>
          </SwitchArea>
        </ActivityBox>
        <CardArea>
          {allActivities &&
            <Card onClick={handleCard}>
              {Object.keys(allActivities).map(year => (
                Object.keys(allActivities[year]).map((type) => (
                  allActivities[year][type].map(({id, name, leader, activityType, createdAt}) => (                  
                    <ActivityCard
                      key={id} 
                      title={name}
                      name={leader}
                      type={activityType}
                      // createAt={createdAt}
                    />
                  ))
                ))
              ))}
            </Card>}
        </CardArea>
      </ActivityArea>
    </>
  );
};

export default Activity;

const ActivityArea = styled.div`
  width: calc(100vw - 16rem);
  margin: 4rem 8rem 0 8rem;
  z-index: 0;
`;

const ActivityBox = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
`;

const KategorieBox = styled.div`
  width: 60%;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const Kategorie = styled.div`
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &.active {
    color: lightblue;
  }
`;

const KategorieContent = styled.span``;

const KategorieIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const SwitchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  font-size: 1.2rem;
  font-weight: bold;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
  margin-right: 1rem;
`;

const SwitchTitle = styled.span`
  margin-right: 0.7rem;
`;

const ActivityWriteButton = styled.button`
  box-sizing: border-box;
  width: 20%;
  height: 80%;
`;

const WriteButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.2rem;
  box-sizing: border-box;
`;

const WriteButton = styled.span``;

const CardArea = styled.div`
  box-sizing: border-box;
  padding: 3rem 0.5rem;
  width: 100%;
`;

const Card = styled.div`
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* width: 23%; */
  height: 150px;
  @media screen and (max-width: 767px){
  }
`
