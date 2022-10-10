<script setup>
  import './menubar.css';
  import './search.css';
</script>



<template>
 <body>

    <header>
      <img src="/src/assets/logo.JPG" width="300px" height="100px">
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
          </div><li>
            <div class="search-bar">
              <i class="fas fa-search" aria-hidden="true"></i>
            <input class="search-bar__input" type="search" placeholder="검색" >
          </div></li>
        </ul>
      
    </header>

    <div class="container">
      <div class="headerbox">
        <h1>검색결과</h1>

      </div>
      <div class="mainbox">  
        <div class="sidebar">
            <h2>'조던1'</h2>
            <p>자유게시판</p>
            <p>사진게시판</p>
            <p>유저</p>
        </div>
        <div class="bulletinboard">
          <div class="board1">
            <div class="titlebox">
                <h4>게시판1</h4>
            </div>
          </div>
          <div class="board1">
            <div class="titlebox">
                <h4>게시판2</h4>
            </div>
          </div>
          <div class="bottomcontent">
              <div class="bottom">
                  <div class="titlebox">
                    <h4>유저</h4>
                  </div>
              </div>
              <div class="bottom">
                <div class="titlebox">
                  <h4>인기글</h4>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  
</body>
</template>

<style scoped>
   body{
    background-color: rgba(19, 16, 16, 0.973);
    margin-top: 125px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  a{
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

    ul{
      display: flex;
    }
    li{
      margin: 30px;
      list-style-type:none;
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
    height: 15vh;
    margin-top: 20vh;
    padding-left: 13vw;
    color: white;

  }

  .sidebar {
    width: 15vw;
    height: 110vh;
    background-color: 	#363636;
    border: 2px groove white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    justify-content: center;
  }

  .mainbox {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    border: 2px groove white;
    flex-direction: row;
  }

  .bulletinboard{
    margin: 0;
    width: 100%;
    height: 110vh;
    border: 2px groove white;
    display: flex;
    flex-direction: column;
  }

  .board1{
    margin: 0;
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px groove white;
  }

  .titlebox{
    margin: 0;
    width: 100%;
    height: 8vh;
    display: flex;
    border: 2px groove white;
    color: white;

  }

  .bottomcontent{
    margin: 0;
    width: 175vh;
    height: 30vh;
    display: flex;

    border: 2px groove white;
    color: white;
  }

  .bottom{
    margin: 0;
    height: 30vh;
    width: 90vh;
    display: flex;
    border: 2px groove white;
  }




</style>
