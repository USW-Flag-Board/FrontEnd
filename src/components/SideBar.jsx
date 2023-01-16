import styled from 'styled-components';

const SideBar = (props) => {
    return (
        <SideArea 
            sx={{width: props.mainWidth, 
                paddingTop: props.paddingTopMain
            }}>
            <SideBarBox 
                sx={{ backgroundColor: props.mainColor, 
                    height: props.height, 
                    borderRadius: props.borderRadius,
                }}>
                <SideBarContent sx={{
                    backgroundColor: props.subColor, 
                    width: props.subWidth,
                    borderRadius: props.borderRadius,
                    // paddingTop: props.paddingTop
                    }}>
                    <ContentsTitle>
                        {props.title}
                    </ContentsTitle>
                    <ItemBox>
                        {props.items.map((item)=>(<Item key={item}>{item}</Item>))}
                    </ItemBox>
                </SideBarContent>
            </SideBarBox>
        </SideArea>
    )
}

const SideArea = styled.div`
    boxSizing: "border-box",
    height: "100%",
`;

const SideBarBox = styled.div`
    boxSizing: "border-box",
`;

const SideBarContent = styled.div`
    width: "92%",
`;

const ContentsTitle = styled.div`
    fontSize: "23px",
    fontWeight: "700",
    padding: "3rem 0 1rem 2.5rem",
    borderBottom: "1px solid #CCCCCC"
`;

const ItemBox = styled.ul`
    display: 'flex',
    flexDirection: "column",
    padding: "1rem 0 3rem 2.5rem",
`;

const Item = styled.li`
    fontSize: "0.8rem",
    fontWeight: "700",
    padding: "0 0 1rem 0",
`;

export default SideBar;
