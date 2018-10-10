<template>
  <div class="cate-gory">
    <header>
      <div class="top">
        <div class="back" @click="back">
          <img src="../assets/images/back.png" alt="">
        </div>
        <div class="logo">
          <div class="img">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <span> | 水处理</span>
        </div>
        <div class="map">

          <router-link :to="{name:'Nav'}">
            <span></span>
            <span></span>
            <span></span>
          </router-link>
        </div>     
      </div>
    </header>      
    <List />
  </div>
  
</template>
 <script>
 import List from './List.vue'
  export default {
    components:{
      List
    },
    name:'cateGory',
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  } 
 </script>
 
 <style scoped>
  header{
    width: 100%;
    background: #2786fb;
  }
  header .top{
    width: 96%;
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
  header .logo{
    display: flex;
    line-height:2rem; 
  }
  header .logo .img{
    width: 7rem;
  }
   header .logo img{
     width: 100%;
     display: block;
     margin-top: .4rem;
   }
   header .logo span{
     color:#fff;
     font-size: .75rem;
     margin-left: .5rem;
   }
   header .map{
     margin-top: .5rem;
   }
   header .map span{
     display: block;
     color:#fff;
     height: .1rem;
     width:1rem;
     margin:.2rem 0;
     background: #fff;
   }
 </style>
 