import styled from "styled-components";

const ActivityCard = (props) => {
    return (
        <>
            <Mainbox>
                <Box>
                    <span><Title>{props.title}</Title></span>
                    <NameBox>
                        <span><Name>{props.name}</Name></span>
                    </NameBox>
                </Box>
            </Mainbox>       
        </>
    );
} 

const Mainbox = styled.div`
    width: 30vw;
    height: 80px;
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    justify-content: center;
    align-item: center;
    cursor:pointer;    
`;

const Title = styled.div`
    width: 24vw;
    margin-top: 2vh;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    maigin: 8px;
    display: flex;
`;

const Box = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
`;

const NameBox = styled.div`
    width: auto;
    display: flex;
    margin-top: 2vh;
    margin-right: 5vw; 
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.div`
    width:50px;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end; 
`;

export default ActivityCard;