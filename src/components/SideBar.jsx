import styled from "styled-components";

const SideBar = (props) => {
  return (
    <SideArea
      style={{width: props.mainWidth, paddingTop: props.paddingTopMain}}
    >
      <SideBarBox
        style={{
          backgroundColor: props.mainColor,
          height: props.height,
          borderRadius: props.borderRadius,
        }}
      >
        <SideBarContent
          style={{
            backgroundColor: props.subColor,
            width: props.subWidth,
            borderRadius: props.borderRadius,
            // paddingTop: props.paddingTop
          }}
        >
          <ContentsTitle>{props.title}</ContentsTitle>
          <ItemBox>
            {props.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ItemBox>
        </SideBarContent>
      </SideBarBox>
    </SideArea>
  );
};

const SideArea = styled.div`
  box-sizing: border-box;
  height: 100%;
`;

const SideBarBox = styled.div`
  box-sizing: border-box;
`;

const SideBarContent = styled.div`
  width: 92%;
`;

const ContentsTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  padding: 3rem 0px 1rem 2.5rem;
  border-bottom: 1px solid #cccccc;
`;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0px 3rem 2.5rem;
`;

const Item = styled.li`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0px 0px 1rem 0px;
`;

export default SideBar;
