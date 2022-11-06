<template>
    <body>
      <div class="Container">
       <div class="HeaderBox">
        <div class="Header_Title">자유게시판</div>
      </div>

      <div class="MainBox">
        <div class="SideBox">
          <h2>BOARD</h2>
          <p>자유게시판</p>
          <p>동아리 이모저모</p>
          <p>사진게시판</p>
          <p>정보게시판</p>
          <!-- <div class="listmenu">
            <div class="topmenu">BOARD</div>
            <div class="bottommenu">
              <a v-for="a in content" :key="a">{{ a }}</a>
            </div>
          </div> -->
        </div>

        <div class="ContentBox">
            <div class="BoardBox">
                <div class="TitleBox">
                  <div class="NumberBox">1073</div>
                  <div class="Writing_Title">비전공자의 '네카라쿠배' 취업 도전기</div>
                  <div class="NameBox">문희조</div>
                  <div class="DateBox">2022.08.04</div>
                </div>

                <div class="WritingBox">
                  <div class="Name">글쓴이 문희조</div>
                  <div class="Line">
                    <div class="Title">비공전자의 '네카라쿠배' 취업 도전기</div>
                    <div class="Date">2022.08.04 21:44</div>
                  </div>
                  <div class="Content">후다닥 달려온 당신 공부하세요ㅎㅎ</div>
                </div>

                <div class="BottomBox"></div>

            </div>
        </div>



       </div>
      </div>
    </body>
</template>

<script></script>

<style scoped>
body {
  margin: 0;
  margin-top: 125px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #2c2c2c;
}
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
  margin-left: 11vw;
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
/*게시판 헤더, headerbox랑 TitleBox은 나중에 공용 css로 만들기*/
.MainBox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
}
.SideBox {
  width: 25vw;
  height: 100%;
  color: white;
  background-color: rgb(39, 55, 82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
/*MainBox, SideBox 공용 css로 통합*/
.ContentBox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  flex-direction: column;
}
.BoardBox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 70vh;
  flex-direction: column;
}
.TitleBox{
  display: flex;
  background-color: rgb(77, 72, 72);
  margin-top: 1.2vw;
  margin-left: 2.8vw;
  padding: 0;
  width: 84.2vw;
  height: 6.5vh;
}
.NumberBox{
  display: flex;
  background-color: white;
  border-radius: 32%;
  margin-left: 1vw;
  padding: 0;
  width: 4.2vw;
  height: 4.1vh;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}
.Writing_Title {
  display: flex;
  margin-left: 0.8vw;
  padding: 0;
  width: 18vw;
  height: 4.1vh;
  font-size: 17px;
  color: white;
  align-items: center;
}
.NameBox {
  display: flex;
  margin-left: 10vw;
  padding: 0;
  width: 4vw;
  height: 4.1vh;
  font-size: 16px;
  color: white;
  align-items: center;
}
.DateBox {
  display: flex;
  margin-left: 2vw;
  padding: 0;
  width: 8vw;
  height: 4.1vh;
  font-size: 16px;
  color: white;
  align-items: center;
}
.WritingBox{
  display: flex;
  margin-top: 0.5vw;
  margin-left: 2.8vw;
  padding: 0;
  width: 84.2vw;
  height: 60vh;
  flex-direction: column;
}
.Name {
  display: flex;
  margin: 0;
  padding: 0;
  width: 5vw;
  height: 3vh;
  font-size: 13px;
  color: white;
  align-items: center;
}
.Line {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 5vh;
}
.Title {
  display: flex;
  margin: 0;
  padding: 0;
  width: 40%;
  height: 5vh;
  font-size: 25px;
  font-weight: bold;
  color: white;
}
.Date {
  display: flex;
  margin: 0;
  padding: 0;
  width: 15vw;
  height: 5vh;
  font-size: 13px;
  color: rgb(148, 141, 141);
  align-items: center;
}
.Content {
  display: flex;
  padding: 0;
  width: 100%;
  height: 26.2vh;
  font-size: 17px;
  color: white;
}
.BottomBox{
  display: flex;
  background-color: rgb(77, 72, 72);
  border-radius: 8%;
  margin-top: 1vw;
  margin-left: 2.8vw;
  margin-right: 2.8vw;
  padding: 0;
  width: 81.6vw;
  height: 45vh;
  align-items: center;
}
</style>