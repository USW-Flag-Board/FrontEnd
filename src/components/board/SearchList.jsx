import styled from "styled-components";

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

const ListThemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 18%;

  &:nth-of-type(odd) {
    background-color: #313131;
  }
`;

const ItemBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.div`
  width: 10%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  &:nth-of-type(1) {
    width: 5%;
    height: 50%;
    background-color: white;
    border-radius: 15px;
    color: black;
    margin-left: 10px;
  }
  &:nth-of-type(2) {
    width: 31%;
  }
  &:nth-of-type(6) {
    padding-right: 24%;
  }
`;

export default SearchList;
