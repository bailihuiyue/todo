<!--  -->
<template>
    <div class="notify" :style="style">
        <span class="txt">{{txt}}</span>
        <span class="btn">关闭{{testCount}}</span>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[1,2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps" />
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import { setInterval } from "timers";

export default {
  name: "Notification",
  data() {
    return {
      txt: "一个提示",
      style: {
        borderRadius: "5px"
      },
      test: this.$store.state.count,
      radio: "1",
      data2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
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