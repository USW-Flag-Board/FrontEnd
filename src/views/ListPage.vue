<template>
  <body>
    <div class="container">
      <div class="topbox">
        <div class="namebox">자유게시판</div>
        <div class="writebox">✏️글쓰기</div>
      </div>

      <div class="midbox">
        <div class="sidebox">
          <div class="listmenu">
            <div class="topmenu">BOARD</div>
            <div class="bottommenu">
              <a v-for="a in content" :key="a">{{ a }}</a>
            </div>
          </div>
        </div>

        <div class="twobox">
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
.board {
  background-color: white;
}

body {
  background-color: rgba(47, 42, 42, 0.973);
  margin-top: 125px;
  width: 100%;
  height: 100%;
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
  justify-content: center;
  border: 2px groove rgba(19, 16, 16, 0.973);
}

.topbox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  flex-direction: row;
  width: 98vw;
  height: 18vh;
}

.namebox {
  display: flex;
  margin-top: 4vw;
  margin-left: 11vw;
  padding: 0;
  border: 0px groove white;
  flex-direction: row;
  width: 12vw;
  height: 7vh;
  font-size: 2.1vw;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  color: white;
}

.writebox {
  display: flex;
  margin-top: 6.8vw;
  margin-left: 65vw;
  padding: 0;
  border: 3px groove white;
  background-color: white;
  flex-direction: row;
  width: 5vw;
  height: 3vh;
  font-size: 0.9vw;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 12%;
}

.midbox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  flex-direction: row;
  width: 98vw;
  height: 90vh;
}

.sidebox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  width: 14vw;
  height: 89.6vh;
  background-color: rgb(53, 74, 62);
  justify-content: center;
}

.listmenu {
  display: flex;
  padding: 0;
  margin-top: 40px;
  border: 0px groove white;
  width: 10vw;
  height: 30vh;
  flex-direction: column;
}

.topmenu {
  display: flex;
  margin: 0;
  padding: 0;
  border: 0px groove white;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.57vw;
  font-weight: bold;
  width: 9.7vw;
  height: 6vh;
  color: white;
}

.bottommenu {
  display: flex;
  margin: 0;
  padding: 0;
  border: 0px groove white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: lighter;
  width: 9.7vw;
  height: 23.8vh;
  line-height: 230%;
  color: white;
}

.twobox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  width: 100vw;
  height: 89.6vh;
  flex-direction: column;
}

.listbox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  width: 87vw;
  height: 70vh;
}

.bottombox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  width: 87vw;
  height: 21vh;
}

table {
  font-size: 12px;
}
.board {
  background-color: white;
  border-collapse: collapse;
}
thead tr {
  background-color: grey;
  border: 0px;
}
tbody tr {
  text-align: center;
}
tbody tr:nth-child(2n) {
  background-color: grey;
}
</style>
