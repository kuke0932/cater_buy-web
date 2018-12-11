<template>
  <div class="big_container" style="height:100%;">
    <view-box ref="viewBox">
      <div class="container">
        <div class="logo_box">
          <p>冀光餐饮采购</p>
        </div>
        <div class="login_infor">
          <input class="phone" type="text" value=""  placeholder="手机号">
          <input class="password" type="text" value=""  placeholder="密码">
        </div>
        <div class="login_btn" @click="login">
            <span>登录</span>
            <img src="../../assets/icons/login.svg" alt="">
        </div>
        <div class="forget_pwd">
          <router-link to="" style="color:#fff;">忘记密码？</router-link>
        </div>
      </div>
    </view-box>
  </div>

</template>

<script>
  import { ViewBox, XInput, XButton } from 'vux'

  export default {
    components: {
      ViewBox,
      XInput,
      XButton
    },
    data () {
      return {}
    },
    methods: {
      login () {
        this.$router.push({ path: '/stall' })
      }
    }
  }
</script>

<style lang="less" scoped>
  .big_container{
    position: absolute;
    background: url("../../assets/loginbg.png") no-repeat;
    background-size: 100%;
  }
  .container {
    padding: 0 30px;
    .logo_box {
      text-align: center;
      margin: 5rem 0 9rem 0;
      p {
        font-size: 1.8em;
        font-weight: 400;
        color: #00BAAD;
      }
    }
    .login_infor{
      text-align: center;
      input{
        background: 0;
        border: 0;
        border-bottom: 1px solid #ddd;
        color: #fff;
        text-align: center;
        width: 85%;
        height: 40px;
        font-size: 1rem;
        margin-bottom: 2rem;
      }
    }
    .login_btn{
      width: 85%;
      margin: 2rem auto 1rem;
      text-align: center;
      border-radius: 50px;
      padding:1rem;
      color: #fff;
      background: #4AA0D5;
      font-size: 0.9rem;
      position: relative;
      img{
        vertical-align: middle;
        position: absolute;
        right:1rem;
        top: 21%;
      }
    }
    .forget_pwd{
      text-align: center;
      color: #fff;
      padding: 1rem;
      font-size: 0.7rem;
    }
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }
  input:focus{
    outline: 0;
  }
</style>
