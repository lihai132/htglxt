<template>
  <div class="yh3">
    <ul class="u1">
      <li class="l1">
        <div class="d1">id</div>
        <el-input size="small" placeholder v-model="id" style="width:103px"></el-input>
      </li>
      <li class="l2">
        <div class="d1">手机</div>
        <el-input size="small" placeholder v-model="sj" style="width:103px"></el-input>
      </li>

      <li class="l5">
        <span>从</span>
        <el-input size="small" placeholder v-model="first" style="width:103px"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="end" style="width:103px"></el-input>
      </li>

      <li class="l3">
        <div class="d1">消费点</div>
        <el-select v-model="xfd" size="mini" style="width:75px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
      <li class="l4" style="width:80px">
        <el-button size="small" style="width:100%" @click="cx">查询</el-button>
        <el-button size="small" style="width:100%">导出excel</el-button>
      </li>
    </ul>
    <el-table
      :data="tableData"
      border
      style="width:54.3%; margin-left: 40px"
      show-summary
      :summary-method="getSummaries"
    >
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column prop="sj" label="手机" width="150"></el-table-column>
      <el-table-column prop="username" label="昵称" width="150"></el-table-column>
      <el-table-column prop="money" label="消费金额" width="80"></el-table-column>
      <el-table-column prop="xfd" label="消费点" width="80"></el-table-column>
      <el-table-column prop="lw" label="礼物" width="150"></el-table-column>
      <el-table-column prop="num" label="数量" width="50"></el-table-column>
      <el-table-column prop="time" label="消费时间" width="150"></el-table-column>
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
          sj: 18617271159,
          username: "我是小霸王",
          money: 100,
          xfd: "直播",
          lw: "恋爱了",
          num: 1,
          time: "2019-10-12 18:00"
        }
      ],
      xfd: "全部",
      sj: "",
      id: "",
      first: "",
      end: "",
      money: "",
      num: ""
    };
  },

  methods: {
    cx() {
      if (this.id.length === 0 || this.sj.length === 0) {
        alert("查询的基本数据不能为空");
      } else {
        let sj = {
          id: this.id,
          sj: this.sj,
          firsttime: this.first,
          endtime: this.end,
          xfd: this.xfd
        };
        window.console.log(sj);
        this.id = "";
        this.sj = "";
        this.first = "";
        this.end = "";

        let price = 0;
        this.tableData.map(item => {
          return (price += item.money);
        });
        this.money = price;

        let num = 0;
        this.tableData.map(item => {
          return (num += item.num);
        });
        this.num = num;
      }
    },
    getSummaries(param) {
      const { columns } = param;

      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        }
        //this.closeList等等是后台返回的总的数据，然后取值到这里
        switch (column.property) {
          case "money":
            sums[index] = this.money;
            break;
          case "num":
            sums[index] = this.num;
            break;
          default:
            break;
        }
      });

      return sums;
    }
  }
};
</script>
<style lang="scss" scoped>
.yh3 {
  li {
    list-style: none;
  }
  .u1 {
    display: flex;
    padding-left: 0;
    padding-bottom: 30px;

    li {
      display: flex;
    }
    .l1 {
      margin-right: 30px;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 7px;
      }
    }

    .l2 {
      margin-right: 100px;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 7px;
      }
    }

    .l3 {
      margin-right: 100px;
      .d1 {
        font-size: 16px;
        line-height: 28px;
        margin-right: 7px;
      }
    }

    .l5 {
      display: flex;
      margin-right: 30px;
      width: 270px;
      span {
        font-size: 1rem;
        line-height: 2rem;
        margin-left: 7px;
        margin-right: 7px;
      }
    }
  }
}
</style>