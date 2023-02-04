import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Reply = (props) => {
    return (
        <CommentBox>
            <CommentUserImg icon={faUser}/>
            <ContentContainer>
                <CommentHeader>
                    <NameText>어준혁</NameText>
                    <WriteTime>2023.02.01</WriteTime>
                    <Deletebutton>삭제하기</Deletebutton>
                </CommentHeader>
                <CommentText>내용</CommentText>
                <ReplyText>답글달기</ReplyText>
            </ContentContainer>
        </CommentBox>
    );
}

const CommentBox = styled.div`
    display: flex;
    box-sizing: border-box;
    // border: 1px solid #9A9A9A;
    // border-radius: 16px;
    margin-bottom: 2rem;
`;

const CommentUserImg = styled(FontAwesomeIcon)`
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: white;
    color: black;
    padding: 8px;
`;

const ContentContainer = styled.div`
    width: 100%;
    margin-left: 1rem;
`;

const CommentHeader = styled.div`
    display: inline-box;
    width: 100%;
    display: flex;
    align-items: center;
`

const NameText = styled.span`
    display: flex;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    `;
    
const WriteTime = styled.span`
    margin-left: 0.8rem;
    font-size: 8px;
`;

const CommentText = styled.div`
    color: white;
    font-size: 13px;
    margin: 0.6rem 0;
    font-weight: bold;
`;

const ReplyText = styled.button`
    color: white;
    font-size: 8px;
    cursor: pointer;
    border: none;
    background-color: #2C2C2C;
    width: 38px;
    padding: 0;
`;

const Deletebutton = styled.button`
    color: white;
    background-color:transparent;
    border:none;
    font-size: 8px;
    cursor: pointer;
`;

export default Reply;