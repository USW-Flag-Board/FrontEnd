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
