<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="add.html">添加</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a>编辑</a> &nbsp;&nbsp;
              <a>删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    loadDate() {
      axios({
        url: "http://localhost:3000/user"
      }).then(result => {
        console.log(result.data);
        this.list = result.data;
      });
    }
  },
  created() {
    this.loadDate();
  }
};
</script>

<style>
</style>