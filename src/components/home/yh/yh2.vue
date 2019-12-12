<template>
  <div class="yh2">
    <ul class="u1">
      <li class="l1">
        <div class="d1">id</div>
        <el-input size="small" placeholder v-model="id" style="width:103px"></el-input>
      </li>
      <li class="l2">
        <div class="d1">手机</div>
        <el-input size="small" placeholder v-model="sj" style="width:103px"></el-input>
      </li>

      <li class="l3">
        <div class="d1">归属</div>
        <el-select v-model="gs" size="mini" style="width:75px">
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
      </li>
    </ul>
    <el-table :data="tableData" border style="width:37.8%">
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column prop="sj" label="手机" width="230"></el-table-column>
      <el-table-column prop="username" label="昵称" width="230"></el-table-column>
      <el-table-column prop="gs" label="归属" width="80"></el-table-column>
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
          gs: "公会"
        }
      ],
      gs: "全部",
      sj: "",
      id: ""
    };
  },

  methods: {
    cx() {
      if (this.id.length === 0 || this.sj.length == 0) {
        alert("查询的基本数据不能为空");
      } else {
        let sj = {
          id: this.id,
          sj: this.sj,
          gs: this.gs
        };
        window.console.log(sj);
        this.id = "";
        this.sj = "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.yh2 {
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
      margin-right: 30px;
      .d1 {
        font-size: 16px;
        line-height: 28px;
        margin-right: 7px;
      }
    }
  }
}
</style>