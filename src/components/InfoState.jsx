import * as React from "react";
import {styled} from "@mui/system";

const InfoStatePosition = styled("div")({
  color: "white",
  display: "flex",
  width: "100%",
  fontSize: "12px",
  justifyContent: "end",
  height: 12,
});

function InfoState(props) {
  return (
    <>
      <InfoStatePosition>{props.message}</InfoStatePosition>
    </>
  );
}

export default InfoState;
