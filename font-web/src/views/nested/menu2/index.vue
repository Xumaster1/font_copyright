<template>
    <div class="allf">
      <div class="bread">
      </div>
      <div class="box-1200 about-us">
        <div class="box-head">字体侵权
        </div>
        <div class="info">
          <h4>案件情况统计分析</h4>
          <p>
            目前原告侵权主张认定率较高，法院一审全部/部分支持原告主张为121件，占比72%，一审驳回原告诉讼请求，认定侵权不成立的情形仅为9件，占5.3%。二审改判8件中，仅2件认定侵权不成立，另5件认定侵权成立，还有1件则认为部分字体构成侵权，部分未侵权。
          </p>
          <div class="box-1200">
            <!-- 图片 -->
            <div class="case-item">
              <div class="img-box">
                <img src="@/assets/image/anlifenxiang1.png" alt="">
              </div>
            </div>
          </div>

          <h4>侵权案例</h4>
          <p>
            2013年12月，向佳红向广东省版权局申请作品名称为“向佳红毛笔行书字体”的作品著作权登记。向佳红5月17日告诉华商报记者，他已在此套字体库中明确署名此套字体仅用于学习交流使用，商业使用需经其授权，同时留有其联系方式。电影《九层妖塔》上映后，向佳红发现在该电影出现的道具《鬼族史》图书、《华夏日报》报纸上使用了他的书法作品“鬼”、“族”、“史”、“华”、“夏”、“日”、“报”。他认为，影片的制作、发行、投资和传播方未经过他许可，也未署名，侵犯了他对上述书法作品享有的署名权、复制权。仅仅7个字就赔偿了14万元。
          </p>
          <div class="box-1200">
            <!-- 图片 -->
            <div class="case-item">
              <div class="img-box">
                <img src="@/assets/image/dianying1.png" alt="">
              </div>
              <div class="bottom1">
                  电影截图
              </div>
            </div>
            <div class="case-item">
                <div class="img-box">
                  <img src="@/assets/image/dianying2.png" alt="">
                </div>
                <div class="bottom2">
                  书法家向佳红书写对应七字
                </div>
              </div>
          </div>
            <p>
              字库侵权比较典型的就是“暴雪案”，根据暴雪公司侵权行为的规模、涉案字库相关字体在涉案游戏中的作用，使用涉案字库的主观意图等因素，确定赔偿额为200万元。
            </p>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bread {
    width: 1200px;
    height: 60px;
    margin: 1px auto;
    line-height: 59px;
    border-bottom: 1px solid #DCDCDC;
}
.box-1200 {
    width: 1200px;
    margin: 0 auto;
    max-width: 100%;
}
.case-col {
  width: 50%;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  margin-bottom: 25px;
}
.box-head {
    font-size: 32px;
    font-weight: 600;
    line-height: 45px;
    margin-top: 48px;
}
.case-item .img-box img {
  width:50%;
  height: 70%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.case-item {
    position: relative;
    width: 100%;
    border-top: none;
    padding: 0 170px;
}
.bottom1 {
    position: relative;
    width: 100%;
    border-top: none;
    padding: 0 170px;
}

.case-item .bottom2 {
    position: relative;
    width: 100%;
    border-top: none;
    padding: 0 7px;
}
.box-head small {
    font-size: 12px;
    line-height: 17px;
    display: block;
    font-weight: 400;
}
.about-us section {
    overflow: hidden;
    margin-top: 48px;
}
.about-us section>h4 {
    width: 96px;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    float: left;
    margin: 0;
}
.about-us section>.content {
    width: 914px;
    float: right;
}
.about-us .info p {
    line-height: 22px;
    letter-spacing: 1px;
    margin: 0 0 32px;
}
</style>