<template>
  <div class="lun_bo">
    <wc-swiper class="swiper" :duration="1000">
      <wc-slide v-for="s in pic" :key="s.title">
        <img :src="s.img" :alt="s.title">
        <p>{{ s.title }}</p>
      </wc-slide>
    </wc-swiper>
  </div>
</template>

<script>
  export default {
   name:'lunBo',
   data(){
     return{
       pic:[
         {
           title:1,
           img:'http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg',
         },
         {
           title:2,
           img:'http://pic29.nipic.com/20130511/9252150_174018365301_2.jpg',
         },
         {
           title:3,
           img:'http://img.zcool.cn/community/01f09e577b85450000012e7e182cf0.jpg@1280w_1l_2o_100sh.jpg',
         }
       ]  
       
     }
   }
  }
</script>

<style scoped>
  .swiper{
    height: 10rem;
  }
  .swiper img{
    width:100%;
    height: 100%;
  }
  .swiper p{
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom:0;
    width:100%;
    height: 2rem;
    color:#fff;
    text-align: center;
  }
  .swiper .wc-pagination{
    bottom:0px !important;
  }
</style>

