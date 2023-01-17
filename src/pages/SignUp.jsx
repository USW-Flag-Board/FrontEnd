import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {styled} from "@mui/material/styles";

const PageArea = styled("div")({
  width: "100%",
  height: "100vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

const SignUpArea = styled("div")({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: 400,
});

const WriteArea = styled("input")({
  color: "white",
  paddingRight: 30,
  paddingLeft: 20,
  height: 60,
  width: 350,
  backgroundColor: "#6c6c6c",
  borderRadius: 28,
  border: 0,
  outline: "none",
  margin: 20,
  marginTop: 10,
  marginBottom: 10,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#575757",
  },
  "::placeholder": {
    color: "#ffffffcc",
  },
});

const AddIcon = styled(FontAwesomeIcon)({
  color: "white",
  position: "absolute",
  left: 390,
  top: 32,
});

const RelativeArea = styled("div")({
  position: "relative",
});

const SuwonEmail = styled("p")({
  color: "white",
  position: "absolute",
  left: 290,
  top: 32,
});

const AccountButton = styled("button")({
  backgroundColor: "#378975",
  color: "#ffffff",
  marginTop: 30,
  marginBottom: 30,
  borderRadius: 28,
  height: 60,
  width: 400,
  border: 0,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#38b597",
  },
});

const SelectSpecialize = styled("select")({
  color: "white",
  paddingRight: 30,
  paddingLeft: 20,
  height: 60,
  width: 400,
  backgroundColor: "#6c6c6c",
  borderRadius: 28,
  border: 0,
  outline: "none",
  margin: 20,
  marginTop: 10,
  marginBottom: 10,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#575757",
  },
});

const specialized = [
  {
    label: "전공 여기다 나중에 추가",
    value: "전공 여기다 나중에 추가",
  },
  {
    label: "국어국문학",
    value: "국어국문학",
  },
];

export default function SignUp() {
  return (
    <PageArea>
      <SignUpArea>
        <img className="Logo" src="flag.JPG" width="200" height="100" />
        <RelativeArea>
          <WriteArea type="text" placeholder="아이디" />
          <AddIcon icon={faUser} />
        </RelativeArea>
        <RelativeArea>
          <WriteArea type="text" placeholder="비밀번호" />
          <AddIcon icon={faLock} />
        </RelativeArea>
        <RelativeArea>
          <WriteArea type="text" placeholder="비밀번호 확인" />
          <AddIcon icon={faLock} />
        </RelativeArea>
        <RelativeArea>
          <WriteArea type="text" placeholder="E-Mail" />
          <SuwonEmail>@suwon.ac.kr</SuwonEmail>
        </RelativeArea>
        <WriteArea type="text" placeholder="이름" />
        <SelectSpecialize>
          {specialized.map((special) => (
            <option value={special.value}>{special.label}</option>
          ))}
        </SelectSpecialize>
        <WriteArea type="text" placeholder="학번" />
        <AccountButton type="submit" fullWidth variant="contained">
          가입하기
        </AccountButton>
      </SignUpArea>
    </PageArea>
  );
}
