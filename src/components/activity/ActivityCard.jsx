import styled from "styled-components";

const ActivityCard = ({ title, name, type, createAt }) => {
    return (
        <Mainbox>
            <Type>{type}</Type>
            <Title>{title}</Title>
            <Deadline>생성일: <span>{createAt.slice(0, 3).join('.')}</span></Deadline>
            <Name>{name}</Name>
        </Mainbox>       
    );
}

const Mainbox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid #d1d1d1;
    border-radius: 30px;
    cursor:pointer;
    padding: 1rem 1rem 1.5rem 1rem;
`;

const Type = styled.div`
    height: 10%;
`;

const Title = styled.div`
    height: 40%;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
`;

const Deadline = styled.div`
    height: 20%;
    margin: 0.7rem 0;
    font-size: 0.8rem;
    font-weight: 500;
`;

const Name = styled.div`
    width: 100%;
    font-size: 14px;
    display: flex;    
`;

export default ActivityCard;