import {useState, useEffect} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faFolderClosed} from "@fortawesome/free-regular-svg-icons";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "../components/ActivityCard";
import {Toggle} from "../components/Toggle";
import ActivityUserModal from "../components/ActivityUserModal";
import ActivityManagerModal from "../components/ActivityManagerModal";
import { Header } from "../components";


const Activity = () => {
  const header = true;

  return (
    <>
      {header && <Header/>}
      <ActivityArea>
          
      </ActivityArea>
    </>
  );
};

export default Activity;

const ActivityArea = styled.div`
  width: 100vw;
`;

