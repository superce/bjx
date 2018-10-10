<template>
  <header>
    <div class="top">
      <div class="logo">
        <h1><router-link to="/"><img src="../assets/images/logo.png" alt="主页"></router-link></h1>
      </div>
      <div class="search">
        <router-link to="key-word">
          <img src="../assets/images/ico_sc.png" alt="">
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name:'Header',
    data(){
      return{
        msg:''
      }
    }
  }
</script>

<style scoped>
  header{
    width:100%;
    background: #2786fb;
  }
  header .top{
    width:96%;
    height: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  header .logo{
    width: 7rem;
  }
  header .logo h1{
    height: 40px;
  }
  header .logo h1 a{
    display: block;
    line-height: 1.8rem;
    height: 100%;
  }
  header .search{
    width: 1rem;
    line-height: 2rem;
  }
  header .search a{
    display: block;
    line-height: 2.1rem;
  }
  header img{
    width:100%;
  }
</style>

