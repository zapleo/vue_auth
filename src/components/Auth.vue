<template>
  <el-main class="main-frame">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16" class="main-block">
        <el-col :span="13">
        <div class="first-block">
          <el-row type="flex" justify="center">
            <el-col :span="14"><h1>Login to your account</h1></el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="16">
              <div class="talent-celeb">
                <i class="el-icon-star-on"></i>
                <span style="color: white">talent</span><span style="color: #aaabad">2</span><span style="color: #d8255d; text-shadow: 1px 1px 2px #901138, 0 0 1em #ff014f;">celeb</span>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="6">
              <div class="separator"></div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="12">
              <div class="talent-discovery">Talent Discovery<br>and Delivery</div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="6">
              <div class="separator"></div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="6">
              <div class="learn-more">Learn more</div>
            </el-col>
          </el-row>
          <ul class="bottom-text">
            <li style="margin-left: -20px">2017 All Rights Reserved</li>
            <li style="margin-left: 60px"><a href="#">Contact Usa</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Help And Faq</a></li>
          </ul>
        </div>
        </el-col>
        <el-col :span="11">
          <div class="two-block">
            <el-col :span="24" class="login-with-api">
              <el-row type="flex" justify="center">
                <el-button class="facebook-btn" round>
                  <i class="fab fa-facebook-f icon"></i>
                  <span class="login-with-api-text"> Login with facebook</span>
                </el-button>
              </el-row>
              <el-row type="flex" justify="center">
                <el-button class="twitter-btn" round>
                  <i class="fab fa-twitter icon"></i>
                  <span class="login-with-api-text"> Login with twitter</span>
                </el-button>
              </el-row>
              <el-row type="flex" justify="center">
                <el-button class="google-btn" round>
                  <i class="fab fa-google-plus-g icon"></i>
                  <span class="login-with-api-text"> Login with google</span>
                </el-button>
              </el-row>
            </el-col>

              <el-col :span="24">
                <el-row type="flex" justify="center">
                  <div class="or">
                    <strong>or</strong>
                  </div>
                </el-row>

                <el-row type="flex" justify="center">
                <div class="login-form">
                <el-form :model="authForm" ref="authForm" label-width="120px" class="demo-dynamic">
                  <el-col :span="24">
                    <el-row type="flex" justify="center">
                       <input placeholder="Email Address" v-model="authForm.email" class="login-inputs"  type="email" required>
                    </el-row>
                    <el-row type="flex" justify="center">
                      <input type="password" placeholder="Password" v-model="authForm.password" auto-complete="off" class="login-inputs" required>
                    </el-row>
                  </el-col>
                  <el-col :span="24" class="bottom-login-block">
                    <el-row type="flex" justify="space-between">
                    <el-checkbox v-model="authForm.checked">Keep me signed in</el-checkbox>
                    <a class="forgot-password" href="#">Forgot password</a>
                    </el-row>
                  <el-row type="flex" justify="center">
                    <el-button class="login-btn" @click="submitForm('authForm')" round><i class="fas fa-unlock-alt"></i> Login NOW</el-button>
                  </el-row>
                    <el-row type="flex" justify="space-between" class="bottom-login-text">
                      <span class="dont-have-acc">Dont have an account?</span>
                      <a class="forgot-password" href="#">Register now</a>
                    </el-row>
                  </el-col>
                </el-form>
                </div>
                </el-row>
              </el-col>

          </div>
        </el-col>
      </el-col>
    </el-row>
</el-main>
</template>

<script>
import ElMain from "element-ui/packages/main/src/main";

