<template>
  <div class="quanbu1" style="margin-top: 100px;">
    <!-- <div class="header">
  </div> -->
    <div class="body">
      <div class="text">
        <img src="@/assets/image/hanYi1.png" alt="" />
      </div>
    </div>
    <div class="carousel-inner">
      <div class="font-item">
        <h5 webfont="name" fontid="9205" style="font-family: font-name-9205">
          汉仪鹅头宋
        </h5>
        <h6 webfont="true" fontid="9205" style="font-family: 94957ca78def3fcc">
          HYHuaGuan
        </h6>
        <p>制芰荷以为衣兮 集芙蓉以为裳</p>
        <!-- <a class="open-font-download">下载字体</a> -->
      </div>
      <div class="font-item">
        <h5 webfont="name" fontid="9205" style="font-family: font-name-9205">
          汉仪花冠
        </h5>
        <h6 webfont="true" fontid="9205" style="font-family: 94957ca78def3fcc">
          HYETouSong
        </h6>
        <p>点如垂露撇小刀｜钩似鹅头捺如帚｜口字上下多一段｜横细竖粗弯须收</p>
        <!-- <a class="open-font-download">下载字体</a> -->
      </div>
    </div>
    <div class="arrow">
      <img class="left" src="@/assets/image/hanYi3.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.quanbu1 {
  display: flex;
  width: 100%;
  height: 450px;
  position: relative;
}
.body {
  width: 40%;
  height: 650px;
  border: 1px solid red;
}
.text {
  width: 360px;
  height: 270px;
  overflow: auto;
  margin: 90px 0 70px;
  font-size: 56px;
  text-align: center;
  padding-top: 60px;
}
.text img {
  width: 80%;
}
.carousel-inner {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  overflow: visible;
  height: 510px;
  width: 60%;
  border: 1px solid rgba(151, 151, 151, 0.3);
  margin-top: 40px;
}
.font-item {
  width: 200px;
  height: 250px;
  border: 1px solid rgba(151, 151, 151, 0.3);
  color: #666;
  /* margin-right: 37px; */
  margin: 5px 36px;
  padding: 24px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}
.font-item h5 {
  font-size: 18px;
  margin: 0 0 12px;
}
.font-item h6 {
  font-size: 12px;
  margin: 0;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.font-item p {
  margin: 33px 0 0;
}
.font-item:hover {
  background: #666;
  color: white;
}
.arrow {
  position: absolute;
  right: 50px;
  bottom: -50px;
}
</style>

