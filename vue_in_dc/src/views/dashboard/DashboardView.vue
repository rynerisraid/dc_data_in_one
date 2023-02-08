<template>
    <div class="main-panel">
        <!-- <div class="menus">
            <div v-for="(menu, index) in menus" @click="toPage(menu)">
                {{ menu.name }}
            </div>
        </div> -->
        <n-space vertical>
            <n-switch v-model:value="collapsed" />
            <n-layout has-sider >
            <n-layout-sider
                bordered
                collapse-mode="width"
                :collapsed-width="64"
                :width="240"
                :collapsed="collapsed"
                show-trigger
                @collapse="collapsed = true"
                @expand="collapsed = false"
            >
                <n-menu
                class="menus"
                v-model:value="activeKey"
                :collapsed="collapsed"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menus"
                />
            </n-layout-sider>
            <n-layout>
                <div style="padding:20px;width:100%">
                    <router-view></router-view>
                </div>
                
            </n-layout>
            </n-layout>
        </n-space>

        <!-- <div style="padding:20px;width:100%">
            <router-view></router-view>
        </div> -->
    </div>

</template>


<script setup>
import { AdminStore } from '../../stores/AdminStore'
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, h,ref, reactive, inject } from "vue";
import { NIcon } from "naive-ui";

import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";

const router = useRouter()
const route = useRoute()

const message = inject("message")
const axios = inject("axios")

const adminStore = AdminStore()

//菜单
/**
 let menus = [
    { name: "SQL编辑器", href: "/dashboard/sqlEditor"},
    { name: "报表视图",  href: "/dashboard/article"},
    { name: "分类管理",  href: "/dashboard/category"},
    { name: "退出", href: "logout" },
];

 */
let menus = [
    { label: "SQL编辑器", key: "/dashboard/sqlEditor",icon: renderIcon(BookIcon)},
    { label: "报表视图", key: "/dashboard/article",icon: renderIcon(BookIcon)},
    { label: "分类管理", key: "/dashboard/category",icon: renderIcon(BookIcon)},
    { label: "退出", key: "logout" },
];

//路由跳转
const toPage = (menu) => {
    if (menu.href == 'logout') {
        router.push("/login")
    } else {
        router.push(menu.href)
    }
}

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const activeKey = ref(null);
const collapsed = ref(true);

</script>

<style lang="scss" scoped>

html,body {
  padding: 0;
  margin: 0;
  height: 100%;
}

.main-panel {
    display: flex;
    color: #64676a;
    margin: 0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    height: 100%;

}

.menus {


    box-sizing: border-box;

    text-align: center;
    height: 99vh;
    border-right: 1px solid #dadada;


}


</style>