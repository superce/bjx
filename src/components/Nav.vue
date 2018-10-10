<template>
  <div class="nav">
    <header>
      <div class="top">
        <div class="back" @click="back">
          <img src="../assets/images/back.png" alt="">
        </div>
        <div class="navi">
          <span>网站导航</span>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="main-nav">
        <div class="title">
          <h4>行业导航</h4>
        </div>
        <div class="main-tabs">
          <router-link to='/' v-for="w in keyword" :key="w.id">{{ w.word }}</router-link>
        </div>
      </div>
      <div class="main-nav">
        <div class="title">
          <h4>类型导航</h4>
        </div>
        <div class="main-tabs">
          <router-link to='/' v-for="w in keyword2" :key="w.id">{{ w.word }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Nav',
    data(){
      return{
        keyword:[
          {
            word:'大气治理'
          },
          {
            word:'大气治理大气治理'
          },
          {
            word:'大气治理'
          },
          {
            word:'大气治理'
          },
          {
            word:'大气治理'
          },
          {
            word:'大气治理'
          }
        ],
        keyword2:[
          {
            word:'治理'
          },
          {
            word:'治理'
          },
          {
            word:'治理'
          },
          {
            word:'治理'
          },
          {
            word:'治理'
          }
        ]
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    } 
  }
</script>

<style scoped>
.nav{
  width: 100%;
}
  header{
    width: 100%;
    background: #2786fb;
  }
header .top{
  width:96%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
}
  header .back{
    width: .6rem;
    height: 1rem;
    line-height: 2.3rem;
  }
  header .back img{
    width: 100%;
    height: 100%;
  }
  header .top .navi{
    flex-grow: 1;
    text-align: center;
  }
  header .top .navi span{
    color:#fff;
    font-size: .9rem;
    font-family: "Microsoft YaHei";
    line-height: 2rem;
  }
  .main {
    margin-top: 1rem;
  }
  .main .main-nav{
    width: 96%;
    margin: 0 auto;
  }
  .main .main-nav .title{
    border-bottom: 1px solid #bfc6d1;
    padding-bottom: .5rem;
  }
  .main .main-tabs{
    margin:.7rem 0;
  }
  .main .main-tabs a{
    display: inline-block;
    font-size: .8rem;
    font-family: "Microsoft YaHei";
    color:#000;
    background: #eceff4;
    padding: .2rem .3rem;
    margin: .2rem .4rem;
  }
</style>


