import React from 'react';
import { styled } from '@mui/system';

const SideArea = styled('div')({
    height: "100%",
});

const SideBarBox = styled('div')({
    height: "100%",
    width: "100%",
});

const ContentsTitle = styled('div')({
    height: "5%",
    width: "100%",
    boxSizing: "border-box",
    padding: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    fontWeight: "700",
});

const ItemBox = styled('ul')({
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
});

const Item = styled('li')({
    padding: "4%",
});



const SideBar = (props) => {
    return (
        <SideArea sx={{width: props.width, paddingTop: props.paddingTop}}>
            <SideBarBox sx={{backgroundColor: props.color}}>
                <ContentsTitle>
                    {props.title}
                </ContentsTitle>
                <ItemBox>
                    {props.items.map((item)=>(<Item key={item}>{item}</Item>))}
                </ItemBox>
            </SideBarBox>
        </SideArea>
    )
}

export default SideBar;
