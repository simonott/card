<template>
  <div id="loginBack">
    <div id="richme">
      <img src="../assets/images/login/logo_03.png" alt>
    </div>
    <div id="input">
      <div class="email">
        <input type="email" class="userinput">
        <span ></span>
      </div>
        <div class="email">
        <input type="email" class="userinput">
        <span id="pass"></span>
      </div>
    </div>
    <div class="login">
        <img src="../assets/images/login/登录页面_15.png" alt="">
    </div>
    <div class="forget">
        <a>ForGot Password ?</a>
    </div>
    <div class="facebook">
        <img src="../assets/images/login/登录页面_23.png" alt="">
    </div>
     <div class="facebook">
        <img src="../assets/images/login/登录页面_26.png" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" >
#loginBack {
  width: 100%;
  height: 100%;
  background: url("../assets/images/login/登录页面.png") no-repeat;
  overflow: hidden;
  background-size: cover;
}
#richme {
  height: 100px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  img {
    height: 100%;
  }
}
#input {
  margin-top: 32px;
  text-align: center;
  .userinput {
    height: 100%;
    width: 64%;
    padding-left: 16%;
  }
}
.email {
  position: relative;
  margin-bottom:6%;
  height: 44px;
  // width: 268px;
  background: url("../assets/images/login/输入框_03.png") no-repeat;
  background-size: 80% 100%;
  background-position: center center;
  text-align: center;
  span {
    position: absolute;
   height: 52%;
    width: 7%;
    left: 16%;
    top: 24%;
    background: url("../assets/images/login/登录页面_07.jpg") no-repeat;
    background-position: center center;
    background-size: cover;
  }
}
input {
  text-indent: 0;
  background: transparent;
  border: 0 none;
  resize: none;
  outline: none; /*清除选中效果的默认蓝色边框 */
  -webkit-appearance: none; /*清除浏览器默认的样式 */
  line-height: normal; //光标问题
  font-size: 18px
}
#pass{
    background: url('../assets/images/login/登录页面_11.png') no-repeat;
        position: absolute;
   height: 63%;
    width: 7%;
    left: 16%;
    top: 20%;
    // background: url("../assets/images/login/登录页面_07.jpg");
    background-position: center center;
    background-size: cover;
}
.login {
    height: 44px;
    text-align: center;
    img{
        height: 100%;
        width: 80%;
    }
}
.forget{
    height: 44px;
    color: white;
    text-align: center;
    line-height: 44px;
    font-size: 20px;
    margin: 3%
    
}
.facebook {
      height: 50px;
    text-align: center;
    margin-bottom:6%;
    img{
        height: 100%;
        width: 80%;
    }
}

</style>
