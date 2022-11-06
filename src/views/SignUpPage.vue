<script setup>
  import '../css/login.css';
  import '../assets/flag.jpg';
  import '../css/checkbox.css';
</script>




<template>
 <body>
  <div class="container">
      <div class="box">
        <img src="../assets/flag.jpg">
        <div class="box">
        <div class="login-form">
          <div class="loginbox">          
		        <ul>
              <a>아이디</a>
			        <li><input type="text" placeholder=""> </li>
              <a>비밀번호</a>
			        <li><input type="password" placeholder=""></li>
              <a>비밀번호 확인</a>	
              <li><input type="password" placeholder=""></li>
              <a>이름</a>
              <li><input type="text" placeholder=""> </li>
              <a>전공</a>
              <li><input type="text" placeholder=""> </li>
              <a>학번</a>
              <li><input type="text" placeholder=""> </li>

            </ul>
            
            </div>
            <div class="loginbox">
            <ul>          	 
			        <li><button type="button"><span>로그인</span></button></li>
            </ul>
            </div>   
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
    color: white;
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
    
    width: 20vw;
    height: 20vh;
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
