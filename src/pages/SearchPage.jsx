import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar";
import SearchList from "../components/SearchList";

const searchItem = ["자유게시판(2)", "동아리 이모저모(0)"];
const searchContent = ["'조던'"];
const allUser = ["조던1", "조던2", "조던 범고래", "조던던", "조던일걸", "조던아님" ];
const itemContents = [
    "1",
    "조던.",
    "문희조",
    "2022.08.03",
    "1234",
    "123",
    
  ];

const SearchPage = () => {
    return (
      <>
        <Main>
            <SearchResults>
                <br></br>
                {searchContent} 검색결과
            </SearchResults>
            <Content>
            <SideBar title={searchContent}
                    mainColor="#4B4B4B"
                    subColor="#3C3C3C"
                    mainWidth="210px"
                    subWidth="90%"
                    items={searchItem}
                    paddingTop="0"
                    borderRadius="0 15px 15px 0"/>
                <MainPost>
                <SearchPost/>
                <SearchPost/>
                <BotomBox>
                      <NormalBox>
                        <User/>
                      </NormalBox>
                      <NormalBox>
                        <PopularPosts/>
                      </NormalBox>
                    </BotomBox>
                    
                </MainPost>
            </Content>
        </Main>
      </>
    )
}

        <Content>
          <SideBar
            title={searchContent}
            mainColor="#4B4B4B"
            subColor="#3C3C3C"
            mainWidth="210px"
            subWidth="90%"
            items={searchItem}
            paddingTop="0"
            borderRadius="0 15px 15px 0"
          />
          <MainPost>
            <SearchPost />
            <SearchPost />
            <BotomBox>
              <NormalBox>
                <User />
              </NormalBox>
              <NormalBox>
                <PopularPosts />
              </NormalBox>
            </BotomBox>
          </MainPost>
        </Content>
      </Main>
    </>
  );
};

const PopularPosts = () => {
  return (
    <Box
      sx={{
        height:"30vh",
      }}>
        <Box
        sx={{
          height:"40px",
          color:"white",
          
        }}>
          <TitleBox>{searchContent} 인기글</TitleBox>
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
          <PopularBox>
            <PopularList></PopularList>
            <PopularList></PopularList>
          </PopularBox>
          </Box>
      </Box>
    );
  }
  const NameField = styled('div')({
    textAlign: "right",
    paddingRight: "1vw",
})

const PopularList = () =>{
    return(
      <Box
      sx={{
        width:"auto",
        height:"auto",
        backgroundColor:"#3b3b3b",
        color:"white",
        marginRight:'5px',
        marginLeft:'5px',
        borderRadius:"8px",
      }}>
        <Box
        sx={{
          paddingLeft: "5px",
          lineHeight: "30px",
        }}>
            <h3>조던뭐시기</h3>
            <p>
              abcdefghijkabcdefghijkabcdefghijk
              abcdefghijkabcdefghijkabcdefghijk
              </p>
            <NameField>
              <h4>이수빈</h4>
            </NameField>
        </Box>
      </Box>
    </Box>
  );
};

  const User = () => {
    return (
        <Box>
            <TitleBox>
                유저
            </TitleBox>
            <Box
                sx={{
                width:"35vw",
                height:"100",
                display:"flex",
                flexWrap: "wrap",
                marginRight:'5px',
                marginLeft:'5px',
                paddingLeft:'2',
                justifyContent: "spacearound",       
                
              }}>
              {allUser.map((i) => (
                <SearchUser>
                    <img className="logo" 
                      src="img/logo.JPG" 
                      style={{height: "70%", width: "30%", margin: "10px", borderRadius:"7px",}}/>
                      {i}
                </SearchUser>
              ))}
              </Box>
          </Box>
        );
  }

  const SearchPost = () =>{

const SearchPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marLeft: 2,
        paddingTop: 3,
        height: "46vh",
        marginBottom: "3vh",
      }}
    >
      <TitleBox>{searchItem[0]}</TitleBox>
      <ListBox>
        <SearchList themList={itemContents} />
        <SearchList themList={itemContents} />
        <SearchList themList={itemContents} />
        <SearchList themList={itemContents} />
        <SearchList themList={itemContents} />
      </ListBox>
    </Box>
  );
};

const SearchUser = styled("div")({
  width: "10vw",
  height: "50px",
  backgroundColor: "#3b3b3b",
  color: "white",
  margin: "5px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

const Main = styled("div")({
  display: "flex",
  height: "100",
  width: "100vw",
  flexDirection: "column",
});

const SearchResults = styled("div")({
  height: "100px",
  width: "70vw",
  paddingLeft: "15vw",
  color: "white",
  fontSize: "2.5vw",
  fontWeight: "700",
});

const Content = styled("div")({
  width: "100vw",
  display: "flex",
});

const NormalBox = styled("div")({
  width: "auto",
  height: "auto",
  paddingLeft: "1vw",
  display: "flex",
  flexDirection: "column",
});

const MainPost = styled("div")({
  width: "100vw",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const ListBox = styled("div")({
  height: "100vh",
  width: "80vw",
  marginLeft: "2vw",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "column",
  paddingLeft: 2,
});

const TitleBox = styled("div")({
  marginLeft: "2vw",
  height: "40px",
  verticalAlign: "middle",
  color: "white",
  fontWeight: "bold",
});

const PopularBox = styled("div")({
  height: "150px",
  width: "45vw",
  display: "flex",
});

const BotomBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  paddingTop: 3,
  height: "43vh",
  width: "50",
  marginTop: "10vh",
});

export default SearchPage;
