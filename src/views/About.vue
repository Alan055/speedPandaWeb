<template>
  <div class="about">
    <div class="top">
      <h1>我们的团队</h1>
      <p>中盟盛世投资控股（深圳）有限公司于2017年08月17日成立。团队由移动互联网、金融、IT界专业人士组成，目前拥有400多人，成员大多来自腾讯、阿里巴巴等互联网领跑企业，在互联网金融、渠道拓展、商业化等方面有着丰富的经验，与兴业银行签订业务合作协议。</p>
      <p>团队历经多年实战经验累积，致力为用户提供高效、安全、优质的全方面互联网服务，专注打造人与机构的连接，以推出贴合需求的场景化的金融产品项目，致力于建设一个合法、合规、专业、高效的金融信息服务平台。</p>
    </div>
    <div class="content">
      <h3>客服联系热线</h3>
      <p>0755-86521724</p>
      <h3>公司地址</h3>
      <p>广东省深圳市南山区科技南八路超多维大厦12F</p>
    </div>
    <img src="./../assets/about1.jpg" alt="">


  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    mounted() {
    },
  }
</script>

<style lang='less' scoped>
  .about{
    width: 1024px;
    margin: 0 auto;
    .top{
      margin-top: 30px;
      background: #f2f2f2;
      padding: 20px 20px;
      h1{
        margin-bottom: 20px;
      }
      p{
        text-align: left;
        margin-bottom: 15px;
      }
    }
    .content{
      text-align: left;
      padding-left: 20px;
      h3{
        margin: 20px 0 10px 0;
        color: #000;
      }
      p{
        background: #f2f2f2;
        line-height: 36px;
        padding-left: 5px;
        width: 500px;
      }
    }
    img{
      max-width: 1024px;
      margin: 30px 0 20px 0;
    }
  }
</style>
