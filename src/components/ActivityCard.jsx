import styled from "styled-components";

const ActivityCard = () => {
    return (
        <Mainbox>
            <Title>ㅇㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅇㅇㅇㅁㄴ</Title>
            <Deadline>모집 마감일: <span>2023.03.23</span></Deadline>
            <Name>어준혁</Name>
        </Mainbox>       
    );
}


const Mainbox = styled.div`
    box-sizing: border-box;
    width: 23%;
    height: 150px;
    border: 2px solid #d1d1d1;
    border-radius: 30px;
    cursor:pointer;
    padding: 1rem 1rem 1.5rem 1rem;
    @media screen and (max-width: 767px){
        width: 100%;
    }
`;

const Title = styled.div`
    height: 50%;
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
    width:100%;
    font-size: 14px;
    display: flex;    
`;

export default ActivityCard;