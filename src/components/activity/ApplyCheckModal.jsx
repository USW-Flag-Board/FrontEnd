import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import instance from "../../apis/AxiosInterceptorSetup";

const ApplyCheckModal = ({ activityId, handleModal, updateStatus }) => {
  const [applyMember, setApplyMembers] = useState("");
  const [selectedMember, setSelectedMember] = useState([]);

  const handleMemberClick = (name, major, id, loginId) => {
    if (!selectedMember.some((member) => member.loginId === loginId)) {
      const newMember = {
        name: name,
        major: major,
        id: id,
        loginId: loginId,
      };
      setSelectedMember([...selectedMember, newMember]);
    }
  };

  const handleDeleteMember = (id) => {
    const deletedMeber = selectedMember.filter((member) => member.id !== id);
    setSelectedMember(deletedMeber);
  };

  const handleCloseRecruit = async () => {
    const members = selectedMember.map((member) => member.loginId);
    try {
      const response = await instance.patch(`/activities/${activityId}/close`, {
        loginIdList: members,
      });
      if (response.status === 200) {
        handleModal("applyCheck", false);
        updateStatus("ON");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(`/activities/${activityId}/apply`);
        setApplyMembers(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [activityId]);

  return (
    <ModalArea>
      <ModalBox>
        <ModalBox>
          <TitleBox>
            <Title>신청자 보기</Title>
          </TitleBox>
          <CheckMembersBox>
            <MembersTitle>신청자</MembersTitle>
            <ContentBox>
              <Content className="content-area">
                {applyMember &&
                  applyMember.map(({ name, major, id, loginId }) => (
                    <MembersBox
                      key={id}
                      onClick={() =>
                        handleMemberClick(name, major, id, loginId)
                      }
                    >
                      <MemberIcon icon={faUser} />
                      <span>{name}</span>
                      <span>({major})</span>
                    </MembersBox>
                  ))}
              </Content>
            </ContentBox>
            <MembersTitle>선택한 멤버</MembersTitle>
            <ContentBox className="selected-member">
              <Content>
                {selectedMember &&
                  selectedMember.map(({ name, major, id }) => (
                    <MembersBox key={id} onClick={() => handleDeleteMember(id)}>
                      <MemberIcon icon={faUser} />
                      <span>{name}</span>
                      <span>({major})</span>
                    </MembersBox>
                  ))}
              </Content>
            </ContentBox>
          </CheckMembersBox>
          <ButtonBox>
            <Button onClick={handleCloseRecruit}>마감하기</Button>
            <Button onClick={() => handleModal("applyCheck", false)}>
              닫기
            </Button>
          </ButtonBox>
        </ModalBox>
      </ModalBox>
    </ModalArea>
  );
};

export default ApplyCheckModal;

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const CheckMembersBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const TitleBox = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 1.5rem 2rem;
`;

const ContentBox = styled.div`
  width: 100%;
  min-height: 10rem;
  border: 1px solid #8e8e8e;
  border-radius: 0.3rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
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
  font-size: 0.9rem;
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

const ButtonBox = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 3rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  gap: 1rem;
  @media screen and (max-width: 480px) {
    height: 2.3rem;
    font-size: 0.4rem;
  }
`;

const Button = styled.button`
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 20%;
  height: 100%;
  border: none;
  padding: 0.3rem 0.2rem;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 25%;
  }
`;
