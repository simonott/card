<template>
<body>
  <div id="pop">
    <div id="head">
      <img src="../assets/images/cashout/daily_21.png" alt id="headimg">
    </div>
    <div id="money1"></div>
    <div class="line"></div>
    <div id="money2">
      <span id="one">$</span> &nbsp;
      <span id="two">111111</span>
    </div>
    <div class="line"></div>
    <div class="pay">
      <img src="../assets/images/cashout/CASH-OUT_08.png" alt class="payimg">
      <div class="payinput">
        <div id="xxx">
          <input type="text" id="payininput">
        </div>

        <img src="../assets/images/cashout/CASH-OUT_12.png" alt id="getcash">
      </div>
    </div>
    <div
      class="youneed"
      style="height:10%;width:100%;display:flex;align-items: center;padding-left:10%"
    >
      <img src="../assets/images/cashout/CASH-OUT_16.png" alt style="height:50%">
    </div>
    <div class="bottom">
      <img src="../assets/images/cashout/CASH-OUT_19.png" alt>
    </div>
  </div>
</body>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#pop {
  background-color: #580068;
  height: 100%;
  width: 100%;
}
.bottom {
  height: 26%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom img {
  height: 56%;
}
#head {
  height: 50px;
  background: url("../assets/images/cashout/CASH-OUT_01.png") no-repeat;
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
#money1 {
  height: 18%;
  background: url("../assets/images/cashout/CASH-OUT_04.png") no-repeat;
  background-position: center center;
  background-size: contain;
  margin-top: 30px;
  /* padding-bottom: 20px; */
}
.line {
  margin-top: 10px;
  border-bottom: 1px solid #7a2a84;
}
#money2 {
  height: 16%;
  color: #fced60;
  font-weight: 700;
  text-align: center;
  /* line-height: 120px; */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
#one {
  font-size: 24px;
}
#two {
  font-size: 24px;
}
.pay {
  display: flex;
  margin-top: 14px;
  width: 100%;
  justify-content: center; /* 水平居中 */
  align-items: flex-start; /* 垂直居中 */
  flex-wrap: wrap;
}
.payimg {
  height: 14px;
}
.payinput {
  width: 60%;
  height: 46%;
  margin-left: 5px;
}
#xxx {
  background: url("../assets/images/cashout/CASH-OUT_02.jpg") no-repeat;
  width: 100%;
  height: 50%;
}
#payininput {
  height: 100%;
  width: 100%;
  text-indent: 0;
  background: transparent;
  border: 0 none;
  resize: none;
  outline: none; /*清除选中效果的默认蓝色边框 */
  -webkit-appearance: none; /*清除浏览器默认的样式 */
  line-height: normal;
  padding-left: 5px;
}
#getcash {
  margin-top: 16px;
  height: 40px;
}
</style>
