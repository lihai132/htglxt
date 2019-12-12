<template>
  <div class="xy1">
    <div class="left">
      <ul class="top" style="width: 100%">
        <li>
          <div class="d1">房间id</div>
          <el-input size="small" placeholder v-model="fjid" style="width:50%"></el-input>
        </li>
        <li>
          <el-button size="small" style="width:105px" @click="cx">查询</el-button>
        </li>
      </ul>
      <el-table :data="tableData" border style="width: 100%" :show-summary="true">
        <el-table-column prop="fjid" label="房间id" width="80" style="text-align:center"></el-table-column>
        <el-table-column prop="name" label="房间名称" width="200"></el-table-column>
        <el-table-column prop="zxrs" label="在线人数" width="80"></el-table-column>
        <el-table-column prop="xyhpb" label="协议号配比" width="100" style="text-align:center"></el-table-column>
        <el-table-column prop="xyhrs" label="协议号人数" width="100"></el-table-column>
        <el-table-column prop="zrs" label="总人数" width="80"></el-table-column>
        <el-table-column prop label="操作" width="75">
          <el-button size="small" style="width:50px" @click="bj">编辑</el-button>
        </el-table-column>
      </el-table>
    </div>
    <ul class="right" v-if="show">
      <li class="r1">
        <div class="d1">协议号配比</div>
        <el-input size="small" placeholder v-model="xyh" style="width:50%"></el-input>
      </li>
      <li class="r2">
        <el-button size="small" style="width:100px" @click="qx">取消</el-button>
        <el-button size="small" style="width:100px" @click="qd">确定添加</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          fjid: "1122",
          name: "一生一世 听我的歌",
          zxrs: 50,
          xyhpb: "1:5",
          xyhrs: 250,
          zrs: 300
        }
      ],

      fjid: "",

      xyh: "",
      show: false
    };
  },
  methods: {
    cx() {
      if (this.fjid.length === 0) {
        alert("房间id不能为空");
      } else {
        window.console.log(this.fjid);
      }
    },
    bj() {
      this.show = !this.show;
    },
    qx() {
      this.show = false;
    },
    qd() {
      if (this.xyh.length === 0) {
        alert("协议号配比不能为空");
      } else {
        window.console.log(this.xyh);
        this.qx();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.xy1 {
  display: flex;

  li {
    list-style-type: none;
  }

  .left {
    .top {
      display: flex;
      padding-left: 0;
      justify-content: space-between;
      li:nth-child(1) {
        display: flex;

        .d1 {
          font-size: 1rem;
          line-height: 1.75rem;
          margin-right: 0.75rem;
        }
      }
    }
  }
  .right {
    width: 13.375rem;
    height: 111px;
    border: 1px solid #ccc;
    margin-left: 100px;
    padding: 20px 20px;
    .r1 {
      display: flex;
      justify-content: space-between;
      .d1 {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    .r2 {
      margin-top: 25px;
    }
  }
}
</style>