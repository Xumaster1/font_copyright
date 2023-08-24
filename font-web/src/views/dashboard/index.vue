<template>
  <div class="page-content">
    <div class="pic-box">
      <div class="box-main">
        <h2>汉字字体版权检测技术平台</h2>
        <div class="upload-box hover" style="z-index: 0">
          <div>
            <div class="drag">
              <input
                ref="file"
                type="file"
                img
                accept="image/*"
                style="display: none"
                @change="preview"
              />
              <img ref="img" :src="img" class="icon" style="display: none" />
              <p ref="font" @click="onclickImg">将 JPG/PNG 点击上传</p>
            </div>
          </div>
        </div>
        <div class="action-box">
          <div class="btn-group" style="z-index: 0">
            <div class="c-btn" title="点击上传" @click="onclickImg">选择图片</div>
            <div class="c-btn" title="点击上传" @click="upload">开始检测</div>
          </div>
          <small>当前剩余次数 5</small>
        </div>
      </div>
    </div>
    <div class="suggestion content-box">
      <h4>为了获得最佳效果，请参考以下建议</h4>
      <div class="items">
        <div>
          <img src="//resource.hellofont.cn/ai/s-1.png" />
          <h5>图片质量</h5>
          <p>最低不能低于 128*128<br />最好在 4M 以内，并确保文本为水平</p>
        </div>
        <div>
          <img src="//resource.hellofont.cn/ai/s-2.png" />
          <h5>图片内容</h5>
          <p>为保证检测效率，样图文字最好为中文字体<br />尽量将图中汉字数量控制在10个以内</p>
        </div>
        <div>
          <img src="//resource.hellofont.cn/ai/s-3.png" />
          <h5>次数限制</h5>
          <p>
            未登录用户可体验 5 次<br />字由用户50次/天，字由会员不限次数
            <a class="link">成为会员</a>
          </p>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="box-main">
        <h4>检测结果</h4>
        <div class="font-row">
          <!-- <svg width="44" height="54" viewBox="0 0 44 54" class="recommend">
            <defs>
              <filter id="a" x="0" y="0" width="44" height="54" filterUnits="userSpaceOnUse">
                <feOffset dy="2" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="2" result="b" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="b" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="translate(-1043 -1209)">
              <g transform="matrix(1, 0, 0, 1, 1043, 1209)" style="filter: url('#a')">
                <path
                  d="M4117.075,1112.494H4140a4.535,4.535,0,0,1,4.535,4.535v37.465l-16-5.547-16,5.547v-37.465A4.535,4.535,0,0,1,4117.075,1112.494Z"
                  transform="translate(-4106.54 -1108.49)"
                  style="fill: rgb(101, 255, 249)"
                />
              </g>
              <path
                d="M4157.026,1144.2l-3.884.5a1.228,1.228,0,0,0-.948.659l-1.7,3.385a1.292,1.292,0,0,1-2.279-.029l-1.784-3.428a1.309,1.309,0,0,0-.966-.683l-3.9-.6a1.235,1.235,0,0,1-.73-2.1l2.783-2.616a1.177,1.177,0,0,0,.351-1.082l-.712-3.752a1.234,1.234,0,0,1,1.827-1.271l3.5,1.808a1.312,1.312,0,0,0,1.183.014l3.458-1.725a1.293,1.293,0,0,1,1.861,1.317l-.617,3.736a1.229,1.229,0,0,0,.379,1.091l2.849,2.685a1.2,1.2,0,0,1-.68,2.092Z"
                transform="translate(-3083.978 91.512)"
                style="fill: rgb(255, 255, 255)"
              />
            </g>
          </svg> -->
          <p>版权检测结果显示区</p>
          <div>相似字体：{{this.font_type}}</div>
          <div>可能性：{{this.posibility}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dashboard',
  data() {
    return {
      file: null,
      img: '',
      font_type:"",
      posibility:""
    }
  },
  methods: {
    upload() {
      // 上传图像通常要将文件参数放在fromdata 对象中
      // 创建formData实例
      const formData = new FormData()
      // 向formData实例中追加属性 (参数1：属性名 参数2：属性值)
      formData.append('files', this.file)
      // console.log(formData) // 这里输出的是一个空的formData对象，因为formData是加密处理的我们看不到其内容，但的的确确添加进去了。
      // axios.post('http://127.0.0.1:8000/upload/images', formData).then(res => {
      //   console.log(res)
      // })
      axios({
        url: 'http://127.0.0.1:8000/upload/images',
        method: 'post',
        data: formData
        // headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        
        // console.log(Object.keys(res.data),Object.values(res.data),'fdsafas')
        this.font_type = Object.keys(res.data)[0]
        this.posibility = Object.values(res.data)[0]
        console.log(this.font_type,this.posibility,'11223344')
        if (res.status === 200) {
          this.$message({ 
            message: '上传图片成功',
            type: 'success'
          })
        }
      })
    },
    changeFile(e) {
      // 获取文件信息 e.target.files
      console.log(e.target.files[0])
      this.file = e.target.files[0]
    },
    // 点击图片唤起本地文件夹
    onclickImg: function () {
      this.$refs.file.click()
    },
    // 预览图片
    preview: function (e) {
      this.$refs.img.style.display = 'block'
      this.$refs.font.style.display = 'none'
      this.file = e.target.files[0]
      const _this = this
      const file = e.target.files[0]
      if (!file) {
        return
      }
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = function () {
        _this.img = this.result
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  color: #333;
  background: #fff;
  margin: 0;
  height: 100%;
  overflow: auto;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
}
.page-content .pic-box {
  height: 610px;
  padding: 70px 0 0;
  background: linear-gradient(#ff8345, #ff8345 53%, #ff8345);
  text-align: center;
}
.page-content .pic-box .box-main h2 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  font-size: 40px;
  margin: 0 0 44px;
}
.page-content .pic-box .upload-box {
  max-width: 100%;
  margin: 0 auto;
  border: 2px dashed #9d9d9d;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 18%);
  border: 1px dashed #e0e0e0;
  cursor: pointer;
  text-align: center;
  background: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
  width: 560px;
  height: 280px;
}
.upload-box .drag .icon {
  width: 100%;
  height: 278px;
}
.upload-box .drag .back {
  width: 420px;
  left: -480px;
  top: 249px;
}
.upload-box .drag {
  background: url(../../assets/image/hover-icon.png) no-repeat 220px 20px;
}
.upload-box .drag p {
  margin: 88px 0 23px;
  padding-top: 180px;
  position: relative;
}
.page-content .pic-box .upload-box p {
  font-size: 18px;
  margin: 0 0 10px;
}
.action-box .btn-group {
  margin: 48px 0 12px;
  position: relative;
}
.c-btn {
  width: 280px;
  line-height: 48px;
  border: none;
  border-radius: 24px;
  font-size: 21px;
  background: #1d4c76;
  color: #fff;
  display: inline-block;
  text-align: center;
  font-weight: 500;
  padding: 0 23px;
  cursor: pointer;
  letter-spacing: 1px;
}
.action-box small {
  font-size: 16px;
  color: #397b9f;
  margin: 0 0 38px;
  display: block;
}
.suggestion {
  padding-left: 0;
  padding-right: 0;
  padding-top: 52px;
  padding-bottom: 81px;
  text-align: center;
}
.suggestion h4 {
  margin: 0 0 42px;
  font-size: 21px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.items {
  position: relative;
}
.suggestion .items div {
  text-align: left;
  padding-left: 96px;
  margin: 0 auto;
  max-width: 420px;
}
.suggestion .items div:first-child {
  position: absolute;
  top: 0;
  left: 0;
}
.suggestion .items div:nth-child(2) {
  position: relative;
  left: 0px;
}
.suggestion .items div:last-child {
  position: absolute;
  top: 0;
  right: 0;
}
img {
  vertical-align: middle;
  max-width: 100%;
  border: 0;
}
.suggestion img {
  height: 76px;
  position: absolute;
  top: 0;
  left: 0;
}
.suggestion h5 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 25px;
}
.suggestion p {
  color: #6c6c6c;
  margin: 0 0 5px;
}
.result .box-main {
  padding: 0 30px 60px;
}
.result .box-main h4 {
  font-size: 24px;
  color: #2e2e2e;
  margin: 44px 0 18px;
}
.result .font-row {
  width: 1076px;
  height: 130px;
  border-radius: 6px;
  padding: 0 40px 0 32px;
  margin-bottom: 15px;
  position: relative;
  background: #74dfff;
}
.result .font-row p {
  font-size: 56px;
  line-height: 130px;
  cursor: pointer;
  padding: 5px 80px 15px 0;
  margin: 0;
  text-align: center;
}
</style>
