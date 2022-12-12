import React from 'react'
import { styled } from '@mui/system';
import SideBar from '../component/SideBar';


const HomeArea = styled('div')({
    boxSizing: "border-box",
    height: "82vh",
    display: "flex",
});

const MyActivity = styled('div')({
    boxSizing: "border-box",
    width: "50%",
    height: "100%",
    paddingLeft: "30px"
});

const FlagContents = styled('ul')({
    boxSizing: "border-box",
    display: "flex",
    listStyle:"none",
    width: "100%",
    marginBottom: "2px",
});

const FlagContent = styled('li')({
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    width: "25%",
    padding: "1px",
});

const BookImgBox = styled('div')({
    
    height: "45%",
    paddingBottom: "30px",
});

const GrassArea = styled('div')({
    width: "95%",
    height: "25%",
    marginTop: "10px",
    backgroundColor: "black",
    display: 'flex'
});

const GrassBox = styled('div')({
    
    width: "33.3%",
    margin: "5px",
    backgroundColor: "white"
});

const FeedArea = styled('div')({
    width: "30%",
});

const FeedBox = styled('div')({
    width: "90%",
    height: "60%",
    marginTop: "30px",
});

const FeedItem = styled('div')({
    backgroundColor: "white",
    margin: "10px",
    height: "30%",
    borderRadius: "30px"
});

const NoticeArea = styled('div')({
    display: "flex",
    height: "20%",
    width: "90%",
});

const NoticeBox = styled('div')({
    width: "50%",
    margin: "10px",
});

const UserBox = styled('div')({
    width: "50%",
    margin: "10px",
});



const Home = () => {
    const contents = [
        {title: "STUDY", content: ["ALGORITHM", "WEB-BACKEND"]}, 
        {title: "PROJECT", content: ["FLAG-게시판"]}
    ];
    const homeItem = ["USER","전체 멤버 보기", "랭킹?", "관리자 페이지"];
    return (
        <>
            <HomeArea>
                <MyActivity>
                    <h1>MY ACTIBITY</h1>
                    <FlagContents>
                        {contents.map((item)=>(<FlagContent key={item.title}><h4 style={{color: "white", paddingBottom: "20px"}}>{item.title}</h4></FlagContent>))}
                    </FlagContents>
                    <BookImgBox>
                        <img src="img/home-book.jpg" alt="blog-logo" style={{width: "95%",height: "100%"}}/>
                    </BookImgBox>
                    <h1>STUDY_WEB-BACKEND</h1>
                    <GrassArea>
                        <GrassBox/>
                        <GrassBox/>
                        <GrassBox/>
                    </GrassArea>
                </MyActivity>
                <FeedArea>
                    <h1>FEED</h1>
                    <FeedBox>
                        <FeedItem/>
                        <FeedItem/>
                        <FeedItem/>
                    </FeedBox>
                    <NoticeArea>
                        <NoticeBox>
                            <h4>#NOTICE</h4>
                            <p>할말은 없지만 공지입니다.</p>
                        </NoticeBox>
                        <UserBox>
                            <h4>USER</h4>
                            <p>강지은, 김준표, 문희조, 이수빈, 어준혁, 임소미, 한지석</p>
                        </UserBox>
                    </NoticeArea>
                </FeedArea>
                <SideBar mainColor="#868e96" 
                    mainWidth="20%" 
                    subWidth="100%" 
                    items={homeItem} 
                    title="FLAG" 
                    paddingTop="3.5vh" 
                    height="100%"/>
            </HomeArea>
        </>
    )
}

export default Home;
