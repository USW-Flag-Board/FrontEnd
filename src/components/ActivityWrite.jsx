import {useState} from "react";
import styled from "styled-components";

const userId = [
    "이수빈",
]

const ActivityWrite = (props) =>{

    const closeModal = () =>{
        props.closeModal();
      }

    const [index, setIndex] = useState("0");
    const onSelect = (event) => {
      setIndex(event.target.value);
    };

    return(
        <>
            <ModalBackground>
                <ModalBox>
                    <Box>
                        <ModalTitle>
                            <CloseBox><CloseButton onClick={closeModal}>X</CloseButton></CloseBox>
                            <RowBox><Title type="text" placeholder="제목을 입력해주세요."></Title><ManagerID>{userId}</ManagerID></RowBox>
                            <RowBox>{props.title}<ModalNamebox>{props.name}</ModalNamebox></RowBox>
                            <RowBox>
                                <Modaltype select value={index} onChange={onSelect}>
                                    <option value="0">Project</option>
                                    <option value="1">Study</option>
                                    <option value="2">Mentoring</option>
                                </Modaltype><ModalPeriod type="text" placeholder="마감 날짜">{props.day}</ModalPeriod>
                            </RowBox>
                        
                        </ModalTitle>
                        {index === "0" ? <Project/> : null}
                        {index === "1" ? <Study/> : null}
                        {index === "2" ? <Mentoring/> : null}
                    </Box>
                </ModalBox>
            </ModalBackground>
        </>
    );
};

const Project = (props) =>{
    return(
        <>
            <FormBox>
                <ModalMain type="text" placeholder="내용을 입력해 주세요"></ModalMain>
                <Modalgit type="text" placeholder="깃허브 링크:">{props.git}</Modalgit>
                <CompletedButton>작성완료</CompletedButton>
            </FormBox>
        </>
    );
};

const Study = (props) =>{
    return(
        <>
            <FormBox>
                <ModalMain type="text" placeholder="내용을 입력해 주세요"></ModalMain>
                <BookBox>
                    <RowBox>책 사용여부: <Book></Book> </RowBox>
                    <RowBox>온/오프라인: <OnOff></OnOff> </RowBox>
                </BookBox>
                <CompletedButton>작성완료</CompletedButton>
            </FormBox>
        </>
    );
};

const Mentoring = (props) =>{
    return(
        <>
            <FormBox>
                <ModalMain type="text" placeholder="내용을 입력해 주세요"></ModalMain>
                <BookBox>
                    <RowBox>책 사용여부: <Book></Book> </RowBox>
                    <RowBox>온/오프라인: <OnOff></OnOff> </RowBox>
                </BookBox>
                <CompletedButton>작성완료</CompletedButton>
            </FormBox>
        </>
    );
};


const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0);
`;

const ModalBox = styled.div`
    position: absolute;
    top: calc(17vh); left: calc(31vw);
    background-color: white;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 38%;
    height: auto;
    color: black;
`;

const ModalTitle = styled.div`
    margin: 5px;
    font-weight: 800;
    font-size: 23px;
    width: auto;
    display:flex;
    flex-direction: column;

`;

const Modaltype = styled.select`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: center;
    margin-left: 5px;
    margin-top: 5px;
    align-items: center;
`;

const ModalPeriod = styled.input`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    width: 50%;
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: center;
    margin-left: 4%;
    margin-top: 5px;
    align-items: center;
`;

const ModalMain = styled.textarea`
    width: 91%;
    height: 30vh;
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    resize: none;
    padding: 10px;
`;

const ModalNamebox = styled.div`
    font-size: 17px;
    text-align: right;
    width: 7vw;
    font-weight: 800;
`;

const Box = styled.div`
    margin: 10px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center; 

`;

const FormBox = styled.div`
    margin: 5px;
    width: 36vw;
    flex-direction: column;
    justify-content: center; 

`;

const RowBox = styled.div`
    display: flex;
    align-items: center;
   
`;

const BookBox = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    font-weight: 800;
    font-size: 15px;
`;

const Book = styled.input`
    width: 70%;
    padding: 3px;
    border: none;
    font-weight: 800;
    font-size: 15px;
    margin-left: 5px;
`

const OnOff = styled.input`
    width: auto;
    border: none;
    padding: 3px;
    width: 70%;
    font-weight: 800;
    font-size: 15px;
    margin-left: 5px;
`

const Modalgit = styled.input`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 600;
    font-size: 15px;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    width: 91%;
    align-items: center;
`;

const CompletedButton = styled.button`
    width: auto;
    height: 30px;
    font-weight: 1000;
    font-size: 13px;
    border-radius: 20px; 
    cursor:pointer;
    color: white;
    margin: 10px;
    background-color: rgba(44,44,44);
    border: none;
`;

const Title = styled.input`
    font-weight: 1000;
    font-size: 20px;
    width: 80%;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    height: auto;
    border: 1px solid black;
    border-radius: 20px;
`;

const ManagerID = styled.div`
    width: auto;
    height: 3vh;
    font-size: 15px;
    font-weight: 800;
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 18px;
    font-weight: 800;
    cursor:pointer;

`;

const CloseBox = styled.div`
    width: auto;
    display: flex;
    flex-direction: row-reverse;
`;
export default ActivityWrite;