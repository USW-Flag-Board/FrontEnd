<script setup>
import "../css/search_table.css";
// import "../css/search.css";
// import "./css/menubar.css";
// import "./css/search.css";
</script>
<template>
  <body>
    <div class="container">
      <div class="headerbox">
        <h1>검색결과</h1>
      </div>

      <div class="mainbox">
        <div class="sidebox">
          <h2>'조던1'</h2>
          <p>자유게시판</p>
          <p>사진게시판</p>
          <p>유저</p>
        </div>

        <div class="bulletinboard">
          <div class="board1">
            <div class="titlebox">
              <h4>자유게시판</h4>
              <div class="contentlist">
                <!-- 게시판 list 들어감-->
                <div class="listbox">
                  <ul>
                    <li>
                      <span class="number">1072</span>
                      게시글 현재 번호
                      <a href="#" class="detail">
                        <span class="title">조던1조던1</span>
                        <span class="writer">준표킴</span>
                        <span class="w_day">2022.08.03</span>
                        게시글 업로드 시간
                        <span class="view">1234</span>
                        <span class="comment">100</span>
                      </a>
                    </li>

                    <li>
                      <span class="number">1071</span>
                      게시글 현재 번호
                      <a href="#" class="detail">
                        <span class="title">조던1조던1</span>
                        <span class="writer">준표킴</span>
                        <span class="w_day">2022.08.03</span>
                        게시글 업로드 시간
                        <span class="view">1234</span>
                        <span class="comment">100</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="board1">
            <div class="titlebox">
              <h4>사진게시판</h4>
              <div class="contentlist">
                <!-- 게시판 list 들어감-->
              </div>
            </div>
          </div>

          <div class="bottom">
            <div class="bottomcontent">
              <div class="titlebox">
                <h4>유저</h4>
              </div>
            </div>
            <div class="bottomcontent">
              <div class="titlebox">
                <h4>인기글</h4>
                <div class="contentbox">
                  <div class="selected_c_head">
                    <h6>에어조던11 브레드 미드 2019</h6>
                    <div class="selected_content">
                      <span
                        >조던1을 왜 검색어로 만들어서 잘 모르는데 내용을
                        적어야하니 아주 막막하다. 에어조던11 브레드 미드 2019
                        일단 아무말 열심히 따라 써본다.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
body {
  background-color: rgba(19, 16, 16, 0.973);
  margin-top: 125px;
  width: 100%;
  height: 100%;
  /* margin: 0;
  padding: 0; */
  align-items: center;
}

a {
  text-decoration-line: none;
}

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border: 2px groove rgba(19, 16, 16, 0.973);
}

/*.box {
  display: flex;
  flex-direction: column;
  border: 2px groove white;
  margin: 0;
  padding: 0;
}*/

.headerbox {
  border: 2px groove white;
  width: 100%;
  height: 15vh;
  padding-left: 20vw;
  color: white;
}

.mainbox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: 2px groove red;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
}
.sidebox {
  width: 20vw;
  height: 110vh;
  color: white;
  background-color: #363636;
  border: 2px groove #ff99cc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.bulletinboard {
  margin: 0;
  width: 80vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  border: 2px groove yellow;
}
.board1 {
  margin: 0;
  width: 100%;
  height: 40vh;
  border: 2px groove greenyellow;
  display: flex;
}
.titlebox {
  margin: 0;
  width: 100%;
  height: 8vh;
  border: 2px groove blueviolet;
  color: white;
}
/*titlebox는 게시판에서 보여주는 내용의 title만 들어감*/
.contentlist {
  margin: 0;
  width: 100%;
  height: 28vh;
  background-color: #c2dbdb;
}

/*목록 list 전체*/
.bottom {
  margin: 0;
  width: 100%;
  height: 30vh;
  display: flex;
  border: 2px groove olivedrab;
}
.bottomcontent {
  margin: 0;
  width: 50vw;
  height: 30vh;
  display: flex;
  border: 2px groove #ccffff;
}
.contentbox {
  margin: 0;
  width: 100%;
  height: 21vh;
  border: 2px groove yellow;
}
</style>
