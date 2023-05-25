import { useState, useEffect } from "react";
import styled from "styled-components";
import { Header, ActivityCard, WriteModal, ContentModal } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ACTIVITY_CATEGORIE } from "../constants/activity";
import { SessionStorage } from "../utils/browserStorage";
import instance from "../apis/AxiosInterceptorSetup";

const Activity = () => {
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
        const response = await instance.get("/activities");
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
      <Header />
      {isOpen && <WriteModal closeModal={handleWrite} />}
      {contentOpen && <ContentModal closeModal={handleCard} cardId={cardId} />}
      <ActivityArea>
        <ActivityBox>
          <KategorieBox>
            {ACTIVITY_CATEGORIE.map(({ id, icon, title, value }) => (
              <Kategorie
                key={id}
                onClick={() => KategorieClick(value)}
                selected={
                  kategorie === value || (kategorie === "" && value === "ALL")
                }
              >
                <KategorieIcon icon={icon} />
                <span>{title}</span>
              </Kategorie>
            ))}
          </KategorieBox>
          <SwitchArea>
            {SessionStorage.get("UserToken") ? (
              <ActivityWriteButton onClick={handleWrite} type="button">
                <WriteButtonIcon icon={faPencil} />
                <WriteButton>글쓰기</WriteButton>
              </ActivityWriteButton>
            ) : null}
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
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    padding: 1.5rem 2rem;
  }
`;

const ActivityBox = styled.div`
  width: 80%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 480px) {
    width: 90%;
    margin: 0;
  }
`;

const KategorieBox = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const Kategorie = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#212529" : "#adb5bd")};
  @media (max-width: 480px) {
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const KategorieIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  @media (max-width: 480px) {
    display: none;
    margin-right: 0;
  }
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
  background-color: #339af0;
  cursor: pointer;
  color: white;
  width: 7rem;
  height: 100%;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.5rem;
  }
`;

const WriteButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.2rem;
  box-sizing: border-box;
`;

const WriteButton = styled.span``;

const CardArea = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Card = styled.div`
  width: 23%;
  height: 10rem;
  @media (max-width: 480px) {
    height: 9rem;
  }
  @media (max-width: 1396px) {
    width: 48%;
  }
  @media screen and (max-width: 829px) {
    width: 100%;
  }
`;
