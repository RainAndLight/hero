<template>
  <div>
    <header-a></header-a>
    <div class="container-fluid">
      <div class="row">
        <left-a></left-a>
        <router-view class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 容器 -->
          <!-- 某一个路由才是英雄列表 -->
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>

import header from "./header";
import list from "./list";
import left from "./left";
export default {
  name: "app",
  components: {
    "header-a": header,
    "left-a": left,
    "list-a": list
  }
};
</script>

<style>
</style>
