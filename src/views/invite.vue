<template>
  <div id="pop">
    <div class="head">
      <img src="../assets/images/cashout/daily_21.png" alt id="headimg">
    </div>
    <div class="a">
      <img src="../assets/images/invite/邀请_04.png" alt class="ai">
    </div>
    <div class="line"></div>
    <div class="a" style="height:10%">
      <img src="../assets/images/invite/邀请_08.png" alt class="ai">
      <div style="margin:0 20px;color:#EEDF5F">AHGGGGGG</div>
      <img src="../assets/images/invite/邀请_11.png" alt class="ai" style="height:28%">
    </div>
    <div class="line"></div>
    <div class="a" style="height:10%">
      <img src="../assets/images/invite/邀请_15.png" alt class="ai" style="height:28%">
      <div
        style="margin:0 20px;color:#EEDF5F;border-bottom:1px solid #EEDF5F;padding:2px 5px"
      >AHGGGGGG</div>
      <img src="../assets/images/invite/邀请_16.png" alt class="ai" style="height:28%">
    </div>
    <div class="line" style="margin:0;"></div>
    <div class="a" style="height:4%;margin:20px 0">
      <img src="../assets/images/invite/邀请_20.png" alt class="ai" style="height:80%">
    </div>
    <div class="a" style="height:4%;margin:20px 0">
      <img src="../assets/images/invite/邀请_24.png" alt class="ai" style="height:80%">
    </div>
    <div class="a" style="height:6%">
      <img src="../assets/images/invite/邀请_28 (2).png" alt class="qq">
      <img src="../assets/images/invite/邀请_28.png" alt style="display:none" class="qq">
      <img src="../assets/images/invite/邀请_29 (2).png" alt class="qq">
      <img src="../assets/images/invite/邀请_29.png" alt style="display:none" class="qq">
    </div>
    
    <div class="a" style="height:8%;justify-content:space-between;padding:0 40px;color:#EEDF5F">
      <div class="nnn">
        <span style="font-size:20px">Friends</span>&nbsp;&nbsp;
        <span style="font-size:20px">5</span>
      </div>
         <div class="nnn">
        <span style="font-size:20px">500000</span>&nbsp;&nbsp;
        <!-- <span style="font-size:20px">5</span> -->
      </div>
    </div>
    <div class="line"></div>
    <div class="a ddd" style="justify-content:space-between;color:#EEDF5F;padding:0 40px">
        <div class="nnn" style="height:100%;">
            <img src="../assets/images/invite/邀请_27.png" alt="" class="oo" style="vertical-align:middle">
            <span class="name" style="line-height:20px ;">Name</span>
        </div>
        <div class="nnn" style="height:100%;">
           
            <span class="name" style="line-height:20px ;">5000000</span>&nbsp;&nbsp;
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#pop {
  background-color: #580068;
  height: 100%;
  width: 100%;
}
.a {
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ddd{
    height: 5%;
}
.oo {
    height: 80%;
}
.nnn{
     white-space:nowrap;
}
.qq {
  height: 70%;
}
.ai {
  height: 44%;
}
.head {
  height: 50px;
  background: url("../assets/images/invite/邀请_01.png") no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}
#headimg {
  height: 25px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
}
.line {
  border-bottom: 1px solid #792a87;
  margin-bottom: 12px;
}
</style>
