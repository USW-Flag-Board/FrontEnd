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
            <p>잔디</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="feed">
          <div class="titlebox">
            <p>FEED</p>
          </div>
        </div>
        <div class="botombox">
          <div class="botomcontent">
            <div class="titlebox">
              <h5 style="text-align: left">#NOTICE</h5>
            </div>
          </div>
          <div class="botomcontent">
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
  background-color: rgba(19, 16, 16, 0.973);
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

.box {
  display: flex;
  flex-direction: column;
  border: 2px groove rgba(19, 16, 16, 0.973);
}

.myactivity {
  display: flex;
  width: 46vw;
  height: 43vh;
  border: 2px groove rgba(19, 16, 16, 0.973);
  margin: 10px;
}

.feed {
  display: flex;
  width: 28vw;
  height: 48vh;
  border: 2px groove rgba(19, 16, 16, 0.973);
  background-color: white;
  margin: 2px;
  margin-right: 20px;
  margin-top: 9px;
}

.titlebox {
  width: 100%;
  height: 40px;
  background-color: rgba(19, 16, 16, 0.973);
  color: white;
  border: 2px groove rgba(19, 16, 16, 0.973);
}

.sidemenu {
  display: flex;
  margin-top: 9px;
  width: 14vw;
  height: 74vh;

  margin-right: 1px;
  border: 2px groove rgba(19, 16, 16, 0.973);
  background-color: gray;
}

.grass {
  display: flex;
  width: 46vw;
  height: 28vh;
  border: 2px groove rgba(19, 16, 16, 0.973);
  margin: 10px;
}

.botombox {
  display: flex;
  justify-content: center;
  border: 2px groove rgba(19, 16, 16, 0.973);
  margin: 10px;
}

.botomcontent {
  width: 13vw;
  height: 22vh;
  margin: 5px;
  border: 2px groove rgba(19, 16, 16, 0.973);
}
</style>
