<template>
  <div>
    <img :src="img" style="width: 100px; height: 100px" title="点击上传" @click="onclickImg" />
    <input ref="file" type="file" accept="image/*" style="display: none" @change="preview" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ''
    }
  },
  methods: {
    // 点击图片唤起本地文件夹
    onclickImg: function () {
      this.$refs.file.click()
    },
    // 预览图片
    preview: e => {
      const _this = this
      const file = e.target.files[0]
      if (!file) {
        return
      }
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = () => {
        _this.img = this.result
      }
    },
    // 上传图片
    uploadImg: () => {
      const url = '/upload'
      const file = this.$refs.file.files[0]
      if (!file) {
        return
      }
      const format = new FormData()
      format.append('file', file)
      this.$axios.post(url, format).then(response => {
        // 上传后逻辑
      })
    }
  }
}
</script>
