<template>
  <div class="xy2">
    <ul class="u1">
      <li class="l1">
        <div class="dd">默认协议号配比</div>
        <el-input size="small" v-model="xyhpb" style="width:6%"></el-input>
      </li>
      <li class="l2">
        <div class="dd">创建房间后</div>
        <div class="xx">
          <el-radio v-model="radio" label="自动配比">自动配比</el-radio>
          <el-radio v-model="radio" label="手动配比">手动配比</el-radio>
        </div>
      </li>
      <li class="l3">
        <div class="dd">是否开启协议号</div>
        <div class="xx">
          <el-radio v-model="radio1" label="全部开启">全部开启</el-radio>
          <el-radio v-model="radio1" label="全部关闭">全部关闭</el-radio>
        </div>
      </li>
    </ul>
    <div class="d1">
      <el-button size="small" style="width:50px" @click="qr">确认</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xyhpb: "",
      radio: "自动配比",
      radio1: "全部开启"
    };
  },
  methods: {
    qr() {
      if (this.xyhpb.length === 0) {
        alert("协议号配比不能为空");
      } else {
        let sj = {
          xyhpb: this.xyhpb,
          cjh: this.radio,
          zd: this.radio1
        };
        window.console.log(sj);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.xy2 {
  li {
    list-style: none;
    padding-bottom: 15px;
  }
  .u1 {
    .l1 {
      display: flex;
      .dd {
        margin-right: 15px;
        font-size: 16px;
        line-height: 32px;
      }
    }
    .l2 {
      display: flex;
      .dd {
        margin-right: 48px;
        font-size: 16px;
        line-height: 32px;
      }
      .xx {
        margin-top: 4px;
      }
    }
    .l3 {
      display: flex;
      .dd {
        margin-right: 15px;
        font-size: 16px;
        line-height: 32px;
      }
      .xx {
        margin-top: 4px;
      }
    }
  }

  .d1 {
    margin-left: 40px;
  }
}
</style>