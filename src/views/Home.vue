<template>
  <div class="home">
    <!--顶部 手机和输入框-->
    <el-row class="top">
      <el-col class="left" :span="6" :offset="6">
        <img src="./../assets/phone.jpg" alt="">
      </el-col>
      <el-col class="right" :span="6">
        <div class="label">
          <p><em class="el-icon-document"></em>借款申请</p>
          <p>23-55周岁均可申请</p>
        </div>
        <el-form label-position="left" label-width="80px" :model="form" class="form">
          <el-form-item label="您的姓名">
            <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="贷款金额">
            <el-input v-model="form.amount" placeholder="请输入意向贷款金额" style="width:250px"></el-input>
            元
          </el-form-item>
          <el-form-item label="贷款用途">
            <el-select v-model="form.use" placeholder="请选择贷款用途" style="width:270px">
              <el-option v-for="(v,i) in option" :key="i" :label="v.label" :value="v.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone" placeholder="请输入11位手机号码"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="success" class="submit">立即申请</el-button>
      </el-col>
    </el-row>
    <!--中间 申请三步走-->
    <div class="threeSteps">
      <el-row class="title"><span>申请3步走</span></el-row>
      <el-row class="content">
        <el-col :span="8" class="item">
          <p class="img"><img src="./../assets/step1.jpg" alt=""></p>
          <p class="text">快速审核</p>
        </el-col>
        <el-col :span="8" class="item">
          <p class="img"><img src="./../assets/step2.jpg" alt=""></p>
          <p class="text">快至<span class="orange">30分钟</span>到账</p>
        </el-col>
        <el-col :span="8" class="item">
          <p class="img"><img src="./../assets/step3.jpg" alt=""></p>
          <p class="text">审批<span class="orange">通过率高</span></p>
        </el-col>
      </el-row>
    </div>
    <!--图文展示-->
    <el-row class="graphic">
      <el-col :span="14" class="text">
        <h1>多用途 快速放款</h1>
        <p>简单几步填写，智能精准匹配，流程更简单，放款更迅速。</p>
      </el-col>
      <el-col :span="10" class="photo">
        <img src="./../assets/graphic1.png" alt="">
      </el-col>
    </el-row>
    <el-row class="graphic">
      <el-col :span="10" class="photo">
        <img src="./../assets/graphic1.png" alt="">
      </el-col>
      <el-col :span="14" class="text">
        <h1>利息低 还款灵活</h1>
        <p>还款分期最长36个月，减少还款压力。</p>
      </el-col>
    </el-row>
    <el-row class="graphic">
      <el-col :span="14" class="text">
        <h1>响应快 24小时在线服务</h1>
        <p>尊享vip会员服务，竭力为您解答疑惑，提供优质的服务。</p>
      </el-col>
      <el-col :span="10" class="photo">
        <img src="./../assets/graphic1.png" alt="">
      </el-col>
    </el-row>
    <!--产品介绍-->
    <div class="productDescription">
      <el-row class="label">产品介绍：</el-row>
      <el-row>
        <el-col :span="12" class="left">
          <img src="./../assets/product.png" alt="">
        </el-col>
        <el-col :span="12" class="right">
          <p>专注于金融领域的大数据智能贷款推荐平台，为个人提供专业、合规、低息的贷款申请服务，轻松借钱，安全有保障。</p>
          <p><strong>额度：</strong>最高20万</p>
          <p><strong>还款期限：</strong>支持 3月-36月灵活还款</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        form: {
          name: '',
          amount: '',
          use: '',
          phone: '',
        },
        option: [
          {label: '装修', value: '1'},
          {label: '教育', value: '2'},
          {label: '医疗健康', value: '3'},
          {label: '婚庆', value: '4'},
          {label: '家具家居', value: '5'},
          {label: '家用电器', value: '6'},
          {label: '手机数码', value: '7'},
        ],
        steps: [
          {img: '', label: '快速审核'},
          {img: '', label: '快至30分钟到账'},
          {img: '', label: '审批通过率高'},
        ],
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
  @bg: #FF7221;
  .home {
    .top {
      height: 600px;
      .left {
        img {
          width: 290px;
          height: 570px;
        }
      }
      .right {
        width: 350px;
        height: 100%;
        padding-top: 20px;
        > div {
          width: 100%;
        }
        .label {
          background: @bg;
          p {
            width: 100%;
            height: 74px;
            line-height: 74px;
            &:first-child {
              border-bottom: 1px dashed #fff;
            }
          }
        }
        .form {
          margin: 40px 0;
        }
        .submit {
          background: @bg;
          border-color: @bg;
          width: 220px;
        }
      }
    }
    .threeSteps{
      margin: 20px 0;
      .title{
        line-height: 50px;
        span{
          display: inline-block;
          border-bottom: 1px solid #000;
          line-height: 50px;
          padding: 0 40px;
          font-size: 24px;
        }
      }
      .content{
        .orange{
          color: @bg;
        }
      }
    }
    .graphic{
      box-sizing: content-box;
      height: 430px;
      margin-bottom: 10px;
      padding: 56px 0;
      border-bottom: 1px solid #ccc;
      .text{
        height: 100%;
        padding-top: 130px;
        background: #F2F2F2;
      }
      .photo{
        img{
          height: 430px;
          vertical-align: middle;
        }
      }
    }
    .productDescription{
      margin-bottom: 20px;
      padding: 56px 20%;
      border-bottom: 1px solid #ccc;
      .label{
        text-align: left;
        height: 32px;
        line-height: 32px;
      }
      .left{
        text-align: left;
      }
      .right{
        text-align: left;
        p{
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
