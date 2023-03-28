import { useState } from "react";
import styled from "styled-components";
import activityData from "../constants/activity"; 
import { setPostActivity } from "../apis/activityAPI";

const ActivityWriteModal = ({closeModal}) =>{
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [book, setBook] = useState("");
    const [content, setContent] = useState("")
    const [name, setName] = useState("");
    const [proceed, setProceed] = useState("");
    
    const data = {
        activityType: type,
        bookName: title,
        bookUsage: book,
        description: content,
        githubLink: "",
        name: "어준혁",
        proceed: proceed,
    }

    const handleType = (e) => {
        setType(e.target.value);
    }

    const submit = () => {
        setPostActivity(data);
    }

    return(
        <ModalArea>
            <ModalBox>
                <SelectAndTitle>
                    <Select onChange={handleType}>
                        {activityData.SELECT_OPTION.map(({id, title}) =>
                        <Option key={id} value={title}>{title}</Option>
                        )}
                    </Select>
                    <Title type="text" placeholder="활동의 이름을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)}/>
                </SelectAndTitle>
                <ContentBox>
                    <ContentInput placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)}/>
                </ContentBox>
                <CheckBox>
                    <RadioBox>
                        <Span>책 사용 여부</Span>
                        {activityData.BOOK_RADIO_OPTION.map(({id, option, value})=>
                        <Radio key={id}>
                            <Span>{option}</Span>
                            <RadioInput type="radio" value={value} name='book' onClick={()=>setBook(value)}/>
                        </Radio>
                        )}
                    </RadioBox>
                    <RadioBox>
                        <Span>온/오프라인</Span>
                        {activityData.ONLINE_RADIO_OPTION.map(({id, option, value})=>
                        <Radio key={id}>
                            <Span>{option}</Span>
                            <RadioInput type="radio" value={value} name='online' onClick={()=>setProceed(value)}/>
                        </Radio>)}
                    </RadioBox>
                </CheckBox>
                <ButtonBox>
                    <ModalButton onClick={submit}>작성완료</ModalButton>
                    <ModalButton onClick={closeModal}>작성취소</ModalButton>
                </ButtonBox>
            </ModalBox>
        </ModalArea>
    );
};

export default ActivityWriteModal;

const ModalArea = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

const ModalBox = styled.form`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    width: 680px;
    height: 550px;
    padding: 2rem;
`;

const SelectAndTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    `;

const Select = styled.select`
    width: 30%;
    height: 100%;
    border: 1px solid #8E8E8E;
    border-radius: 20px;
    padding-left: 0.5rem;
`;

const Option = styled.option``;

const Title = styled.input`
    width: 68%;
    height: 100%;
    border: 1px solid #8E8E8E;
    border-radius: 20px;
    padding: 0 1rem;
`;

const ContentBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    margin: 1rem 0;
`;

const ContentInput = styled.textarea`
    box-sizing: border-box;
    border: 1px solid #8E8E8E;
    border-radius: 20px;
    padding: 1rem;
    width: 100%;
    height: 100%;
    resize: none;
    ::placeholder {
        color: #ACACAC;
    }
`;

const CheckBox = styled.div`
    box-sizing: border-box;
    border: 1px solid #8E8E8E;
    border-radius: 20px;
    padding: 1rem;
    height: 15%;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const RadioBox = styled.div`
    display: flex;
    align-items: center;
`;

const Radio = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`;

const RadioInput = styled.input`
    margin-left: 0.3rem;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    height: 13%;
`;

const ModalButton = styled.button`
    border: 1px solid #8E8E8E;
    border-radius: 20px;
    height: 50%;
    background-color: #404040;
    color: white;
`;

const Span = styled.span``;



