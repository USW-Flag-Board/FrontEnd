import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Header,
  ActivityCard,
  WriteModal,
  ContentModal,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ACTIVITY_CATEGORIE } from "../constants/activity";
import { baseInstance } from "../apis/instance";

const Activity = () => {
  const header = true;
  const [isOpen, setIsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [cardId, setCardId] = useState("");
  const [kategorie, setKategorie] = useState("ALL");
  const [activities, setActivities] = useState({
    ALL: [],
    PROJECT: [],
    STUDY: [],
    MENTORING: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await baseInstance.get("/activities");
        const allActivities = response.data.payload.allActivities;

        const filteredActivities = {
          ALL: allActivities,
          PROJECT: filterActivities(allActivities, "PROJECT"),
          STUDY: filterActivities(allActivities, "STUDY"),
          MENTORING: filterActivities(allActivities, "MENTORING"),
        };

        setActivities(filteredActivities);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [isOpen]);

  function filterActivities(activities, type) {
    return activities.filter((activity) => activity.type === type);
  }

  const handleCard = (id) => {
    setCardId(id);
    setContentOpen(!contentOpen);
  };

  const handleWrite = () => {
    setIsOpen(!isOpen);
  };

  const KategorieClick = (title) => {
    setKategorie(title);
  };

  return (
    <>
      {header && <Header />}
      {isOpen && <WriteModal closeModal={handleWrite} />}
      {contentOpen && <ContentModal closeModal={handleCard} cardId={cardId} />}
      <ActivityArea>
        <ActivityBox>
          <KategorieBox>
            {ACTIVITY_CATEGORIE.map(({ id, icon, title, value }) => (
              <Kategorie key={id} onClick={() => KategorieClick(value)}>
                <KategorieIcon icon={icon} />
                <span>{title}</span>
              </Kategorie>
            ))}
          </KategorieBox>
          <SwitchArea>
            <ActivityWriteButton onClick={handleWrite} type="button">
              <WriteButtonIcon icon={faPencil} />
              <WriteButton>글쓰기</WriteButton>
            </ActivityWriteButton>
          </SwitchArea>
        </ActivityBox>
        <CardArea>
          {activities &&
            activities[kategorie].map(
              ({ id, name, leader, type, semester, status }) => (
                <Card key={id} onClick={() => handleCard(id)}>
                  <ActivityCard
                    title={name}
                    name={leader}
                    type={type}
                    semester={semester}
                    status={status}
                  />
                </Card>
              )
            )}
        </CardArea>
      </ActivityArea>
    </>
  );
};

export default Activity;

const ActivityArea = styled.div`
  width: 100%;
  padding: 4rem 8rem 0 8rem;
  z-index: 0;
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 2rem 2rem;
  }
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
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
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

const KategorieIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const SwitchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ActivityWriteButton = styled.button`
  box-sizing: border-box;
  width: 40%;
  height: 100%;
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
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  width: 23%;
  height: 150px;
  @media (max-width: 1396px) {
    width: 48%;
  }
  @media screen and (max-width: 829px) {
    width: 100%;
  }
`;
