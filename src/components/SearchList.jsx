import React from "react";
import { styled } from "@mui/system";

const SearchList = (props) => {
  return (
    
    <ListThemBox>
      <ItemBox>
        {props.themList.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ItemBox>
    </ListThemBox>
  );
};

export default SearchList;

const ListThemBox = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height: "18%",
  
  "&:nth-of-type(odd)": { backgroundColor: "#313131" },
});


const ItemBox = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ListItem = styled("div")({
  width: "10%",
  height: "100%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.8rem",
  fontWeight: "600",
  "&:nth-of-type(1)": {
    width: "5%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: "15px",
    color: "black",
    marginLeft: "10px",
  },
  "&:nth-of-type(2)": { width: "31%" },
  "&:nth-of-type(6)": { paddingRight: "24%" },
});
