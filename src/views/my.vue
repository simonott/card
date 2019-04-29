<template>
<body>
  <div id="pop">
    <div class="head">
      <img src="../assets/images/cashout/daily_21.png" alt id="headimg">
    </div>
    <div id="my">
      <div id="photo">
        <img src="../assets/images/my/个人资料_12.jpg" alt>
      </div>

      <div id="myother">
        <div id="son">
          <div>Name</div>
          <div>xxx@qq.com</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="head head1">
         <img src="../assets/images/cashout/daily_21.png" alt class="imghead" >
    </div>
      <div class="head head2">
         <img src="../assets/images/cashout/daily_21.png" alt class="imghead" >
    </div>
      <div class="head head3">
         <img src="../assets/images/cashout/daily_21.png" alt class="imghead" >
    </div>
    <div class="line"></div>
    <div class="fly">
        
        
        <div id="mm">
            <img src="../assets/images/my/个人资料_10.png" alt="" style="height:150px">
        <div id="flyword">RichMeOfficial@gmail.com</div>
        </div>
        
    </div>
  </div>
</body>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#flyword{
    text-align: center;
    color: white;
    font-size: 16px
}
#mm{
    text-align: center
}
html,
.fly{
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
body {
  width: 100%;
  height: 100%;
}
#pop {
  background-color: #580068;
  height: 100%;
  width: 100%;
}

.head {
  height: 50px;
  background: url("../assets/images/my/个人资料_01.png") no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.head1 {
    background-image: url('../assets/images/my/个人资料_03.png');
    margin-bottom: 14px;
}
.head2 {
    background-image: url('../assets/images/my/个人资料_05.png');
    margin-bottom: 14px;
}
.head3 {
    background-image: url('../assets/images/my/个人资料_07.png');
    margin-bottom: 14px;
}

#headimg {
  height: 25px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%) ;
  
}
.imghead{
      height: 25px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -50%)  rotate(180deg);
}
#my {
  height: 26%;
  width: 100%;
}
.tip {
  height: 8%;
}
#photo {
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
    width: 100px;
  }
}
.line {
  border-bottom: 1px solid #792a87;
  margin-bottom: 12px;
}
#myother {
  width: 60%;
  height: 100%;
  float: left;
  display: flex;
  // flex-wrap:wrap;
  align-items: center;
  // flex-direction:column;
  color: white;
  font-style: italic;
  #son {
    
  }
}
</style>
