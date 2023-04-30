import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
const ListThem = () => {

    return(
        <ListThemBox>
            <BoardName>
                자유게시판
            </BoardName>
            <Title>
                오늘 코딩테스트 너무 어렵다.
            </Title>
            <WriterName>
                <span>어준혁</span>
            </WriterName>
            <PostInfo>
                <InfoBox>
                    <Icon icon={faEye}/>
                    <span>30</span>
                </InfoBox>
                <InfoBox>
                    <Icon icon={faComment}/>
                    <span>20</span>
                </InfoBox>
                <InfoBox>
                    <Icon icon={faThumbsUp}/>
                    <span>17</span>
                </InfoBox>
            </PostInfo>
        </ListThemBox>
    )
}

const ListThemBox = styled.div`
    width: 100%;
    height: 9rem;
    padding: 1rem 0;
    border-bottom: 1px solid #dee2e6;
    cursor: pointer;
    box-sizing: border-box;
`;

const BoardName = styled.div`
    padding-bottom: 0.7rem;
`;

const Title = styled.div`
    font-weight: bold;
`;

const WriterName = styled.div`
    padding: 0.8rem 0;
`;

const PostInfo = styled.div`
    display: flex;
`;

const InfoBox = styled.div`
    margin-right: 0.5rem;
`

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.3rem;
    padding: 0;
`

export default ListThem;
