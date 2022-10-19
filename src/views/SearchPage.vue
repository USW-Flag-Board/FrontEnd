<template>
  <body>
    <div class="container">
      <div class="headerbox">
        <div class="title">검색결과</div>
      </div>

      <div class="mainbox">
        <div class="sidebox">
          <h2>'조던1'</h2>
          <p>자유게시판</p>
          <p>사진게시판</p>
          <p>유저</p>
        </div>
        <div class="Contentbox">
          <div class="boardbox">
            <div class="titlebox">
              <h3>자유게시판</h3>
            </div>
            <Table></Table> 
            <div class="titlebox">
              <h3>사진게시판</h3>
            </div>
            <Table></Table> 
          </div>
          <div class="bottombox">
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
import Table from '../components/Table.vue';
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
  background-color: #2c2c2c;
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
}

.headerbox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 18vh;
}
/*headerbox 공통*/
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

.mainbox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
}
/*지금 테이블 높이가 정해져있는것 같은데 여기서 height를 정하면 nowrap이 적용안됨*/
.sidebox {
  width: 25vw;
  height: 100%;
  color: white;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.Contentbox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  flex-direction: column;
}

.boardbox {
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
}
.titlebox {
  width: 100%;
  height: 40px;
  color: white;
  margin: 10px;
}

/*titlebox는 게시판에서 보여주는 내용의 title만 들어감*/

.bottombox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 33vh;
  border: 2px solid white;
}

.userbox{
  width: 30vw;
  height: 27vh;
  margin: 0;
  padding-left: 1.5vw;
}
.popular{
  width: 100%;
  height: 27vh;
  margin: 0;
  padding-left: 1.5vw;
}

</style>