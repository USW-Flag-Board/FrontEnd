import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import instance from "../../apis/AxiosInterceptorSetup";

const SelectedCheckModal = ({ setSelectedMembersCheck, id }) => {
  const [selectedMember, setSelectedMember] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(`activities/${id}/participant`);
        setSelectedMember(response.data.payload);
        console.log(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <ContentBox>
        <Content className="content-area">
          <MembersTitle>참여자 정보 확인</MembersTitle>
          {selectedMember &&
            selectedMember.map(({ name, major, loginId }) => (
              <MembersBox key={loginId}>
                <MemberIcon icon={faUser} />
                <span>{name}</span>
                <span>({major})</span>
              </MembersBox>
            ))}
        </Content>
      </ContentBox>
      <ButtonArea>
        <ButtonBox>
          <ModalButton
            type="button"
            onClick={() => setSelectedMembersCheck(false)}
          >
            뒤로가기
          </ModalButton>
        </ButtonBox>
      </ButtonArea>
    </>
  );
};

export default SelectedCheckModal;

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  margin: 1rem 1rem 1rem 0;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid #8e8e8e;
  border-radius: 20px;

  :nth-child(2) {
    height: 30%;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  resize: none;
  overflow-y: auto;

  /* 스크롤바 전체 */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* 스크롤바의 슬라이더 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #555;
  }

  /* 스크롤바의 트랙 */
  ::-webkit-scrollbar-track {
    border: 1px solid #8e8e8e;
    background-color: white;
    border-radius: 10px;
  }
`;

const MembersTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const MembersBox = styled.div`
  cursor: pointer;
  margin-bottom: 0.6rem;
  width: fit-content;
`;

const MemberIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  width: 100%;
  height: 50%;
  background-color: #404040;
  color: white;
  cursor: pointer;
`;
