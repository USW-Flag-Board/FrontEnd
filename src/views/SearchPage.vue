<template>
  <body>
    <header>
      <img src="src/assets/logo.JPG" width="300px" height="100px" />
      <ul>
        <button class="dropbtn"><h3>FLAG</h3></button>
        <div class="dropdown-content"></div>

        <button class="dropbtn"><h3>BORDER</h3></button>
        <div class="dropdown-content"></div>
        <div class="dropdown">
          <button class="dropbtn"><h3>ACTIVITY</h3></button>
          <div class="dropdown-content">
            <a href="#"><h3>STUDY</h3></a>
            <a href="#"><h3>PROJECT</h3></a>
          </div>
        </div>
        <button class="dropbtn"><h3>NOTICE</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>
        <li>
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input class="search-bar__input" type="search" placeholder="검색" />
          </div>
        </li>
      </ul>
    </header>

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
          <Table></Table>
          <Table></Table>
      
          <div class="board1">
            <div class="titlebox">
              <h3>사진게시판</h3>
            </div> 
          </div>
          <div class="bottomcontent">
            <div class="userbox">
              <div class="titlebox">
                <h3>유저()</h3>
              </div>
            </div>
            <div class="popular">
              <div class="titlebox">
                <h3>" "인기글</h3>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import Table from '../component/Table.vue';

export default {
  name: 'SearchPage',

  components: {
    Table : Table,

  },
  data() {
    return {
      
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
  margin: 0;
  padding: 0;
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
  flex-direction: row;
  justify-content: center;
  border: 2px groove rgba(19, 16, 16, 0.973);
}

.box {
  display: flex;
  flex-direction: column;
  border: 2px groove white;
  margin: 0;
  padding: 0;
}

.headerbox {
  border: 2px groove white;
  width: 100%;
  height: 100px;
  margin-top: 25vh;
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
  height: 100%;
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
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  border: 2px groove yellow;
}
.board1 {
  margin: 0;
  padding-left: 1.5vw;
  width: 100%;
  height: 40vh;
  border: 2px groove brown;
  display: flex;
 
  flex-direction: column;
}

.board2 {
  margin: 0;
  padding-left: 1.5vw;
  width: 100%;
  height: 35vh;
  border: 2px groove brown;
  display: flex;
}

.titlebox {
  width: 100%;
  height: 40px;
  color: white;
  border: 2px groove blue;
}
/*titlebox는 게시판에서 보여주는 내용의 title만 들어감*/
.contentlist {
  margin: 0;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
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
  width:100%;
  height: 33vh;
  display: flex;
  border: 2px groove #ccffff;
}

.userbox{
  margin: 0;
  padding-top: 4vh;
  padding-left: 1.5vw;
  width:30vw;
  height: 27vh;
  border: 2px groove red;
}

.popular{
  margin: 0;
  padding-top: 4vh;
  width:100%;
  height: 27vh;
  padding-left: 1.5vw;
  border: 2px groove blue;
}

.contentbox {
  margin: 0;
  width: 100%;
  height: 21vh;
  color: white;
  border: 2px groove yellow;
}

thead tr {
  background-color: grey;
  border: 0px;
}
tbody tr {
  text-align: center;
  color: white;
}
tbody tr:nth-child(2n) {
  background-color: grey;
}

</style>
