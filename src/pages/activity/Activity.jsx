import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { ActivityCard, Header, Pagination } from "../../components";
import { ACTIVITY_CATEGORIE } from "../../constants/activity";
import { SessionStorage } from "../../utils/browserStorage";

const Activity = () => {
  const navigate = useNavigate();
  const [kategorie, setKategorie] = useState("ALL");
  const [activities, setActivities] = useState({
    ALL: [],
    PROJECT: [],
    STUDY: [],
    MENTORING: [],
  });
  const [activitiesCurrentItems, setActivitiesCurrentItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  function filterActivities(activities, type) {
    return activities.filter((activity) => activity.type === type);
  }

  const KategorieClick = (title) => {
    setKategorie(title);
    switch (title) {
      case "All":
        setActivitiesCurrentItems(activities.ALL);
        break;
      case "PROJECT":
        setActivitiesCurrentItems(activities.PROJECT);
        break;
      case "STUDY":
        setActivitiesCurrentItems(activities.STUDY);
        break;
      case "MENTORING":
        setActivitiesCurrentItems(activities.MENTORING);
        break;
    }
  };

  return (
    <>
      <Header />
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
              <ActivityWriteButton
                onClick={() => navigate("/activity/write")}
                type="button"
              >
                <WriteButtonIcon icon={faPencil} />
                <span>글쓰기</span>
              </ActivityWriteButton>
            ) : null}
          </SwitchArea>
        </ActivityBox>
        <CardArea>
          {activities &&
            activitiesCurrentItems.map(
              ({ id, name, leader, type, semester, status }) => (
                <Card
                  key={id}
                  onClick={() => navigate(`/activity/content/${id}`)}
                >
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
        <Pagination
          items={activities[kategorie]}
          itemsPerPage={12}
          setCurrentItems={setActivitiesCurrentItems}
        />
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
    padding: 1.5rem 1rem;
  }
  margin-bottom: 2rem;
`;

const ActivityBox = styled.div`
  width: 70%;
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
  color: ${(props) => (props.selected ? "#339af0" : "#adb5bd")};
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

const CardArea = styled.div`
  width: 70%;
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
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
