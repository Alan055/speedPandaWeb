<template>
  <div class="header">
    <el-row>
      <el-col :span="24-2*nav.length" class="left">一站触达美好生活</el-col>
      <el-col class="right"  :span="2" v-for="(v,i) in nav" :key="i" :class="{'active':navIndex==v.value}"
              @click.native="$router.push({path:v.value})">
        <strong>{{v.label }}</strong>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          {label: '首页', value: '/'},
          {label: '媒体资讯', value: '/mediaInformation'},
          {label: '关于我们', value: '/aboutWe'},
        ],
      }
    },
    computed: {
      navIndex() {
        return this.$route.path
      }
    },
    watch: {},
    methods: {},
    created() {

    },
    mounted() {
    },
  }
</script>

<style lang='less' scoped>
  .header {
    height: 76px;
    background: #333333;
    color: #ccc;
    padding: 0 20px;
    line-height: 76px;
    .left {
      font-weight: 600;
      font-size: 24px;
      text-align: left;
    }
    .right{
      cursor: pointer;
      strong {
        font-weight: normal;
        padding-bottom: 10px;
      }
    }

    .active {
      strong {
        border-bottom: 1px solid #797979;
      }

    }

  }
</style>
