<template>
  <div class="allf">
    <div class="bread"></div>
    <div class="box-1200">
      <div class="section-head">
        <div class="title">汉仪星计划</div>
        <div class="company">
          汉仪字体星计划包括字体之星字体设计比赛、个人设计师产品合作、院校研究工作室合作以及字体工作室孵化等生态计划。通过全面开放的合作体系，以及更加专业的产品模块构建能力，打破行业的壁垒，建立字体与用户的链接，让更多喜欢汉字、热爱汉字设计的人加入到字体行业中，探索更多汉字表达的可能性，共同创作出符合时代脉搏的字体作品。
        </div>
        <div class="userInfo hidden-xs">
            您是？
            <a href="#">字体爱好者</a>
            <a href="#">字体工作室</a>
            <a href="#">院校机构</a>
        </div>
      </div>
      <div class="separation">
        模式介绍
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.allf {
  background: linear-gradient(#FFE4E1, #FFE4E1 53%, #FFE4E1);
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

</style>