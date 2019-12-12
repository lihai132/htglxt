<template>
  <div class="jb">
    <ul class="u1">
      <li class="l1">
        <div>房间id</div>
        <el-input size="small" placeholder v-model="fjid" style="width:103px"></el-input>
      </li>

      <li class="l2">
        <div>用户id</div>
        <el-input size="small" placeholder v-model="yhid" style="width:103px"></el-input>
      </li>

      <li class="l3">
        <div>属性</div>
        <el-select v-model="sx" size="mini" style="width:106px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>

      <li class="l4">
        <div>类型</div>
        <el-select v-model="lx" size="mini" style="width:106px">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
      <li class="l5">
        <span>从</span>
        <el-input size="small" placeholder v-model="first" style="width:103px"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="end" style="width:103px"></el-input>
      </li>
      <el-button size="small" style="width:105px" @click="cx">查询</el-button>
    </ul>

    <el-table
      :data="tableData"
      border
      style="width: 90%"
      @row-click="getDetails"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="dh" label="单号" width="100"></el-table-column>
      <el-table-column prop="time" label="举报时间" width="180"></el-table-column>
      <el-table-column prop="jbid" label="举报id" width="100"></el-table-column>
      <el-table-column prop="jbname" label="举报人昵称" width="120"></el-table-column>
      <el-table-column prop="phonenumber" label="联系方式" width="130"></el-table-column>
      <el-table-column prop="sx" label="属性" width="90"></el-table-column>
      <el-table-column prop="bjbid" label="被举报id" width="120"></el-table-column>
      <el-table-column prop="lx" label="类型" width="120"></el-table-column>
      <el-table-column prop="jt" label="详情截图" width="100"></el-table-column>
      <el-table-column prop="ms" label="描述" width="245"></el-table-column>
      <el-table-column prop="zt" label="状态" width="80"></el-table-column>
      <el-table-column label="操作" width="93">
        <el-button size="small" @row-click="getDetails;dj">{{cz}}</el-button>
      </el-table-column>
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
          label: "举报个人"
        },
        {
          value: "选项2",
          label: "举报房间"
        }
      ],

      options1: [
        {
          value: "选项1",
          label: "泄漏隐私"
        },
        {
          value: "选项2",
          label: "人生攻击"
        },
        {
          value: "选项3",
          label: "淫秽色情"
        },
        {
          value: "选项4",
          label: "垃圾广告"
        },
        {
          value: "选项5",
          label: "敏感信息"
        },
        {
          value: "选项6",
          label: "侵权"
        }
      ],

      tableData: [
        {
          dh: 1122,
          time: "2019-10-01 11:00",
          jbid: "1122",
          jbname: "小小鱼",
          phonenumber: 12345678912,
          sx: "个人",
          bjbid: "3344",
          lx: "人生攻击",
          jt: "1.png",
          ms: "骂人",
          zt: "未处理"
        },
        {
          dh: 4455,
          time: "2019-10-01 11:00",
          jbid: "1234",
          jbname: "小小鱼",
          phonenumber: 12345678912,
          sx: "个人",
          bjbid: "7896",
          lx: "淫秽色情",
          jt: "2.png",
          ms: "传播淫秽色情",
          zt: "未处理"
        }
      ],
      fjid: "",
      yhid: "",
      sx: "举报个人",
      lx: "人身攻击",
      first: "",
      end: "",
      cz: "处理",
      val: {}
    };
  },

  methods: {
    cx() {
      if (
        this.fjid.length == 0 ||
        this.yhid.length == 0 ||
        this.first.length == 0 ||
        this.end.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          fjid: this.fjid,
          yhid: this.yhid,

          sx: this.sx,
          lx: this.lx,
          time1: this.first,
          time2: this.end
        };
        window.console.log(sj);
        this.fjid = "";
        this.yhid = "";
        this.first = "";
        this.end = "";
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.val = val;

      this.index = this.val.index;
      window.console.log(this.index);

      this.dj();
    },
    dj() {
      let index = this.index;
      this.tableData[index].zt = "已处理";
      let sj = {
        dh: this.tableData[index].dh,
        zt: this.tableData[index].zt
      };
      window.console.log(sj);
    }
  }
};
</script>
<style lang="scss" scoped>
.jb {
  li {
    list-style: none;
  }
  .u1 {
    display: flex;
    width: 79.1%;
    padding-bottom: 20px;

    .l1,
    .l2 {
      display: flex;
      margin-right: 30px;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 47px;
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
      margin-right: 162px;

      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 2rem;
      }
    }
    .l5 {
      margin-right: 30px;
      width: 278px;
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
</style>