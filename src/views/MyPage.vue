<template>
  <body>
    <div class="container">
      <div class="box1">
        <div class="myinformation">
          <div class="photo">
            <p>사진</p>
          </div>

          <div class="infobox">
            <div class="info">
              <p>이름</p>
            </div>

            <div class="info">
              <p>한 줄 소개</p>
            </div>
          </div>
        </div>

        <div class="myactivity">
          <div class="actibox1">
            <div class="acti1">
              <p>2021</p>
            </div>
            <div class="acti2">
              <p>· 알고리즘 스터디 (기초반)</p>
            </div>

            <div class="actibox2">
              <div class="acti3">
                <p>2022</p>
              </div>
              <div class="acti4">
                <p>· 알고리즘 스터디 (코테반)</p>
                <P>· FLAG-게시판 (BE)</P>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box2">
        <img src="src/assets/book.jpg" width="900px" height="1200px" />
        <div class="botombox">
          <p>잔디</p>
        </div>
      </div>
    </div>
  </body>
</template>

<script></script>

<style scoped>
body {
  background-color: rgba(19, 16, 16, 0.973);
  margin-top: 125px;
  width: 100%;
  height: 100%;
  align-items: center;
}

.menu {
  height: 60px;
  padding-bottom: 40px;
  margin-bottom: 20px;
  background: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
}

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border: 1px groove black;
}

.box1 {
  display: flex;
  flex-direction: column;
  width: 42vw;
  height: 113vh;
  border: 1px groove black;
  margin: 0;
  padding: 0;
}

.box2 {
  display: flex;
  flex-direction: row;
  width: 55vw;
  height: 113vh;
  border: 1px groove black;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: flex-end;
}

.myinformation {
  display: flex;
  width: 42vw;
  height: 57vh;
  border: 1px groove rgb(62, 61, 61);
  margin: 0px;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2px;
  margin-left: 2px;
  background-color: rgb(62, 61, 61);
}

.titlebox {
  width: 40vw;
  height: 15vh;
  background-color: black;
  color: white;
  border: 2px groove white;
}

.photo {
  width: 10vw;
  height: 10vw;
  background-color: rgb(62, 61, 61);
  color: white;
  border: 2px groove gray;
  font-size: 2.8em;
  border-radius: 70%;
  text-align: center;
}

.ph {
  width: 5vw;
  height: 5vh;
}

.infobox {
  width: 20vw;
  height: 20vh;
  background-color: rgb(62, 61, 61);
  color: white;
  border: 1px groove gray;
}

.info {
  width: 20vw;
  height: 9vh;
  background-color: rgb(62, 61, 61);
  color: white;
  border: 3px groove gray;
  align-content: space-evenly;
  font-size: 15px;
}

.myactivity {
  display: flex;
  width: 42vw;
  height: 55vh;
  border: 1px groove rgb(46, 46, 46);
  background-color: rgb(46, 46, 46);
  margin: 0;
  padding: 0;
  margin-left: 0.1vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.actibox1 {
  width: 13vw;
  height: 5.5vw;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 2px groove gray;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.actibox2 {
  width: 13vw;
  height: 6vw;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 2px groove gray;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.acti1 {
  width: 13vw;
  height: 1.5vw;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 2px groove white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10px;
}

.acti2 {
  width: 13vw;
  height: 4vw;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 2px groove white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10px;
}
.acti3 {
  width: 13vw;
  height: 1.5vw;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 2px groove white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10px;
}

.acti4 {
  width: 13vw;
  height: 4.5vw;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 2px groove white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10px;
}

.ground {
  display: flex;
  width: 46vw;
  height: 122vh;
  border: 2px groove black;
  margin: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.botombox {
  width: 45vw;
  height: 17vh;
  border: 2px groove gray;
  justify-content: center;
  align-items: flex-end;
  margin-right: 5px;
  margin-left: 5px;
  color: white;
  font-size: 23px;
}
</style>
