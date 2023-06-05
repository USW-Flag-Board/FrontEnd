import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";

const ButtonBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  height: 80%;
  background-color: #339af0;
  border: none;
  border-radius: 0.3rem;
  color: white;
`;

const WriterButtonBox = ({ status, id, handleModal }) => {
  const navigate = useNavigate();

  const handledDelteClick = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await instance.delete(`activities/${id}`);
        alert("게시글이 삭제되었습니다.");
        navigate("/activity");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleFinishClick = async () => {
    if (window.confirm("활동을 종료하시겠습니까?")) {
      try {
        await instance.patch(`activities/${id}/finish`);
        alert("활동이 종료되었습니다.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ButtonBox>
      <Button onClick={handledDelteClick}>활동삭제</Button>
      <Button onClick={() => navigate(`/activity/edit/${id}`)}>수정하기</Button>
      {status === "RECRUIT" && (
        <Button onClick={() => handleModal("applyCheck", true)}>
          신청자 보기
        </Button>
      )}
      {status === "ON" && (
        <>
          <Button onClick={handleFinishClick}>활동종료</Button>
          <Button onClick={() => handleModal("selectedCheck", true)}>
            참여자 보기
          </Button>
        </>
      )}
    </ButtonBox>
  );
};

export default WriterButtonBox;
