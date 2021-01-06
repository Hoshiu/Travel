<template>
  <div id="app">
    <!-- 显示当前路由地址所对应的内容 -->
    <keep-alive exclude="Datail">
      <router-view/>
    </keep-alive>
  </div>
</template>