<template>
  <body>
    <header>
      <img src="/src/assets/logo.JPG" width="300px" height="100px" />
      <ul>
        <button class="dropbtn"><h3>FLAG</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>

        <button class="dropbtn"><h3>BORDER</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>
        <button class="dropbtn"><h3>ACTIVITY</h3></button>
        <div class="dropdown-content">
          <a href="#">STUDY</a>
          <a href="#">PROJECT</a>
        </div>
        <button class="dropbtn"><h3>NOTICE</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>
        <li>
          <div class="search-bar">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input class="search-bar__input" type="search" placeholder="검색" />
          </div>
        </li>
      </ul>
    </header>

    <div class="container">
      <div class="topbox"></div>

      <div class="midbox">
        <div class="sidebox">
          <div class="listmenu"></div>
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

header {
  height: 65px;
  padding-bottom: 40px;
  margin-bottom: 20px;
  background: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
}

ul {
  display: flex;
}
li {
  margin: 30px;
  list-style-type: none;
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
  background-color: rgb(13, 47, 26);
  justify-content: center;
}

.listmenu {
  display: flex;
  padding: 0;
  margin-top: 55px;
  border: 3px groove white;
  width: 10vw;
  height: 30vh;
  justify-content: space-evenly;
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
