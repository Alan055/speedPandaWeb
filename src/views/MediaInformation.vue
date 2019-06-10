<template>
    <div class="mediaInformation">
      <h1>汇聚最新报道&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;聚焦行业动态</h1>
      <el-row v-for="(v,i) in news" :key="i" class="item">
        <el-col  class="left"><img :src="'/static/img/'+v.img" alt=""></el-col>
        <el-col  class="right">
          <h3 @click="handle(v)"><span>{{v.title}}</span></h3>
          <p>{{v.content}}</p>
          <p class="date">发布日期 {{v.date}}</p>
        </el-col>
      </el-row>
    </div>
</template>

<script>
	export default {
		data() {
			return {
        news: [
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
          {
            title: '贷款征信不好怎么办？学会这4个技巧，贷款不在话下！',
            content: '贷款征信不好怎么办?有一张信用卡真的很方便，不仅能够解决用钱的燃眉之急，而且平时消费也很简单，但是贷款征信不好怎么办呢?贷款征信不好，是不是就不能办那信用卡了，结合这个问题我们一起来看一看。',
            img: 'news.png',
            date: '2019-05-01'
          },
        ],
      }
		},
		computed: {},
		watch: {},
		methods: {
		  handle(v){
        this.$router.push({path: '/news', query: {id:v.title}})
      }
    },
		created() {
		},
		mounted() {
		},
	}
</script>

<style lang='less' scoped>
  .mediaInformation{
    margin-bottom: 100px;
    h1{
      border-top: 1px solid #fff;
      background: #333333;
      color: #fff;
      font-size: 56px;
      line-height: 140px;
    }
    .item{
      height: 200px;
      padding: 48px 0px;
      margin: 0 50px;
      text-align: left;
      border-bottom: 1px solid #ccc;
      .left{
        width: 120px;
        img{
          vertical-align: middle;
          cursor: pointer;
        }
      }
      .right{
        width: ~"calc(100% - 120px)";
        h3{
          span{
            cursor: pointer;
            &:hover{
              border-bottom: 1px solid #ccc;
            }
          }
        }
        p{
          margin-top: 17px;
          font-size: 14px;
          &.date{
            font-size: 12px;
          }
        }

      }
    }
  }
</style>
