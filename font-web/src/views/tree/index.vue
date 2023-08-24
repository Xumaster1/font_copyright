<template>
<div>
  <div class="page-font-case">
    <div class="bread">
      <a href="#">首页</a>
      <a href="#">字体相册</a>
    </div>
    <div class="head-search">
      <input type="text" placeholder="搜索想看的字体">
    </div>
    <div class="box-1200">
      <div class="case-container">
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree1.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪颐和仙境</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree2.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪大吉兔</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree3.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪铸字黑洞洞</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree4.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪牛奶吐司</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree5.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪空山楷</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree6.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪喵魂梦境</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree7.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪竹心楷</a>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="case-col">
          <div class="case-item">
            <div class="img-box">
              <img src="@/assets/image/tree8.png" alt="">
            </div>
            <div class="bottom">
              <a href="#" class="name">汉仪暴漫体</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="pagination">
       <el-pagination
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
  </div> -->
</div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.bread {
  width: 1200px;
  margin: 1px auto;
  line-height: 59px;
  border-bottom: 1px solid #DCDCDC;
  padding-left: 20px;
}
.bread>a {
    color: #9B9B9B;
    padding-right: 20px;
}
a, a:hover, a:active, a:focus {
    /* color: #333; */
    display: inline-block;
    cursor: pointer;
}
.bread>a:last-of-type {
    /* color: #333; */
    font-weight: 600;
}
a, a:hover, a:active, a:focus {
    color: #333;
    display: inline-block;
    cursor: pointer;
}
.head-search {
    width: 400px;
    margin: 40px auto 48px;
    line-height: 45px;
    font-size: 32px;
}
.head-search input {
    width: 100%;
    text-align: center;
    color: #dbdbdb;
    /* background-color: #dbdbdb; */
}
input {
    border: none;
    outline: none;
}
.box-1200 {
    width: 1200px;
    margin: 0 auto;
    max-width: 100%;
    /* background-color: pink; */
}
.case-col {
  width: 25%;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  margin-bottom: 25px;
}
.case-item {
  margin-bottom: 25px;
  border: 1px solid #D6D6D6;
  border-radius: 4px;
}
.case-item .img-box img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.case-item .bottom {
    position: relative;
    width: 100%;
    border-top: none;
    padding: 0 15px;
}
.case-item .name {
    font-size: 24px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
.pagination {
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    display: block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}
</style>
