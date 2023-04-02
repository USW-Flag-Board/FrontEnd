import { useState } from "react";
import styled from "styled-components";
import { Header } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "../components/activity/ActivityCard";
import Toggle from "../components/Toggle";
import WriteModal from "../components/activity/WriteModal";
import ContentModal from "../components/activity/ContentModal";
import activityData from "../constants/activity";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Activity = () => {
  const header = true;
  const [isOpen, setIsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [kategorie, setKategorie] =  useState("전체");
  const dispatch = useDispatch();
  const allActivities = useSelector((state)=> state.activitySlice.getAllActivitiesData);
  console.log(allActivities);
  // useEffect(()=>{
  // }, [])

  const writeModal = () => {
    setIsOpen(!isOpen);
  };


  const contentModal = () => {
    setContentOpen(!contentOpen);
  };

  const KategorieClick = (title) => {
    setKategorie(title)
  };

  const ActivityCardClick = (id) => {

  }


  return (
    <>
      {header && <Header />}
      {isOpen && <WriteModal closeModal={writeModal} />}
      {contentOpen && <ContentModal closeModal={contentModal} />}
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
            <ActivityWriteButton type="button">
              <WriteButtonIcon icon={faPencil} />
              <WriteButton type="button" onClick={writeModal}>
                글쓰기
              </WriteButton>
            </ActivityWriteButton>
          </SwitchArea>
        </ActivityBox>
        <CardArea>
          <Card onClick={contentModal}>
            {Object.keys(allActivities).map(year => (
              Object.keys(allActivities[year]).map((type) => (
                allActivities[year][type].map(({id, name, leader, activityType, createdAt}) => (                  
                  <ActivityCard
                    key={id} 
                    title={name}
                    name={leader}
                    type={activityType}
                    createAt={createdAt}
                    onClick={()=> ActivityCardClick(id)}
                  />
                ))
              ))
            ))}
          </Card>
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
