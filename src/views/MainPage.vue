<template>
  <body>
    <div class="container">
      <div class="box">
        <div class="myactivity">
          <div class="titlebox">
            <p>MY ACTIVITY</p>
          </div>
        </div>
        <div class="grass">
          <div class="titlebox">
            <p>GRASS</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="feed">
          <div class="titlebox">
            <p>FEED</p>
          </div>
        </div>
        <div class="bottombox">
          <div class="bottomcontent">
            <div class="titlebox">
              <h5 style="text-align: left">#NOTICE</h5>
            </div>
          </div>
          <div class="bottomcontent">
            <div class="titlebox">
              <h5 style="text-align: left">USER</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="sidemenu"></div>
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
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.box {
  display: flex;
  flex-direction: column;
  
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.myactivity {
  display: flex;
  width: 50vw;
  height: 65vh;
  margin: 10px;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.titlebox {
  width: 100%;
  height: 40px;
  font-weight: 500;
  background-color: #2c2c2c;
  color: white;
}
.grass {
  display: flex;
  width: 46vw;
  height: 28vh;
  margin: 10px;
  background-color: #000000;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.feed {
  display: flex;
  width: 28vw;
  height: 68vh;
  background-color: white;
  margin: 2px;
  margin-right: 20px;
  margin-top: 9px;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/

.bottombox {
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-left: 0;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.bottomcontent {
  width: 13vw;
  height: 22vh;
  margin: 5px;
  border: 2px groove rgba(19, 16, 16, 0.1);
}
.bottomcontent h5 {
  margin: 0;
}
.sidemenu {
  display: flex;
  margin-top: 9px;
  width: 14vw;
  height: 100vh;
  margin-right: 1px;
  background-color: #515151;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
</style>
