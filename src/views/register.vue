<template>
  <div id="register">
    <div class="sign">
      <img src="../assets/images/sign/注册_07.png" alt>
    </div>
    <img src="../assets/images/sign/注册_03.png" alt="" id="close">
    <div class="qq">
      <span class="word">NAME:</span>
      <div class="xx">
        <img src="../assets/images/sign/输入框_03.png" alt class="kuang">
        <input type="text" placeholder="Name">
        <span class="icon icon1"></span>
      </div>
    </div>
    <div class="qq">
      <span class="word">E-MAIL:</span>
      <div class="xx" >
        <!-- <img src="../assets/images/sign/输入框_03.png" alt class="kuang"> -->
        <input type="text" placeholder="E-mail">
        <span class="icon icon2"></span>
      </div>
    </div>
    <div class="qq">
      <span class="word" >PASSWORD:</span>
      <div class="xx">
        <img src="../assets/images/sign/输入框_03.png" alt class="kuang">
        <input type="text" placeholder="Password">
        <span class="icon icon3"></span>
      </div>
    </div>
    <div class="qq">
      <span class="word">REPEAT:</span>
      <div class="xx">
        <img src="../assets/images/sign/输入框_03.png" alt class="kuang">
        <input type="text" placeholder="Password">
        <span class="icon icon4"></span>
      </div>
    </div>
    <div class="save">
         <img src="../assets/images/sign/注册_23.png" alt>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#register {
  width: 100%;
  height: 100%;
  background: url("../assets/images/login/登录页面.png") no-repeat;
  overflow: hidden;
  background-size: cover;

  p {
    color: white;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-top: 70px;
  }
}
.sign {
  // background: url('../assets/images/sign/注册_07.png') no-repeat;
  width: 40%;
  height: 40px;
  text-align: center;
  //  align:center
  margin: 70px auto 40px;
  img {
    height: 100%;
    width: 100%;
  }
}
#close{
    position: fixed;
    right: 20px;
    top: 20px;
    height: 32px;
    // width: 32px;

}
.qq {
  height: 44px;
  margin-bottom: 5%;
  color: white;
  line-height: 44px;
  position: relative;
  display: flex;
  .xx {
      width: 100%;
      height: 100%;
      flex:6;
      background:url('../assets/images/sign/输入框_03.png') no-repeat  ;
      background-size:92% 100%
  }
  .word {
    // margin-left: 20px;
    padding-left:20px; 
    float: left;
    font-size: 12px;
    width: 40px;
    height: 100%;
    white-space: nowrap;
    flex: 1;
  
  }
  .kuang {
    width: 85%;
    height: 100%;
    float: left;
    margin-left: 20px;
   
  }
  input {
    position: absolute;
    text-indent: 0;
    background: transparent;
    border: 0 none;
    resize: none;
    padding-left: 8px;
    outline: none; /*清除选中效果的默认蓝色边框 */
    -webkit-appearance: none; /*清除浏览器默认的样式 */
    line-height: normal; //光标问题
    font-size: 18px;
    left: 34%;
    height: 100%;
  }
  .icon {
    // background: url("../assets/images/sign/注册_15.png") no-repeat;
    position: absolute;
    height: 22px;
    width: 30px;
    left: 25%;
    top: 27%;
  
  }
  .icon1 {
      background: url("../assets/images/sign/注册_11.png") no-repeat ;
        background-size: cover;
  }
  .icon2 {
      background: url("../assets/images/sign/注册_15.png") no-repeat;
        background-size: cover;
  }
  .icon3 {
background: url("../assets/images/sign/注册_19.png") no-repeat;
 background-size: cover;
 width: 20px
  } 
  .icon4 {
      background: url("../assets/images/sign/注册_19.png") no-repeat;
        background-size: cover;
        width: 20px
  }


}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 14px;
  /* placeholder位置  */
  
}
.save {
    width: 70%;
 
  text-align: center;
  margin: 20px auto 0;
  img {
    height: 100%;
    width: 100%;
  }

}
</style>
