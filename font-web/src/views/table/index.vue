<template>
  <div class="quanbu" style="padding-bottom: 50px;">
    <div class="box-main tag-box fold"><div class="tag-groups"><div class="tag-group"><label>字体语言</label><div><span class="un-active">简体中文</span><span class="un-active">繁体中文</span><span class="un-active">西文</span><span class="un-active">日文</span><span class="un-active">阿拉伯文</span><span class="un-active">韩文</span><span class="un-active">泰文</span><span class="un-active">越南文</span></div></div><div class="tag-group"><label>字体类型</label><div><span class="un-active">黑体</span><span class="un-active">宋体</span><span class="un-active">仿宋</span><span class="un-active">楷体</span><span class="un-active">圆体</span><span class="un-active">书法体</span><span class="un-active">创意字体</span><span class="un-active">手写体</span><span class="un-active">Display</span><span class="un-active">Handwriting</span><span class="un-active">Monospace</span><span class="un-active">Sans Serif</span><span class="un-active">Serif</span><span class="un-active">彩色字体</span><span class="un-active">其它</span></div></div></div><a class="tag-unfold">更多筛选</a></div>
    <el-row :gutter="12" style="padding-left:20px; padding-top:20px">
        <el-col :span="8">
          <el-input
            placeholder="请输入预览文字"
            clearable
          >
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">搜索</el-button>
        </el-col>
    </el-row>
    <div class="zongti" style="padding: 30px 0;">
      <div class="font_item">
        <img src="@/assets/image/anli1.png" alt="" />
        <p class="tag">点字江湖体</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table2.png" alt="" />
        <p class="tag">点字黑糖</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table3.png" alt="" />
        <p class="tag">点字超凡战甲</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table4.png" alt="" />
        <p class="tag">汉仪糯米团</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table5.png" alt="" />
        <p class="tag">点字卡酷</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table6.png" alt="" />
        <p class="tag">字由芳华体</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table7.png" alt="" />
        <p class="tag">白云苍狗野马体</p>
      </div>
      <div class="font_item">
        <img src="@/assets/image/table8.png" alt="" />
        <p class="tag">汉仪字酷堂宋刻</p>
      </div>
    </div>
    <div class="footer">
      <el-pagination
      background
      layout="prev, pager, next"
      :total="50">
  </el-pagination>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tag-box {
    width: auto;
    margin: 15px 15px 0;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 9px;
    padding: 15px!important;
    position: relative;
}
.tag-groups {
    padding: 0;
    font-size: 12px;
    color: #6c6c6c;
}
.tag-group {
    position: relative;
    padding-left: 68px;
    margin: 0 0 10px;
    font-size: 12px;
}
label {
    color: #9d9d9d;
    font-weight: 400;
    position: absolute;
    left: 0;
    top: 2px;
    text-align: justify;
    display: block;
    width: 50px;
}
.tag-box span {
    display: inline-block;
    cursor: pointer;
}
.page-font-list .tag-group span {
    padding: 0 7px;
    line-height: 21px;
    margin: 0 5px 10px;
    color: #6c6c6c;
}
.tag-groups span {
    margin-bottom: 2px;
    padding: 0 6px;
}
.quanbu {
  background-color: #f0f0f0;
}
.zongti {
  width: 1060px;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.font_item {
  width: 226px;
  height: 246px;
  background-color: white;
  margin-bottom: 35px;
}
.font_item img {
  width: 100%;
}
.font_item .tag {
  font-family: font-name-9205;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  overflow: hidden;
  word-break: break-all;
  cursor: pointer;
  padding: 0 10px;
  text-align: center;
  background: #fff;
  margin: 10px 0 0 0;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
