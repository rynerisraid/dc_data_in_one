<template>
  <div class="container">
    <div class="header" >
      <span class="header-logo">Kate</span>
      <span class="header-txt">我在等风也等你</span>
      <div class="header-right">
        <div @click="homePage">首页</div>
        <div>
            <n-popselect @update:value="searchByCategory" v-model:value="selectedCategory" :options="categortyOptions" trigger="click">
                <div>分类<span>{{ categoryName }}</span></div>
            </n-popselect>
        </div>
        <div @click="dashboard">后台</div>
      
      </div>
      
      
      
    </div>
    <n-divider />
    <div class="footer">
            <div>Power by XXXX</div>
            <div>XICP备XXXXX号-1</div>
        </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.container {
    min-width: 1200px;
    margin: 0 auto;
}


.header{
    background-color: #fff;
    padding: .4rem;
    overflow: hidden;
    height: 2.8rem;
    border-bottom: 1px solid #ccc;
    display: flex;;
}

.header-logo{
    color: #1e90ff;
    font-size: 1.4rem;
    text-align: left;
}

.header-txt{
    font-size: .6rem;
    color: #999;
    display: inline-block;
    padding-left: .3rem;
}

.header-right{
    font-size: .6rem;
    color: #999;
    display: flex;
    padding-right: .3rem;
    position:absolute;
    margin-right: .3rem;
}



.footer {
    text-align: center;
    line-height: 25px;
    color: #64676a;
}


</style>