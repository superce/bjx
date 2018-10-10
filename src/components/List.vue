<template>
  <div class="list_content">
    <div class="list" v-for="l in list">
      <router-link :to="{
        name:'Detail',
        params:{
          dataObj:msg
        }
      }">
        <div class="left">
          <span>{{ l.title }}</span>
          <p>{{ l.data }}</p>
        </div>
        <div class="right">
          <img :src="l.img" :alt="l.title">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name:'List',
    data(){
      return {
        list:[
          {
            title:'商务部：关于《再生资源绿色回收规范》行业标准公开征求意见的函',
            data:'北极星环保网 1小时前',
            img:"http://img01.mybjx.net/news/UploadFile/201809/6367380963317230252013555.jpg!thumbnail"
          },
          {
            title:'商务部：关于《再生资源绿色回收规范》行业标准公开征求意见的函',
            data:'北极星环保网 1小时前',
            img:"http://img01.mybjx.net/news/UploadFile/201809/6367380963317230252013555.jpg!thumbnail"
          },
          {
            title:'商务部：关于《再生资源绿色回收规范》行业标准公开征求意见的函',
            data:'北极星环保网 1小时前',
            img:"http://img01.mybjx.net/news/UploadFile/201809/6367380963317230252013555.jpg!thumbnail"
          }
        ],
        msg:'水立方'
      }
    }
  }
</script>

<style scoped>
.list_content{
  width: 100%;
}
  .list>a{
    width: 96%;
    margin: .5rem auto;
    display: flex;
    justify-content: space-between;

  }
  .list .left{
    width: 65%;
  }
  .list .left span{
    font-size: .7rem;
    color:#000;
    font-family:"Microsoft YaHei";
  }
  .list .left p{
    font-size: .6rem;
    color:#a9a8a8;
    font-family:"Microsoft YaHei";
    margin-top: .1rem;
  }
  .list .right{
    width:35%;
  }
  .list .right img{
    width:100%;
    height: 100%;
  }
</style>
