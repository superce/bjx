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
        <div class="list" v-for="l in list" :key="l.title">
          <div class="left">
            <a href="">{{ l.title }}</a>
            <p>{{ l.data }}</p>
          </div>
          <div class="right">
            <img :src="l.img" :alt="l.title">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "hotList",
  data() {
    return {
      list: [
        {
          title: "商务部：关于《再生资源绿色回收规范》行业标准公开征求意见的函",
          data: "北极星环保网 1小时前",
          img:"http://img01.mybjx.net/news/UploadFile/201809/6367380963317230252013555.jpg!thumbnail"
        },
        {
          title:"商务部：关于《再生资源绿色回收规范》行业标准公开征求意见的函1",
          data: "北极星环保网 1小时前",
          img:"http://img01.mybjx.net/news/UploadFile/201809/6367380963317230252013555.jpg!thumbnail"
        },
        {
          title:"商务部：关于《再生资源绿色回收规范》行业标准公开征求意见的函2",
          data: "北极星环保网 1小时前",
          img:"http://img01.mybjx.net/news/UploadFile/201809/6367380963317230252013555.jpg!thumbnail"
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.key-word {
  width: 100%;

  background: #2786fb;
}
header {
  width: 96%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
header .back {
  width: 0.6rem;
  height: 1rem;
  line-height: 2.3rem;
}
header .back img {
  width: 100%;
  height: 100%;
}
header .inp {
  width: 70%;
  margin-top: 0.2rem;
}
header .inp input {
  width: 100%;
  height: 1.5rem;
  border: none;
  border-radius: 5px;
  padding-left: 0.5rem;
}
header .submit button {
  background: none;
  border: none;
  color: #fff;
  font-size: 0.8rem;
  line-height: 2rem;
}
.list{
    width: 96%;
    margin: .5rem auto;
    display: flex;
    justify-content: space-between;

  }
  .list .left{
    width: 65%;
  }
  .list .left a{
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
  button{
    outline: none;
    border: none;
  }
  button:active{
    border: none;
  }
</style>
