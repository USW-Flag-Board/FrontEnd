import styled from "styled-components";

const ActivityBox = styled.div`
  width: 100%;
  display: flex;
  height: 2rem;
  font-size: 0.8rem;
`;

const ActivityYear = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ActivityStatus = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ActivityName = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ActivitySemester = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserActivity = ({ activityStatus, name, semester, year }) => {
  return (
    <ActivityBox>
      <ActivityYear>{year}</ActivityYear>
      <ActivitySemester>
        {semester === "SUMMER_VACATION" && "여름방학"}
        {semester === "WINTER_VACATION" && "겨울방학"}
      </ActivitySemester>
      <ActivityStatus>
        {activityStatus === "RECRUIT" && "모집중"}
        {activityStatus === "ON" && "활동중"}
        {activityStatus === "OFF" && "활동종료"}
      </ActivityStatus>
      <ActivityName>{name}</ActivityName>
    </ActivityBox>
  );
};

export default UserActivity;
