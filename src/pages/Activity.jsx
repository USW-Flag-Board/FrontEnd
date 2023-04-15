import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Header, ActivityCard, Toggle, WriteModal, ContentModal } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ACTIVITY_CATEGORIE } from "../constants/activity";

const Activity = () => {
  const header = true;
  const [isOpen, setIsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [cardId, setCardId] = useState();
  const [kategorie, setKategorie] =  useState("전체");
  const dispatch = useDispatch();
  const activities = useSelector((state)=> state.activitySlice.getAllActivitiesData);
  // useEffect(()=>{
  // }, [])


  const handleCard = (id) => {
    setContentOpen(!contentOpen);
    console.log(id);
  }

  const handleWrite = () => {
    setIsOpen(!isOpen);
  }

  const KategorieClick = (title) => {
    setKategorie(title);
    console.log(title)
  };

  return (
    <>
      {header && <Header />}
      {isOpen && <WriteModal closeModal={handleWrite} />}
      {contentOpen && <ContentModal closeModal={handleCard}/>}
      <ActivityArea>
        <ActivityBox>
          <KategorieBox>
            {ACTIVITY_CATEGORIE.map(({ id, icon, title }) => (
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
          {Object.keys(activities).map(year => (
            Object.keys(activities[year]).map((type) => (
              activities[year][type].map(({id, name, leader, activityType, createdAt}) => (                  
                <Card key={id} onClick={() => handleCard(id)}>  
                  <ActivityCard
                    title={name}
                    name={leader}
                    type={activityType}
                    // createAt={createdAt}
                  />
                </Card>  
              ))
            ))
          ))}
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
