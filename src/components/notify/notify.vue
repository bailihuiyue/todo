<!--  -->
<template>
    <div class="notify" :style="style">
        <span class="txt">{{txt}}</span>
        <span class="btn">关闭</span>
    </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      txt: "一个提示",
      style: {
        borderRadius: "5px"
      }
    };
  }
};
</script>
<style scoped>
.notify {
  width: 200px;
  height: 50px;
  background-color: #000;
}
.txt {
  float: left;
  color: #fff;
  line-height: 50px;
  margin-left: 10px;
}
.btn {
  float: right;
  color: #fff;
  line-height: 50px;
  margin-right: 10px;
}
</style>