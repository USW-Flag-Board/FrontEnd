import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "../components/activity/ActivityCard";
import Toggle from "../components/Toggle";
import ActivityWriteModal from "../components/activity/ActivityWriteModal";
import { Header } from "../components";
import activityData from "../constants/activity";

const Activity = () => {

  const header = true;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <>
      {header && <Header />}
      {isOpen && <ActivityWriteModal closeModal={closeModal}/>}
      <ActivityArea>
        <ActivityBox>
          <KategorieBox>
          {activityData.ACTIVITY_CATEGORIE.map(({id, icon, title})=>(
            <Kategorie key={id}> 
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
              <WriteButtonIcon icon={faPencil}/>
              <WriteButton type="button" onClick={openModal}>글쓰기</WriteButton>
            </ActivityWriteButton>
          </SwitchArea>
        </ActivityBox>
        <CardBox>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
          <ActivityCard/>
        </CardBox>
      </ActivityArea>
    </>
  );
};

export default Activity;

const ActivityArea = styled.div`
  width: calc(100vw - 16rem);
  height: calc(88vh - 4rem);
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
  margin-right: 0.5rem
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

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  padding: 3rem 0.5rem;
`

