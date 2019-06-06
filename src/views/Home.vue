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
        <el-form label-position="left" label-width="80px" :model="form">
          <el-form-item label="您的姓名">
            <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="贷款金额">
            <el-input v-model="form.amount" placeholder="请输入意向贷款金额"></el-input> 元
          </el-form-item>
          <el-form-item label="贷款用途">
            <el-select v-model="form.use" placeholder="请选择贷款用途">
              <el-option v-for="(v,i) in option" :key="i" :label="v.label" :value="v.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone" placeholder="请输入11位手机号码"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
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
    }
  },
  computed: {
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
  .home{
    .top{
      height: 600px;
      .left{
        img{
          width: 290px;
          height: 570px;
        }
      }
      .right{
        width: 350px;
        height: 100%;
        padding-top: 20px;
        >div{
          width: 100%;
        }
        .label{
          background: #FF7221;
          p{
            width: 100%;
            height: 74px;
            line-height: 74px;
            &:first-child{
              border-bottom: 1px dashed #fff;
            }
          }
        }
      }
    }
  }
</style>
