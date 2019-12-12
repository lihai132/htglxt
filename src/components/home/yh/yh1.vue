<template>
  <div class="yh1">
    <ul class="u1">
      <li class="l1">
        <div>id</div>
        <el-input size="small" placeholder v-model="id" style="width:103px"></el-input>
      </li>

      <li class="l2">
        <div>手机</div>
        <el-input size="small" placeholder v-model="sj" style="width:103px"></el-input>
      </li>

      <li class="l3">
        <div>性别</div>
        <el-select v-model="xb" size="mini" style="width:75px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
      <li class="l4">
        <div>状态</div>
        <el-select v-model="zt" size="mini" style="width:75px">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>

      <li class="l5">
        <div>归属</div>
        <el-select v-model="gs" size="mini" style="width:75px">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>

      <li class="l6">
        <span>注册时间</span>
        <span>从</span>
        <el-input size="small" placeholder v-model="time1" style="width:103px"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="time2" style="width:103px"></el-input>
      </li>
      <el-button size="small" style="width:105px" @click="cx">查询</el-button>
    </ul>
    <ul class="u2">
      <li class="l1">
        <span class="s1">财富值</span>
        <span>从</span>
        <el-input size="small" placeholder v-model="time3" style="width:103px"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="time4" style="width:103px"></el-input>
      </li>
      <li class="l2">
        <span class="s1">魅力值</span>
        <span>从</span>
        <el-input size="small" placeholder v-model="time5" style="width:103px"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="time6" style="width:103px"></el-input>
      </li>
    </ul>
    <el-table
      :data="tableData"
      border
      style="font-size: 12px;width:86.5%"
      @row-click="getDetails"
      :row-class-name="tableRowClassName"
    >
      >
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column prop="sj" label="手机" width="100"></el-table-column>
      <el-table-column prop="username" label="昵称" width="100"></el-table-column>
      <el-table-column prop="xb" label="性别" width="50"></el-table-column>
      <el-table-column prop="cfz" label="财富值" width="80"></el-table-column>
      <el-table-column prop="mlz" label="魅力值" width="80"></el-table-column>
      <el-table-column prop="dlip" label="登录ip" width="100"></el-table-column>
      <el-table-column prop="sbh" label="设备号" width="120" style="font-size: 12px"></el-table-column>
      <el-table-column prop="zf" label="剩余积分" width="80"></el-table-column>
      <el-table-column prop="zs" label="剩余砖石" width="80"></el-table-column>
      <el-table-column prop="fristtime" label="注册时间" width="130"></el-table-column>
      <el-table-column prop="endtime" label="最后登录时间" width="130"></el-table-column>
      <el-table-column prop="zt" label="状态" width="60"></el-table-column>
      <el-table-column prop="gs" label="归属" width="60"></el-table-column>

      <el-table-column label="操作" width="170">
        <el-button size="small" @row-click="getDetails;jy">禁用</el-button>
        <el-button size="small">资金明细</el-button>
      </el-table-column>
    </el-table>
    <div class="hj">
      <div class="h1">合计</div>
      <div class="h2">{{num}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "启用"
        },
        {
          value: "选项2",
          label: "禁用"
        }
      ],

      options: [
        {
          value: "选项1",
          label: "男"
        },
        {
          value: "选项2",
          label: "女"
        }
      ],

      options2: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "市场"
        },
        {
          value: "选项3",
          label: "公会"
        }
      ],

      tableData: [
        {
          id: 112233,
          sj: "+18617271159",
          username: "我是小霸王",
          xb: "男",
          cfz: 340000,
          mlz: 34000,
          dlip: "12.234.32.1",
          sbh: "1e124223234de",
          zf: 570,
          zs: 20000,
          fristtime: "2019-10-11 17:00",
          endtime: "2019-12-11 19:00",
          zt: "正常",
          gs: "市场",
          hj: 1500
        }
      ],
      id: "",
      sj: "",
      xb: "全部",
      zt: "全部",
      gs: "全部",

      time1: "",
      time2: "",
      time3: "",
      time4: "",
      time5: "",
      time6: "",
      num: ""
    };
  },

  methods: {
    cx() {
      if (
        this.id.length == 0 ||
        this.sj.length == 0 ||
        this.xb.length == 0 ||
        this.zt.length == 0 ||
        this.gs.length == 0 ||
        this.time1.length == 0 ||
        this.time2.length == 0 ||
        this.time3.length == 0 ||
        this.time4.length == 0 ||
        this.time5.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          id: this.id,
          sj: this.sj,
          xb: this.xb,
          zt: this.zt,
          gs: this.gs,
          time1: this.time1,
          time2: this.time2,
          time3: this.time3,
          time4: this.time4,
          time5: this.time5,
          time6: this.time6
        };
        window.console.log(sj);
        this.id = "";
        this.gjc = "";
        this.time1 = "";
        this.time2 = "";
        this.time3 = "";
        this.time4 = "";
        this.time5 = "";
        this.time6 = "";

        let price = 0;
        this.tableData.map(item => {
          return (price += item.hj);
        });
        this.num = price;
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.id = val.id;

      window.console.log(this.id);
      this.jy();
    },
    jy() {
      window.console.log(this.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.yh1 {
  li {
    list-style: none;
  }

  .u1 {
    display: flex;
    width: 90.1%;
    padding-bottom: 20px;

    .l1 {
      display: flex;
      margin-right: 20px;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }

    .l2 {
      display: flex;
      margin-right: 20px;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 33px;
      }
    }

    .l3 {
      display: flex;

      justify-content: flex-start;
      margin-right: 30px;

      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 2rem;
      }
    }

    .l4 {
      display: flex;

      justify-content: flex-start;
      margin-right: 20px;

      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 2rem;
      }
    }

    .l5 {
      display: flex;

      justify-content: flex-start;
      margin-right: 100px;

      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 2rem;
      }
    }
    .l6 {
      margin-right: 100px;
      width: 365px;
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
    .l1,
    .l2 {
      display: flex;
      margin-right: 100px;
      width: 365px;
      span {
        font-size: 1rem;
        line-height: 2rem;
      }
      .el-input {
        margin-right: 10px;
        margin-left: 10px;
      }
      .s1 {
        margin-right: 30px;
      }
    }
  }

  .el-table {
    margin-left: 2.5rem;
  }

  .hj {
    margin-left: 2.5rem;
    display: flex;
    .h1 {
      width: 78px;
      font-size: 16px;
      line-height: 55px;
      border: 1px solid #ebeef5;
    }
    .h2 {
      width: 99px;
      font-size: 16px;
      line-height: 55px;
      border: 1px solid #ebeef5;
    }
  }
}
</style>