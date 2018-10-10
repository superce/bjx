<template>
  <div>
    <div class="key-word">
      <header>
        <div class="back" @click="back">
          <img src="../assets/images/back.png" alt="">
        </div>
        <div class="inp">
          <input type="text" placeholder="请输入">
        </div>
        <div class="submit">
          <button>
            搜索
          </button>
        </div>
      </header>
    </div>
    <div class="main">
      <div class="main-box">
        <div class="title">
          <h3>热搜关键词</h3>
        </div>
        <div class="key">
          <router-link :to='{name:"List"}' v-for="k in word" :key="k.id">{{ k.key }}</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'keyWord',
    data(){
      return{
        word:[
          {
            key:'发电'
          },
          {
            key:'发电'
          },
          {
            key:'发电'
          },
          {
            key:'发电'
          },
          {
            key:'发电'
          },
          {
            key:'垃圾发电'
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
 
  .key-word{
    width: 100%;
    background: #2786fb;
  }
  header{
    width: 96%;
    height: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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
  header .inp{
    width: 70%;
    margin-top: .2rem;
  }
  header .inp input{
    width: 100%;
    height: 1.5rem;
    border: none;
    border-radius: 5px;
    padding-left: .5rem;
  }
  header .submit button{
    background: none;
    border: none;
    color:#fff;
    font-size: .8rem;
    line-height: 2rem;
  }
  .main{
    margin-top: 1rem;
  }
  .main-box{
    width: 96%;
    margin: 0 auto;
  }
  .main .title h3{
    font-size: .9rem;
    font-family: "Microsoft YaHei";
  }
  .main .key{
    margin-top: .4rem;
  }
  .main .key a{
    display: inline-block;
    font-size: .7rem;
    font-family: "Microsoft YaHei";
    color:#000;
    background: #f2f2f2;
    padding: .2rem .3rem;
    margin: .2rem .4rem;
  }
</style>

