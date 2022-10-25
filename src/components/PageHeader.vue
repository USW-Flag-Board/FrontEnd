<template>
  <header>
    <img src="/src/assets/logo.JPG" width="301" height="105" />
    <ul>
      <div class="dropdown">
        <button class="dropbtn" @click="MainPage()"><h3>FLAG</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn" @click="ListPage()"><h3>BOARD</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"><h3>ACTIVITY</h3></button>
        <div class="dropdown-content">
          <a href="#">STUDY</a>
          <a href="#">PROJECT</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"><h3>NOTICE</h3></button>
        <div class="dropdown-content">
          <a href="#"></a>
        </div>
      </div>
      <li>
        <form>
          <div class="search-bar">
            <input class="search-bar__input" type="search" placeholder="검색" />
          </div>
        </form>
      </li>
    </ul>
  </header>
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
  methods: {
    MainPage() {
      this.$router.push("/");
    },
    ListPage() {
      this.$router.push("/list");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
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
</style>
