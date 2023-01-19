<template>
  <div class="auth-panel">
      <n-card title="Too Simple">
        <n-tabs default-value="signin" size="large" justify-content="space-evenly">
            <n-tab-pane name="signin" tab="登录">
                <n-form :rules="rules" :model="admin">
                <n-form-item path="account" label="用户名">
                    <n-input v-model:value="admin.username" placeholder="请输入账号" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                    <n-input v-model:value="admin.password" type="password" placeholder="请输入密码" />
                </n-form-item>
            </n-form>
                <n-checkbox v-model:checked="admin.rember" label="记住我" />
                <n-button type="primary" block secondary strong @click="signin">
                    登录
                </n-button>
            </n-tab-pane>

            <n-tab-pane name="signup" tab="注册">
                <n-form>
                    <n-form-item-row label="用户名">
                        <n-input v-model:value="admin.username" placeholder="请输入账号" />
                    </n-form-item-row>
                    <n-form-item-row label="密码">
                        <n-input v-model:value="admin.password" type="password" placeholder="请输入密码" />
                    </n-form-item-row>
                    <!-- <n-form-item-row label="重复密码">
                        <n-input />
                    </n-form-item-row> -->
                </n-form>
                <n-button type="primary" block secondary strong @click="signup">
                    注册
                </n-button>
            </n-tab-pane>
          
        </n-tabs>
      </n-card>
  </div>
  
</template>

<script setup>

import { ref, reactive, inject } from 'vue'
import { AdminStore } from '../stores/AdminStore'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()


//全局使用 axios 然后 在这个页面中 使用 inject
const axios = inject("axios")
const message = inject('message')

const adminStore = AdminStore()

/**验证表单规则 */
let rules = {
    username: [
      { required: true, message: "请输入账号", trigger: "blur" },
      { min: 3, max: 12, message: "账号长度在 3 到 12 个字符", trigger: "blur" },
  ],
  password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur" },
  ],
};

/**管理员登录数据 */
const admin = reactive({
    username: localStorage.getItem("username") || "",
    password: localStorage.getItem("password") || "",
    rember: localStorage.getItem("rember") == 1 || false
})


/**登录 
const login = async () => {
  let result = await axios.post("/auth/login", {
      account: admin.account,
      password: admin.password
  });
  console.log(result)
  if (result.data.code == 200) {
      adminStore.token = result.data.data.token
      adminStore.account = result.data.data.account
      adminStore.id = result.data.data.id

      //把数据存储到localStorage
      if (admin.rember) {
          localStorage.setItem("account", admin.account)
          localStorage.setItem("password", admin.password)
          localStorage.setItem("rember", admin.rember ? 1 : 0)
      }
      router.push("/dashboard")
      message.info("登录成功")
  } else {
      message.error("登录失败")
  }
}
*/

/**注册函数 */
const signup = async()=>{
    console.log('siginup',{
        username: admin.username,
        password: admin.password
    })
    let result = await axios.post("/auth/signup",{
        username: admin.username,
        password: admin.password
    });
    //console.log(result)
  if (result.data.code === 200 && result.data.msg==='ok') {
      //adminStore.token = result.data.data.token
      adminStore.username = result.data.username
      //adminStore.id = result.data.data.id
      //把数据存储到localStorage
      message.info(`注册成功, ${adminStore.username}`)
  } else {
      message.error(`注册失败, 账号 ${result.data.username} 已存在`)
  }
}

const signin = async()=>{
    console.log('signin')
    console.log('signin',{username: admin.username,password:admin.password})
    let result = await axios({
        url:"/auth/signin", 
        params:{
            username: admin.username,
            password: admin.password
        }
    });

    console.log(result)

    if (result.data.code == 200 && result.data.msg =='ok') {
        adminStore.token = result.data.data.token
        adminStore.username = result.data.data.username
        adminStore.id = result.data.data.id

        //把数据存储到localStorage
        if (admin.rember) {
            localStorage.setItem("username", admin.username)
            localStorage.setItem("password", admin.password)
            localStorage.setItem("rember", admin.rember ? 1 : 0)
        }
        router.push("/")
        message.info("登录成功")
    } else {
        message.error("登录失败")
    }
}


</script>

<style lang="scss" scoped>
.auth-panel {
  width: 660px;
  margin: 0 auto;
  margin-top: 130px;
}

</style>