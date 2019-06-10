<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/header";
  import Footer from "./components/footer";


  export default {
    components: {Header,Footer},
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

<style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    min-width: 1024px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
