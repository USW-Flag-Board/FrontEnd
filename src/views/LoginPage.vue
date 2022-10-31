<script setup>
  import '../css/search.css';
  import '../css/login.css';
  import '../assets/flag.jpg';
  import '../css/checkbox.css';
</script>




<template>
 <body>
  <div class="container">
      <div class="box">
        <img src="../assets/flag.jpg" width="40%" height="20%">
        <div class="box">
        <div class="login-form">
          <div class="loginbox">          
		        <ul>
			        <li><input type="text" placeholder="아이디"> </li>
			        <li><input type="password" placeholder="비밀번호"></li>	
            </ul>
            
            </div>
            <div class="checkbox">
              <div class="checkbox1">
              
                <form action="#">
                  <label for="chk1">
                  <input type="checkbox" id="chk1">
                  <i class="circle1"></i>
                  <span class="text">로그인 상태 유지</span>
                </label>
                </form>
              </div>
              <div class="checkbox1">
                <form action="#">
                  <label for="chk2">
                  <input type="checkbox" id="chk2">
                  <i class="circle2"></i>
                  <span class="text">아이디 기억하기</span>
                </label>
                </form>
              </div> 
            </div> 
            <div class="loginbox">
            <ul>          	 
			        <li><button type="button"><span>로그인</span></button></li>
            </ul>
            </div>   
	      </div>
      <div class="idpwbox">
        <a>아이디 찾기</a>
        <a>비밀번호 찾기</a>
        <a>회원가입</a>
      </div>
    </div>

      </div>
  </div>
    
</body>
</template>

<style scoped>
   body{
    margin: 0px;
    height: 100%;
    background-color: #2c2c2c;
  }

  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
   
    
  }
  
  .loginbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 1vh;
  }

  .box {
    
    display: flex;
    width: max-content;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin: 10%;

    
  }
  img{
    margin-bottom: -10vh;
  }

  .idpwbox{
    display: flex;
    flex-direction: row;
    width: max-content;
    height: auto;
    justify-content: center;
    color: white;
    font-size: 1vw;
 

  }

  .checkbox{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: max-content;
    height: auto;
    color: white;
    font-size: 1vw;
    white-space: normal;
  }

  .checkbox1{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 150px;
    height: 50px;
    color: white;
    font-size: 1vw;
  }


  a{
    margin-right: 1vw;
    margin-left: 1vw;
    font-size: 1em; 
  }


</style>
