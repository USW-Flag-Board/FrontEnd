import styled from "styled-components";

const ActivityCard = (props) => {
    return (
        <>
            <Mainbox>
                <span><Title>{props.title}</Title></span>
                <span><Text>{props.text}</Text></span>
                <span><Tag>{props.tag}</Tag></span>
                <span><Name>{props.name}</Name></span>
            </Mainbox>       
        </>
    );
} 

const Mainbox = styled.div`
    width: 29.5%;
    height: 130px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding-right: 13px;
    padding-left: 13px;
    margin-right: 12px;
    margin-top: 12px;
    marign-bottom: 12px;
    
`;

const Title = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    maigin: 8px;
    
`;

const Text = styled.div`
    width: 100%;
    font-size: 14px;
    maigin: 5px;
    padding: 10px;
`;

const Tag = styled.div`
    width: 100%;
    font-size: 12px;
    padding-left: 10px;
    padding-bottom: 18px;

`;

const Name = styled.div`
    width:'100%';
    font-size: 14px;
    text-align:right;
`;

export default ActivityCard;