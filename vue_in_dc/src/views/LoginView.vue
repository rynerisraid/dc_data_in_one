<template>
    <div class="login-panel">
        <div title="管理后台登录">
            <form :rules="rules" :model="admin">
                    <input v-model="admin.account" placeholder="请输入账号" />
                    <input v-model="admin.password" type="password" placeholder="请输入密码" />
            </form>
                <checkbox v-model:checked="admin.rember" label="记住我" />
                <button @click="login">登录</button>

        </div>
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
    account: [
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
    account: localStorage.getItem("account") || "",
    password: localStorage.getItem("password") || "",
    rember: localStorage.getItem("rember") == 1 || false
})




/**登录 */
const login = async () => {
    console.log('log in')

}

</script>

<style lang="scss" scoped>
.login-panel {
    width: 500px;
    margin: 0 auto;
    margin-top: 130px;
}

</style>