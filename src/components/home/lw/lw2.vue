<template>
  <div class="lw2">
    <ul class="u1">
      <li class="l1">
        <div>礼物名称</div>
        <el-select v-model="lwmc" :placeholder="options[0].label" size="mini" style="width:50%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
      <li class="l2">
        <div>礼物编号</div>
        <el-input size="small" placeholder v-model="bh" style="width:50%"></el-input>
      </li>
      <li class="l3">
        <span>从</span>
        <el-input size="small" placeholder v-model="firsttime" style="width:30%"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="endtime" style="width:30%"></el-input>
      </li>
      <el-button size="small" @click="cx" style="width:105px">搜索</el-button>
    </ul>

    <ul class="u2">
      <li class="l1">
        <div>赠送人id</div>
        <el-input size="small" placeholder v-model="input1" style="width:101.13px"></el-input>
      </li>
      <li class="l2">
        <div>受赠人id</div>
        <el-input size="small" placeholder v-model="input2" style="width:113.33px"></el-input>
      </li>
      <el-button size="small" @click="cx">导出excel</el-button>
    </ul>

    <el-table :data="tableData" border style="width: 52.9%">
      <el-table-column prop="hao" label="号" width="80"></el-table-column>
      <el-table-column prop="lwxh" label="礼物序号" width="80"></el-table-column>
      <el-table-column prop="lwmc" label="礼物名称" width="80"></el-table-column>
      <el-table-column prop="num" label="数量" width="80"></el-table-column>
      <el-table-column prop="zfid" label="赠方id" width="80"></el-table-column>
      <el-table-column prop="zfname" label="赠方昵称" width="98"></el-table-column>
      <el-table-column prop="sfid" label="受方id" width="80"></el-table-column>
      <el-table-column prop="sfname" label="受方昵称" width="99"></el-table-column>
      <el-table-column prop="time" label="时间" width="190"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "么么哒"
        }
      ],

      tableData: [
        {
          hao: "1",
          lwxh: "001",
          lwmc: "么么哒",
          num: "1",
          zfid: "112233",
          zfname: "王者风范",
          sfid: "666666",
          sfname: "小玫瑰",
          time: "2019-10-12 17:00"
        },
        {
          hao: "1",
          lwxh: "001",
          lwmc: "梦幻城堡",
          num: "1",
          zfid: "112233",
          zfname: "清华学霸",
          sfid: "666666",
          sfname: "北大学渣",
          time: "2019-10-12 17:00"
        }
      ],
      lwmc: "",

      bh: "",
      firsttime: "",
      endtime: "",
      input1: "",
      input2: ""
    };
  },

  methods: {
    cx() {
      if (
        this.lwmc.length == 0 ||
        this.bh.length == 0 ||
        this.firsttime.length == 0 ||
        this.endtime.length == 0 ||
        this.bh.input1 == 0 ||
        this.input2.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          lwmc: this.lwmc,
          bh: this.bh,
          firsttime: this.firsttime,
          endtime: this.endtime,
          input1: this.input1,
          input2: this.input2
        };
        window.console.log(sj);
        this.lwmc = "";
        this.bh = "";
        this.firsttime = "";
        this.endtime = "";
        this.input1 = "";
        this.input2 = "";
      }
    },
    fh() {
      this.$emit("fh");
    }
  }
};
</script>
<style lang="scss" scoped>
.lw2 {
  li {
    list-style: none;
  }
  .u1 {
    display: flex;
    width: 52.9%;
    .l1 {
      display: flex;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }
    .l2 {
      display: flex;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }
    .l3 {
      span {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.625rem;
        margin-left: 0.625rem;
      }
    }
  }

  .u2 {
    display: flex;
    width: 52.9%;
    .l1 {
      display: flex;
      margin-right: 1.6875rem;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }
    .l2 {
      display: flex;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }
    .el-button {
      margin-left: 24.375rem;
    }
  }

  .el-table {
    margin-left: 2.5rem;
  }
}
</style>