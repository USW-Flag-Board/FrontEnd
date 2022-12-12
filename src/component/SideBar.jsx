import React from 'react';
import { styled } from '@mui/system';

const SideArea = styled('div')({
    height: "100%",
});

const SideBarBox = styled('div')({
    boxSizing: "border-box",
});

const SideBarContent = styled('div')({
    width: "92%",
});

const ContentsTitle = styled('div')({
    fontSize: "23px",
    fontWeight: "700",
    padding: "3rem 0 1rem 2.5rem",
});

const ItemBox = styled('ul')({
    display: 'flex',
    flexDirection: "column",
    padding: "0 0 3rem 2.5rem",
});

const Item = styled('li')({
    fontSize: "0.8rem",
    fontWeight: "700",
    padding: "0 0 1rem 0",
});

const SideBar = (props) => {
    return (
        <SideArea 
            sx={{width: props.mainWidth, 
                paddingTop: props.paddingTop
            }}>
            <SideBarBox 
                sx={{ backgroundColor: props.mainColor, 
                    height: props.height, 
                    borderRadius: props.borderRadius,
                }}>
                    
                <SideBarContent sx={{backgroundColor: props.subColor, 
                    width: props.subWidth,}}>
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

export default SideBar;
