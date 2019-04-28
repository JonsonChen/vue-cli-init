<template>
  <el-row>
    <el-col :span="5" :offset="9">
      <h1 class="tc">登陆</h1>
      <el-form :model="userLogin" status-icon :rules="rules" ref="userLogin" label-width="100px">
        <el-form-item label="账号" prop="name">
          <el-input v-model.number="userLogin.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="userLogin.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userLogin')">提交</el-button>
          <el-button @click="toRegister()">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      userLogin: {
        pass: '',
        name: ''
      },
      rules: {
        pass: [
          { required: true, message: '不能为空' }
        ],
        name: [
          { required: true, message: '不能为空' },
          { max: 11, message: '最长11位数' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toRegister () {
      this.$router.replace({ path: '/register' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/reset.scss";
</style>
