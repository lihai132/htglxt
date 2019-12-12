<template>
  <div class="home">
    <el-container style="height: 57.5625rem; border: 1px solid #fff">
      <el-aside width="200px" style="background-color: #fff">
        <el-menu
          :default-openeds="list"
          style="height:100%"
          router
          @open="handleOpen"
          :default-active="currentMenu"
        >
          <el-submenu index="1">
            <template slot="title">礼物管理</template>
            <el-menu-item index="/lw1">礼物配置</el-menu-item>

            <el-menu-item index="/lw2">礼物记录</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">资金管理</template>
            <el-menu-item index="/zj1">提现申请</el-menu-item>

            <el-menu-item index="/zj2">提现设置</el-menu-item>
            <el-menu-item index="/zj3">充值记录</el-menu-item>
            <el-menu-item index="/zj4">数据图表</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">房间管理</template>
            <el-menu-item index="/fj1">房间分类</el-menu-item>
            <el-menu-item index="/fj2">房间列表</el-menu-item>
            <el-menu-item index="/fj3">房间数据</el-menu-item>
          </el-submenu>
          <el-menu-item index="/jb">
            <span slot="title">举报管理</span>
          </el-menu-item>

          <el-menu-item index="/gg">
            <span slot="title">公告管理</span>
          </el-menu-item>

          <el-submenu index="6">
            <template slot="title">用户管理</template>
            <el-menu-item index="/yh1">用户列表</el-menu-item>
            <el-menu-item index="/yh2">用户归属</el-menu-item>
            <el-menu-item index="/yh3">资金明细</el-menu-item>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">协议号</template>
            <el-menu-item index="/xy1">协议号列表</el-menu-item>
            <el-menu-item index="/xy2">协议号设置</el-menu-item>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">砸蛋</template>
            <el-menu-item index="/zd1">数据总览</el-menu-item>
            <el-menu-item index="/zd2">数据查询</el-menu-item>
            <el-menu-item index="/zd3">参数设置</el-menu-item>
          </el-submenu>

          <el-menu-item index="/qx">
            <span slot="title">权限设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["1"],

      currentMenu: "/lw1"
    };
  },

  created() {
    this.getUrl();
  },

  methods: {
    handleOpen(key, keyPath) {
      window.console.log(key, keyPath);
      let i = key.toString();
      this.list.splice(0, 1, i);
    },

    getUrl() {
      let self = this;
      let currentUrl = window.location.href;
      self.currentMenu = currentUrl.split("#")[1];
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;
}

.home {
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  .el-container {
    .el-aside {
      .el-menu {
        height: 100%;
      }
    }
  }
}
</style>