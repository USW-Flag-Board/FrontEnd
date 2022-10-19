<template>
  <body>
    <div class="container">
      <div class="headerbox">
        <div class="title">자유게시판</div>
        <div class="writebox">✏️글쓰기</div>
      </div>

      <div class="mainbox">
        <div class="sidebox">
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

        <div class="Contentbox">
          <div class="listbox">
            <div>
              <table class="board">
                <colgroup>
                  <col style="width: 5vw" />
                  <col style="width: 30vw" />
                  <col style="width: 5vw" />
                  <col style="width: 20vw" />
                  <col style="width: 10vw" />
                  <col style="width: 10vw" />
                  <col style="width: 20vw" />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                    <th>댓글</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="idx in WritingInformation" :key="idx">
                    <td>{{ idx.No }}</td>
                    <td>{{ idx.Header }}</td>
                    <td>{{ idx.Writer }}</td>
                    <td>{{ idx.WritingDate }}</td>
                    <td>{{ idx.WritingCount }}</td>
                    <td>{{ idx.WritingComment }}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="bottombox"></div>
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
      WritingInformation: [
        {
          No: "1",
          Header: "제목1",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },
        {
          No: "2",
          Header: "제목1",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },
        {
          No: "3",
          Header: "제목1",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },
      ],
      content: ["자유게시판", "동아리 이모저모", "사진게시판", "정보게시판"],
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
  background-color: #2c2c2c;
  margin-top: 125px;
  width: 100%;
  height: 100%;
  align-items: center;
}
/*background-color 컬러picker로 컬러변경*/
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
  justify-content: center;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/

.headerbox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 18vh;
}

.title {
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
/*게시판 헤더, headerbox랑 title은 나중에 공용 css로 만들기*/

.writebox {
  display: flex;
  width: 5vw;
  height: 3vh;
  margin-top: 6.8vw;
  margin-left: 65vw;
  padding: 0;
  background-color: white;
  flex-direction: row;
  font-size: 0.9vw;

  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 12%;
}

.mainbox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
}

.sidebox {
  width: 30vw;
  height: 100%;
  color: white;
  background-color: rgb(53, 74, 62);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
/*mainbox, sidebox 공용 css로 통합*/

/*.listmenu {
  display: flex;
  padding: 0;
  margin-top: 40px;
  border: 0px groove white;
  width: 10vw;
  height: 30vh;
  flex-direction: column;
  color: white;
}

.topmenu {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.57vw;
  font-weight: bold;
  width: 9.7vw;
  height: 6vh;
}

.bottommenu {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  font-weight: lighter;
  width: 9.7vw;
  height: 23.8vh;
  line-height: 230%;
}*/
/*이거 통합할 수 있으면 통합하기*/
.Contentbox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  flex-direction: column;
}

.listbox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 70vh;
}

.bottombox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 21vh;
  border: 2px solid white;
}
/* pagination 들어감*/
</style>
