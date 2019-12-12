<template>
  <div class="zj1">
    <div class="box1" v-if="show">
      <ul class="u1">
        <li class="l1">
          <div>用户id</div>
          <el-input size="small" placeholder v-model="id" style="width:50%"></el-input>
        </li>

        <li class="l2">
          <div>状态</div>
          <el-select v-model="zt" size="mini" style="width:50%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l3">
          <div>打款状态</div>
          <el-select v-model="dkzt" size="mini" style="width:43%">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
        <li class="l4">
          <span>从</span>
          <el-input size="small" placeholder v-model="input1" style="width:30%"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="input2" style="width:30%"></el-input>
        </li>
        <el-button size="small" @click="ss" style="width:105px">查询</el-button>
      </ul>

      <el-table
        :data="tableData"
        border
        style="width: 72.2%"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="userid" label="用户id" width="80"></el-table-column>
        <el-table-column prop="username" label="用户昵称" width="140"></el-table-column>
        <el-table-column prop="name" label="名字" width="99"></el-table-column>
        <el-table-column prop="money1" label="提现金额(元)" width="120"></el-table-column>
        <el-table-column prop="sxf" label="手续费比例" width="100"></el-table-column>
        <el-table-column prop="money2" label="实际金额" width="98"></el-table-column>
        <el-table-column prop="txfs" label="提现方式" width="99"></el-table-column>
        <el-table-column prop="dkzt" label="打款状态" width="99"></el-table-column>
        <el-table-column prop="zt" label="状态" width="99"></el-table-column>
        <el-table-column prop="txtime" label="提现申请时间" width="170"></el-table-column>
        <el-table-column label="操作" width="80">
          <el-button size="mini" @row-click="getDetails;dj(item)">详情</el-button>
        </el-table-column>
      </el-table>
    </div>

    <txxq v-if="show1" v-on:fh="fh" :list="tableData[index]"></txxq>
  </div>
</template>
<script>
import txxq from "./txxq.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "审核通过"
        },
        {
          value: "选项2",
          label: "待审核"
        },
        {
          value: "选项3",
          label: "驳回"
        },
        {
          value: "选项4",
          label: "全部"
        }
      ],

      options1: [
        {
          value: "选项1",
          label: "打款失败"
        },
        {
          value: "选项2",
          label: "未打款"
        },
        {
          value: "选项3",
          label: "已打款"
        },
        {
          value: "选项4",
          label: "全部"
        }
      ],

      tableData: [
        {
          userid: "1122",
          username: "唐三藏",
          name: "张三",
          money1: 50,
          sxf: "5%",
          money2: 49,
          txfs: "银行卡",
          dkzt: "未打款",
          zt: "待审核",
          txtime: "2019-10-17 16：00"
        },
        {
          userid: "2233",
          username: "孙悟空",
          name: "李四",
          money1: 50,
          sxf: "5%",
          money2: 49,
          txfs: "银行卡",
          dkzt: "未打款",
          zt: "待审核",
          txtime: "2019-10-17 16：00"
        }
      ],
      id: "",
      zt: "全部",
      dkzt: "全部",
      input1: "",
      input2: "",
      show: true,
      show1: false,
      index: "",
      list: {}
    };
  },
  components: { txxq },
  methods: {
    ss() {
      if (
        this.id.length == 0 ||
        this.zt.length == 0 ||
        this.dkzt.length == 0 ||
        this.input1.length == 0 ||
        this.input2.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          id: this.id,
          zt: this.zt,
          dkzt: this.dkzt,
          name1: this.input1,
          name2: this.input2
        };
        window.console.log(sj);
        this.id = "";
        this.zt = "";
        this.dkzt = "";
        this.input1 = "";
        this.input2 = "";
      }
    },
    xq() {
      this.show = !this.show;
      this.show1 = !this.show1;
    },
    fh() {
      this.show = true;
      this.show1 = false;
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.list = val;

      this.index = this.list.index;
      window.console.log(this.index);

      this.xq();
    }
  }
};
</script>
<style lang="scss" scoped>
.zj1 {
  li {
    list-style: none;
  }
  .box1 {
    .u1 {
      display: flex;
      width: 72%;
      .l2 {
        display: flex;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }
      .l1 {
        display: flex;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }

      .l3 {
        display: flex;
        widows: 201px;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 4.0625rem;
        }
      }
      .l4 {
        span {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.625rem;
          margin-left: 0.625rem;
        }
      }
    }

    .el-table {
      margin-left: 2.5rem;
    }
  }
}
</style>