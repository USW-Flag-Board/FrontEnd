import styled from "styled-components";

const Reply = (props) => {

    return (
        <Wrapper>
            <ImageContainer>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt=""
                />
            </ImageContainer>

            <ContentContainer>
                <span><NameText>{props.name}{props.delete}</NameText></span>
                <span><CommentText>{props.Comment}</CommentText></span>
                <span><ReplyText>{props.replys}</ReplyText></span>
            </ContentContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 8px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    border: 1px solid grey;
    border-radius: 16px;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

const ContentContainer = styled.div`
        margin-left: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
`;

const NameText = styled.div`
        color: white;
        font-size: 16px;
        font-weight: bold;
        margin: 5px;
`;

const CommentText = styled.div`
        color: white;
        font-size: 15px;
        margin: 5px;
`;

const ReplyText = styled.div`
        color: white;
        font-size: 12px;
        margin: 5px;
        cursor: pointer;
`;

const Deletebutton = styled.div`
    color: white;
    background-color:transparent;
    border:none;
    font-size: 12px;
    cursor: pointer;
`;

export default Reply;