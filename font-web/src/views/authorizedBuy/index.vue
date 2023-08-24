<template>
  <div style="margin-top: 200px">
    <div class="head-box">
      <div class="title">授权购买</div>
      <div class="sub-title">多领域商务合作授权方式</div>
      <div class="info">
        字库作品是字体设计师创作的结晶，
        是享有著作权的作品。为了促进字库作品原创版权的保护，
        在使用汉仪字体前需得到汉仪字库的官方授权，
        我们会根据具体情况为您制定最优的授权套餐，
        授权成功后方可根据授权协议进行使用。
      </div>
      <a class="btn-red" href="#">我要购买</a>
    </div>
    <div class="separation">版权介绍</div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.head-box {
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  text-align: center;
}
.head-box .title {
  font-size: 56px;
  color: #333;
  margin: 80px 0 6px;
  font-weight: 600;
}
.head-box .sub-title {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666666;
  margin-bottom: 24px;
}
.head-box .info {
  font-size: 16px;
  color: #666;
  line-height: 30px;
  letter-spacing: 1px;
  width: 892px;
  max-width: 100%;
  padding: 0 50px;
  margin: 0 auto;
}
.btn-red {
  display: block;
  width: 120px;
  line-height: 38px;
  font-size: 12px;
  margin: 0 auto;
  margin-top: 80px;
  color: #fff;
  background: #f13a39;
  border-radius: 0;
  padding: 0 12px;
}
.separation {
  margin-top: 90px;
  margin-bottom: 90px;
  padding: 0 40%;
  text-align: center;
  line-height: 40px;
  position: relative;
  font-size: 12px;
  color: #666;
}
.separation:before {
  left: 0;
}
.separation:before,
.separation:after {
  content: " ";
  position: absolute;
  display: block;
  top: 19px;
  width: 80%;
  height: 1px;
  background: #d6d6d6;
  line-height: 40px;
}
</style>