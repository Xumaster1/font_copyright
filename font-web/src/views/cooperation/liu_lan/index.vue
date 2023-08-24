<template>
  <div class="allf">
    <div class="bread"></div>
    <div class="box-1200">
      <div class="section-head">
        <div class="title">个性化定制</div>
        <div class="company">
          汉字是中华文明中不可缺少的一部分，它不但承载了我们几千年的历史，而且也是从古到今人们进行沟通的重要手段。作为汉字最直观的表达方式，字库无疑是信息传递、情感交流最便捷的方式之一。汉仪字库作为国内最专业的字体设计公司之一，迄今为止已经开发出上千款面向B端企业以及C端用户的字库产品。汉仪字库拥有优秀的设计团队和市场团队，如果您也喜欢汉字关注字体设计，希望通过字体展现您的作品或品牌， 请联系我们，汉仪字库期待与您共同打造与字体相关的优质案例。
        </div>
            <a href="#" class="btn btn-red btn-large" style="color: #fff; margin-top: 100px;">联系我们</a>
      </div>
      <div class="separation">
        合作案例
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.allf {
  background: linear-gradient(#F0FFF0, #F0FFF0 53%, #F0FFF0);
}
.bread {
  width: 1200px;
  height: 60px;
  margin: 1px auto;
  line-height: 59px;
  border-bottom: 1px solid #dcdcdc;
}
.box-1200 {
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
}
.section-head {
  text-align: center;
  padding-bottom: 90px;
}
.separation {
  padding: 0 40%;
  text-align: center;
  line-height: 40px;
  position: relative;
  font-size: 12px;
  color: #666;
}
.section-head .title {
    font-size: 56px;
    color: #333;
    margin-top: 80px;
    margin-bottom: 24px;
    font-weight: 600;
}
.section-head .company {
    font-size: 16px;
    color: #666;
    line-height: 30px;
    letter-spacing: 1px;
    width: 765px;
    margin: 0 auto;
}
.section-head .userInfo {
    color: #040000;
    font-size: 20px;
    margin-top: 96px;
    font-weight: 600;
}
.section-head a {
    display: inline-block;
    color: #F13A39;
    font-size: 16px;
    padding: 0 28px;
}
a, a:hover, a:active, a:focus {
    // color: #333;
    // display: inline-block;
    cursor: pointer;
}
.separation:after .separation:before{
    content: ' ';
    position: absolute;
    display: block;
    top: 19px;
    width: 40%;
    height: 1px;
    background: #D6D6D6;
    line-height: 40px;
    box-sizing: border-box;
}
.separation:after,.separation:before {
    right: 0;
}
.separation:after {
    left: 0;
}
.separation:before, .separation:after {
    content: ' ';
    position: absolute;
    display: block;
    top: 19px;
    width: 40%;
    height: 1px;
    background: #D6D6D6;
    line-height: 40px;
    box-sizing: border-box;
}
.box-head .btn {
    display: block;
    width: 120px;
    font-size: 12px;
    margin: 0 auto;
    margin-top: 48px;
    color: #fff;
}
.btn-large {
    line-height: 38px;
    // width: 120px;
}
.btn-red {
    color: #fff;
    background: #F13A39;
}
.btn {
    border-radius: 0;
    padding: 0 12px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
}
</style>