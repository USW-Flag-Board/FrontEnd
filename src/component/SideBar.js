import React from 'react';
import { styled } from '@mui/system';

const SideArea = styled('div')({
    width: "20%",
    height: "100%",
});

const SideBarBox = styled('div')({
    backgroundColor: "#868e96",
    height: "100%",
    width: "100%",
});

export default function SideBar() {
    return (
        <SideArea>
            <SideBarBox></SideBarBox>
        </SideArea>
    )
}
