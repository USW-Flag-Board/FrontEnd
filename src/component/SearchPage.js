import React, { useState } from "react";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import { height, textAlign } from "@mui/system";


function PostList({list}){
  return (
    <Box
    sx={{
      borderRadius: '5px',
      margin: '10px',
      padding: '5px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <span>{list.num}</span>
      <span>{list.title}</span>
      <span>{list.name}</span>
      <span>{list.day}</span>
      <span>{list.views}</span>
      <span>{list.comment}</span>
    </Box>
  );
}

function PostNumber(){
  return (
    <Box
    sx={{
      backgroundColor: "white",
      color: "black",
      textAlign: "center",
      width:60,
      higeht:18,
      borderRadius:"20px",
    
    }}>
      <p>123</p>
    </Box>
  );
}

function User(){
  return (
    <Box
    sx={{
      height:"30vh",
      color: "white",
    }}>
      <Box
      sx={{
        height:"40px",
        width:"100",
        verticalAlign: "middle",
        color:"white",
      
        
      }}>
        <h3>유저 (4)</h3>
      </Box>
        <Box
        sx={{
          width:"100",
          height:"100",
          display:"flex",
          flexWrap: "wrap",
          marginRight:'5px',
          marginLeft:'5px',
          marginTop:'20px', 
          justifyContent: "spacearound",
          padding:"5",
       
        }}>
          <SearchUser></SearchUser>
          <SearchUser></SearchUser>
          <SearchUser></SearchUser>
          <SearchUser></SearchUser>
          <SearchUser></SearchUser>
          <SearchUser></SearchUser>
        </Box>
    </Box>
  );
}

function SearchPost(){
  return (
    <Box
    sx={{

      display: "flex",
      flexDirection: "column",
      paddingLeft:2,
      paddingTop:3, 
      height:"50vh",

    }}>
      <Box
      sx={{
        height:"40px",
        verticalAlign: "middle",
        color:"white",
        
      }}>
        <h4>자유게시판(3)</h4>
      </Box>
      <Box
      sx={{
        height:'100vh',
        width:'100',
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
        paddingLeft:2,
      }}>
        <Lista></Lista>
      </Box>

      
    </Box>
    
  );
}

function Lista(){
  return(
    <Box
    sx={{
      color:"white",
      marginRight:"20px",
      

    }}>
      <table>
       <span>
       <tr>
            <td><PostNumber></PostNumber></td>
            <td>테스트 입니다</td>
            <td>2020.12.22</td>
            <td>1234</td>
            <td>1234</td>
        </tr>
      </span>
      </table>
    </Box>

  );
}

function SearchUser(){
  return(
  <Box
  sx={{
    width:"10vw",
    height:"50px",
    backgroundColor:"#3b3b3b",
    color:"white",
    margin:"5px",
    borderRadius:"8px",
    textAlign:"center",

  }}>
    <p>test</p>
  </Box>
  );
}

function PopularPosts() {
  return( 
    <Box
    sx={{

      height:"30vh",

    }}>
      <Box
      sx={{
        height:"40px",
        color:"white",
        
      }}>
        <h3>'조던' 인기글</h3>
        
      </Box>
      <Box
        sx={{
          width:"100",
          height:"100",
          display:"flex",
          flexWrap: "wrap",
          justifyContent: "spacearound",
          padding:"5",
       
        }}>
          <PopularList></PopularList>
          <PopularList></PopularList>
        </Box>
    </Box>


  );

}

function PopularList(){
  return(
    <Box
    sx={{
      marginTop:'20px',
      width:"285px",
      height:"120px",
      backgroundColor:"#3b3b3b",
      color:"white",
      marginRight:'5px',
      marginLeft:'5px',
      color:"white",
      borderRadius:"8px",
  
    }}>
      
      <Box
      sx={{
        margin:0,
        padding:0,
        border: "1px solid red",
        textAlign:"center",
      }}>
          <p>asdasdfsafsafasfasfasfafasfasf
             asdasdfsafsafasfasfasfafasfasf
             asdasdfsafsafasfasfasfafasfasf
             asdasdfsafsafasfasfasfafasfasf
          </p>
      </Box>
    </Box>
    );
}

function BottomBox(){
  return(
    
      <Box
    sx={{

      display: "flex",
      flexDirection: "row",
      paddingLeft:2,
      paddingTop:3,
      height:"43vh",
      width:"50",

    }}>
      
      <Box 
      sx={{
      
        marginRight:"15px",
        height:"100",
        width:"35vw",
    
      }}>
        <User> 
          
        </User>
        
      </Box>
      <Box 
      sx={{
        height:"35vh",
        width:"44vw",
       
      }}>
        <PopularPosts></PopularPosts>
      </Box>
      
    </Box>
    

    
  );
}

function SideBar() {
  return(
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
     
      width:'180px', 
      higeht:'100',
      textAlign: 'center',
      color: 'white',



    }}>
      <h2>조던</h2>
      <h4>자유게시판</h4>
      <h4>자유게시판</h4>
      <h4>자유게시판</h4>
    </Box>
  );
}
export const DuBoardList = [
  {
    num:1, title:"테스트 입니다.", name:"이수빈", day:"2022.11.11", views:123, comment: 123
  },
];


function LayoutPage() {


  return (
    <Grid container height="100" width="100">
      
      <Grid height={"150px"} width="100%" backgroundColor={"lightgray"} position="fixed" xs sm={12}>
        header 
      </Grid>
      <Grid height={"20vh"} paddingLeft={"15vw"} marginTop='22vh' backgroundColor={"#2C2C2C"} color="white" xs sm={12}>
        <br></br>
        <br></br>
      
        <h1>검색결과</h1>
      </Grid>
      
        <Grid width="180px" height="100" color="white" backgroundColor={"#363636"}>
          <SideBar></SideBar>
        </Grid>
   

      <Grid height = "168vh" backgroundColor={"#2C2C2C"} xs={12} sm>
      
        <SearchPost></SearchPost>
        <SearchPost></SearchPost>
        <BottomBox></BottomBox>
       
        
        
      </Grid>

      
      
    </Grid>
  );
}

export default LayoutPage;

