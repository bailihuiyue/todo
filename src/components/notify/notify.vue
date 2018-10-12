<!--  -->
<template>
    <div class="notify" :style="style">
        <span class="txt">{{txt}}</span>
        <span class="btn">关闭{{testCount}}</span>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { setInterval } from "timers";

export default {
  name: "Notification",
  data() {
    return {
      txt: "一个提示",
      style: {
        borderRadius: "5px"
      },
      test: this.$store.state.count
    };
  },
  created() {
    //console.log(this.$store.state.count);
    //this.$store.commit("updateCount");

    //console.log(this.$store.state.count);
    // setInterval(()=>{
    //   //this.updateCount()
    //   this.updateCount()
    //   console.log(this.$store.state.count)
    // },1000)

    
    this.updateCount({ num: 123 });
    console.log(this.$store.state.count);
  },
  methods: {
    ...mapMutations(["updateCount"])
  },
  computed: {
    ...mapGetters(["testCount"])
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