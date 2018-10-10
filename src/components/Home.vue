<template>
  <div class="home">
    <Header />
    <div class="nav">
      <div class="nav_list">
        <ul>
          <li><router-link to='cate-gory' v-for="s in scrollNav" :key="s.id">{{ s.nav }}</router-link></li>              
        </ul>
        
      </div>
      <router-link to='/nav' class="a">+</router-link>
    </div>
    <lunBo />
    <List />  
  </div>
</template>

<script>
import Header from './Header'
import List from './List'
import lunBo from './lunbo';
export default {
  components:{
    Header,
    List,
    lunBo
  },
  name: 'Home',
  data () {
    return {
      value:1,
      scrollNav:[
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        },
        {
          nav:'新闻'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav{
    width: 100%;
    margin: .2rem 0;
    display: flex;
  }
  .nav .nav_list{
    width:90%;
  }
  .nav .a{
    width:10%;
    background: #2786fb;
    color:#fff;
    text-align: center;
    border-radius: 5px;
    line-height: 1.2rem;
  }
  .nav .nav_list ul{
    overflow-x: scroll;
    display: flex;
    -webkit-overflow-scrolling:touch;
  }
  .nav .nav_list li{
    white-space: nowrap;
  }
  .nav .nav_list li a{
    font-size: 1rem;
    color:#333;
    font-family: "Microsoft Yahei";
    padding: 0 .2rem;
    line-height: 1.3rem;
  }
</style>
