<template>
  <div id="pop">
    <div class="head">
      <img src="../assets/images/cashout/daily_21.png" alt id="headimg">
    </div>
    <div class="a">
        <img src="../assets/images/mytoken/my-token_03.png" alt="" style="height:65%">
    </div>
    <div class="line" style="margin-bottom:0"></div>
    <div class="a" style="height:16%">
        <div style="font-size:24px;color:#EEDF5F;font-weight:700"> 1200,000</div>
    </div>
    <div class="line"></div>
    <div class="a">
        <img src="../assets/images/mytoken/my-token_06.png" alt="" height="30%">
    </div>
    <div style="height:24%;padding-left:20px">
        <img src="../assets/images/mytoken/my-token_09.png" alt="" height="30%">
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
.head {
  height: 50px;
  background: url("../assets/images/mytoken/my-token_01.png") no-repeat;
  background-size: cover;
  background-position: center 10%;
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
.a {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
