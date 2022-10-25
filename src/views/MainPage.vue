<template>
  <body>
    <div class="Container">
      <div class="Box">
        <div class="MyActivityBox">
          <div class="Title">
            <p>MY ACTIVITY</p>
          </div>
        </div>
        <div class="GrassBox">
          <div class="Title">
            <p>GRASS</p>
          </div>
        </div>
      </div>
      <div class="Box">
        <div class="FeedBox">
          <div class="Title">
            <p>FEED</p>
          </div>
        </div>
        <div class="BottomBox">
          <div class="bottomcontent">
            <div class="Title">
              <h5 style="text-align: left">#NOTICE</h5>
            </div>
          </div>
          <div class="bottomcontent">
            <div class="Title">
              <h5 style="text-align: left">USER</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="SideBox"></div>
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
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.Box {
  display: flex;
  flex-direction: column;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.MyActivityBox {
  display: flex;
  width: 50vw;
  height: 65vh;
  margin: 15px 10px;
  border: 2px solid black;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.Title {
  width: 100%;
  height: 40px;
  font-weight: 500;
  background-color: #2c2c2c;
  color: white;
}
.GrassBox {
  width: 50vw;
  height: 28vh;
  margin: 10px;
  display: flex;
  background-color: #000000;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
.FeedBox {
  display: flex;
  width: 28vw;
  height: 68vh;
  background-color: white;
  margin-right: 10px;
  margin-top: 10px;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/

.BottomBox {
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
.SideBox {
  display: flex;
  margin-top: 9px;
  width: 18vw;
  height: 100vh;
  margin-right: 1px;
  background-color: #515151;
}
/*border 삭제 border: 2px groove rgba(19, 16, 16, 0.973);*/
</style>
