<template>
  <body>
    <div class="Container">
      <div class="HeaderBox">
        <div class="Header_Title">글쓰기</div>
        <div class="button">
          <p><a href="#">등록</a></p>
        </div>
      </div>

      <div class="MainBox">
        <div class="SideBox">
          <h2>BOARD</h2>
          <p>자유게시판</p>
          <p>동아리 이모저모</p>
          <p>사진게시판</p>
          <p>정보게시판</p>
        </div>

        <div class="ContentBox">
          <div class="ChoiceBox">
            <p>게시판을 선택해주세요.</p>
          </div>
          <div class="TitleBox">
            <p style="color:grey; ">제목을 입력해주세요.</p>
          </div>
          <div class="FunctionBox">
            <p style="color:black; ">기능</p>
          </div>
          <div class="SubBox">
            <p style="color:grey; ">내용을 입력하세요.</p>
          </div> 
          <div class="TagBox">
            <p style="color:grey; ">#태그입력 (최대 10개)</p>
          </div>
        </div>
      </div>





    </div>
  </body>
</template>

<script>

</script>

<style scoped>
body {
  margin: 0;
  margin-top: 125px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #2c2c2c;
  
}
/*background-color 컬러picker로 컬러변경*/
a {
  text-decoration-line: none;
}

/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.Container {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
.HeaderBox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 18vh;
}

.Header_Title {
  display: flex;
  margin-top: 4vw;
  margin-left: 16.3vw;
  padding: 0;
  flex-direction: row;
  width: 12vw;
  height: 7vh;
  font-size: 2.1vw;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  color: white;
}


.button {
  display: flex;
  width: 70px;
  height: 25px;
  margin-top: 6.8vw;
  margin-left: 64.3vw;
  padding: 0;
  background-color: white;
  flex-direction: row;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 10px;
  
}

.MainBox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
}


.SideBox {
  width: 20vw;
  height: 100%;
  color: white;
  background-color: rgb(108, 108, 108);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.65vw;
}
/*MainBox, SideBox 공용 css로 통합*/

.ContentBox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2.3vw;
  
}
 
.ChoiceBox {
  width: 18vw;
  height: 6vh;
  margin: 10px;
  display: flex;
  background-color: #404040;
  color: white;
  font-size: 15px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid white
}

.TitleBox {
  width: 78vw;
  height: 9vh;
  margin: 10px;
  display: flex;
  background-color: #404040;
  color: white;
  font-size: 15px;
  justify-content: flex-start;
  align-items: center;
}

.FunctionBox {
  width: 78vw;
  height: 16vh;
  margin: 10px;
  display: flex;
  background-color: white;
  color: white;
  font-size: 15px;
  justify-content: flex-start;
  align-items: flex-start;

}


.SubBox {
  width: 78vw;
  height: 45vh;
  margin: 10px;
  display: flex;
  background-color: #404040;
  color: white;
  font-size: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}

.TagBox {
  width: 78vw;
  height: 9vh;
  margin: 10px;
  display: flex;
  background-color: #404040;
  color: white;
  font-size: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}

</style>