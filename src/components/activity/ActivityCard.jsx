import styled from "styled-components";

const ActivityCard = ({ title, name, type, semester, status }) => {
    return (
        <Mainbox>
            <Type>{type}</Type>
            <Title>{title}</Title>
            <Deadline>기간: <span>{semester}</span></Deadline>
            <Name>{name}</Name>
        </Mainbox>       
    );
}

const Mainbox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid #d1d1d1;
    border-radius: 1rem;
    cursor: pointer;
    padding: 1rem 1rem 1.5rem 1rem;
`;

const Type = styled.div`
    height: 10%;
`;

const Title = styled.div`
    height: 40%;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Deadline = styled.div`
    height: 20%;
    margin: 0.7rem 0;
    font-size: 0.8rem;
    font-weight: 500;
`;

const Name = styled.div`
    width: 100%;
    font-size: 0.9rem;
    display: flex;    
`;

export default ActivityCard;