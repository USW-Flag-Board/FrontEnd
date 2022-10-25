<template>
  <body>
    <div class="Container">
      <div class="HeaderBox">
        <div class="Header_Title">검색결과</div>
      </div>

      <div class="MainBox">
        <div class="SideBox">
          <h2>'조던1'</h2>
          <p>자유게시판</p>
          <p>사진게시판</p>
          <p>유저</p>
        </div>
        <div class="ContentBox">
          <div class="BoardBox">
            <div class="TitleBox">
              <h3>자유게시판</h3>
            </div>
            <Table></Table> 
            <div class="TitleBox">
              <h3>사진게시판</h3>
            </div>
            <Table></Table> 
          </div>
          <div class="BottomBox">
            <div class="UserBox">
              <div class="TitleBox">
                <h3>유저()</h3>
              </div>
            </div>
            <div class="PopularBox">
              <div class="TitleBox">
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.HeaderBox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 18vh;
}
/*HeaderBox 공통*/
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

.MainBox {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
}
/*지금 테이블 높이가 정해져있는것 같은데 여기서 height를 정하면 nowrap이 적용안됨*/
.SideBox {
  width: 25vw;
  height: 100%;
  color: white;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.ContentBox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  flex-direction: column;
}

.BoardBox {
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
}
.TitleBox {
  width: 100%;
  height: 40px;
  color: white;
  margin: 10px;
}

/*titlebox는 게시판에서 보여주는 내용의 title만 들어감*/

.BottomBox {
  display: flex;
  margin: 0;
  padding: 0;
  width: 87vw;
  height: 33vh;
  border: 2px solid white;
}

.UserBox{
  width: 30vw;
  height: 27vh;
  margin: 0;
  padding-left: 1.5vw;
}
.PopularBox{
  width: 100%;
  height: 27vh;
  margin: 0;
  padding-left: 1.5vw;
}

</style>