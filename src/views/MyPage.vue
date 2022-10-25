<template>
  <body>
    <div class="Container">
      <div class="LeftBox">
        <div class="InformationBox">
          <div class="photo">사진</div>
          <div class="InfoBox">
            <div class="info">
              <h2>이름</h2>
            </div>
            <div class="info">
              <p>한 줄 소개</p>
            </div>
          </div>
        </div>
        <div class="UserActivity">
          <div class="ActivityBox">
            <div class="ActivityHead">2021</div>
            <!-- 이자리는 select박스로 입력받으면 될것 -->
            <div class="ContentBox">알고리즘 스터디 (기초반)</div>
            <div class="ActivityHead">2022</div>
            <div class="ContentBox">· 알고리즘 스터디 (코테반) · FLAG-게시판 (BE)</div>
            <!-- 이부분은 나중에 사용자에게 입력받아 바인딩하는 부분으로 기능 구현하면서 개행처리로 하면 될듯합니다.  -->
          </div>
        </div>
      </div>

      <div class="RightBox">
        <div class="grassbox">
          <div class="title">
            <p>GRASS</p>
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
a {
  text-decoration-line: none;
}

.Container {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

.LeftBox {
  margin: 0;
  padding: 0;
  width: 49vw;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.InformationBox {
  margin: 0px;
  height: 57vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #2c2c2c;
}
.photo {
  display: inline-block;
  width: 15vw;
  height: 15vw;
  background-color: white;
  color: rgb(0, 0, 0);
  font-size: 2.8em;
  border-radius: 50%;
  text-align: center;
}
.InfoBox {
  width: 20vw;
  height: 20vh;
  color: white;
}

.info {
  width: 100%;
  height: 9vh;
  color: white;
  align-content: space-evenly;
  font-size: 15px;
}
.UserActivity {
  margin: 0;
  padding: 0;
  height: 55vh;
  display: flex;
  background-color: #232323;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ActivityBox {
  margin: 0;
  padding: 0;
  width: 15vw;
  height: 45vh;
  color: white;
  justify-content: center;
  align-items: center;
}
.ActivityHead {
  width: 100%;
  height: 40px;
  font-weight: 500;
  color: white;
}

.ContentBox {
  width: 100%;
  height: 10vh;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10px;
}

.RightBox {
  margin: 0;
  padding: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url("../assets/books.png");
  background-repeat: no-repeat;
}

.grassbox {
  width: 46vw;
  height: 28vh;
  margin: 10px;
  display: flex;
  background-color: #000000;
}
.title {
  width: 100%;
  height: 7vh;
  font-weight: 500;
  background-color: #2c2c2c;
  color: white;
}

</style>
