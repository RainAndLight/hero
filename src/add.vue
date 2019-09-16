<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          v-model="fromData.name"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          v-model="fromData.gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="性别"
        />
      </div>

      <button type="submit" class="btn btn-success" @click="add">添加</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fromData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    add() {
      if (this.fromData.name && this.fromData.gender) {
        axios({
          url: "http://localhost:3000/user",
          method: "post",
          data: this.fromData
        }).then(() => {
          this.$router.push("/heroes");
        });
      } else {
        alert("不能为空");
      }
    }
  }
};
</script>

<style>
</style>