export default {
  components: {ElMain},
  name: 'Auth',
  data () {
    return {
      authForm: {
        email: '',
        password: '',
        checked: true
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$store.dispatch('login', this).then(() => {
        this.$router.push({path: '/profile'});
      })

    }
  },
  created: function () {
    if(this.$store.getters.authorized){
      this.$router.push({path: '/profile'});
    }
  }
}
</script>
<style>
  html {
    /*min-height: 800px;*/
    background-image: url(/static/images/cork-wallet.png);
    font-family: "Helvetica Neue";
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .main-frame h1 {
    margin-top: 20px;
    text-transform: uppercase;
    color: whitesmoke;
    font-size: 18px;
    font-weight: bold;
  }
  .main-frame .talent-celeb {
    margin-top: 120px;
    font-size: 28px;
    text-align: center;
    font-weight: bold;
  }
  .main-block {
    border-radius: 40px 40px 0 0;
    color: inherit;
    display: block;
  }
  .first-block {
    border-radius: 20px 0 0 20px;
    background-color: #d8255d;
    height: 580px;
    width: 100%;
  }
  .two-block {
    border-radius: 0 20px 20px 0;
    background-color: ghostwhite;
    height: 580px;
    width: 100%;
  }
  .separator {
    margin-top: 40px;
    background-color: white;
    border-top: 2px solid white;
  }
  .talent-discovery {
    margin-top: 50px;
    font-weight: bolder;
    text-align: center;
    color: #fbe8f8;
    font-size: 20px;
    letter-spacing: 1.5px;
  }
  .learn-more {
    text-transform: uppercase;
    margin-top: 30px;
    font-size: 12px;
    /*font-weight: bolder;*/
    text-align: center;
    color: #d4c2d1;
  }
  .bottom-text {
    position: absolute;
    bottom: 0px;
  }
  .bottom-text li {
    display: inline;
    margin-right: 5px;
    padding: 3px;
    color: #aaabadab;
    font-size: 12px;
  }
  .login-with-api {
    margin-top: 50px;
  }
  .login-with-api .login-with-api-text {
    font-size: 10px;
    vertical-align: text-top;
  }
  .login-with-api .icon {
    vertical-align: bottom;
    margin-right: 8px;
    font-size: 18px;
  }
  .login-with-api .el-button {
    text-transform: uppercase;
    width: 80%;
    margin-top: 10px;
    max-height: 40px;
    color: #ffffff;
  }
  .facebook-btn {
    background-color: #485892!important;
  }
  .twitter-btn {
    background-color: #76a9ea!important;
  }
  .google-btn {
    background-color: #ea290e!important;
  }
  .fa-facebook-f {
    margin-left: 10px;
  }
  .or {
    width: 80%;
    border-top: 1px solid #aaabad;
    display: block;
    line-height: 1px;
    margin: 50px 0 20px;
    position: relative;
    text-align: center;
  }
  .or strong {
    color: #77727a;
    background: #f8f8ff;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 0 30px;
    text-transform: uppercase;
  }
  .login-form {
    width: 80%;
  }
  .login-form .el-form-item__content {
    margin-left: 0px!important;
  }
  .login-btn {
    margin-top: 30px!important;
    background-color: #262626!important;
    text-transform: uppercase;
    width: 100%;
    color: #ffffff!important;
  }
  .fa-unlock-alt {
    margin-right: 10px;
  }
  .login-inputs {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-family: 'Arvo';
    font-size: 12px;
    height: 50px;
    padding: 10px 0px;
    position: relative;
    top: 50%;
    width: 100%;
  }
  .el-checkbox__inner {
    background-color: ghostwhite!important;
    border-color: #c0c4cc!important;
  }
  .el-checkbox__inner:after {
    content: "";
    display: block;
    width: 3px;
    height: 7px;
    border: solid;
    border-color: #9E4F74!important;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
  .el-checkbox__label {
    color: #aaabad!important;
    font-size: 12px!important;
    text-transform: uppercase;
  }
  .forgot-password {
    color: #9E4F74;
    font-size: 12px;
    text-transform: uppercase;
  }
  .dont-have-acc {
    color: #aaabad;
    font-size: 12px;
    text-transform: uppercase;
  }
  .bottom-login-text {
    margin-top: 30px;
  }
  .bottom-login-block {
    margin-top: 20px;
  }
</style>
