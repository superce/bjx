<template>
  <div>
    <header>
      <div class="top">
        <div class="back" @click="back">
          <img src="../assets/images/back.png" alt="">
        </div>
        <div class="logo">
          <div class="img">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <span> | {{ $route.params.dataObj }}</span>
        </div>
        <div class="map" @click="showF">
          <!-- 分享 -->
          <img src="../assets/images/share.png" alt="">
        </div>
      </div>
    </header>
    <div class="main">
      <div class="title">
        <h3>{{ title }}</h3>
        <p>{{ time }}</p>
      </div>
      <div class="ad">
        <a href="">《钢铁、焦化行业脱硝调研报告》重磅推出!附赠独立焦化厂434家、大中型钢企579家名单!</a>
      </div>
      <div class="intr">
        <p>{{ intro }}</p>
      </div>
      <div class="content">
        <h4>{{ contentTitle }}</h4>
        <p v-for="p in content">{{ p.p }}</p>
      </div>
    </div>
    <transition>
      <div class="float" :class="{'off':isOff,'on':isOn}" v-show="show" @click="hide">
        <div class="share">
          <a href="" class="weibo">
            <img src="../assets/images/weibo.png" alt="">
          </a>
          <a href="" class="qqk">
            <img src="../assets/images/qqk.png" alt="">
          </a>
          <a href="" class="qqw">
            <img src="../assets/images/qqw.png" alt="">
          </a>
          <a href="" class="qq">
            <img src="../assets/images/qq.png" alt="">
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
   name:'Detail',
   data(){
     return{
       msg:'',
       title:'3403家 2018年河北省重点排污单位名录',
       time:'2018-10-08 09:44:21 北极星环保网',
       intro:'日前，河北公布2018年河北省重点排污单位名录。2018年河北省重点排污单位共3403家，涉及大气环境、水环境等排污单位。',
       contentTitle:'2018年河北省重点排污单位名录',
       content:[
         {
           p:'1 河北华电石家庄热电有限公司'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'2 河北华荣制药有限公司（原厂）'
         },
         {
           p:'3 华电水务石家庄有限公司'
         }
       ],
       show:false,
       isOff:false,
       isOn:false
     }
   },

   methods:{
     back(){
       this.$router.go(-1)
     },
     showF(){
      this.show = true
      this.isOn = true
      this.isOff = false
     },
     hide(){
      this.show = false
      this.isOff = true;
      this.isOn = false
     }
   }
  }
</script>

<style scoped>
.float{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  background: rgba(0, 0, 0, 0.7);
  transition-timing-function: ease-in;
  transition-duration: .6s;
}
@keyframes sos{
  from{
    margin-top:1130px;
  }
  to{
    margin-top: 0;
  }
}
@keyframes close{
  0%{
    margin-top: 0;
  }
  30%{
    margin-top: -20px;
  }
  100%{
    margin-top: 1130px;
  }
}
.float.on .qq{
  animation: sos 1.3s 1 ease;
}
.float.on .share{
  animation: sos 1s 1 ease;
}
.float.off .share{
  animation: close 1.3s 1 ease;
}
.float.off .qq{
  animation: close 1s 1 ease;
}
.float .share{
  width:100%;
  position: absolute;
  top:50%;
  z-index: 999;
  transform: translateY(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition-duration: .6s;
}
.float a{
  padding: .35rem .4rem;
  margin:10px 1rem;
  border-radius: 50%;
}
.float a img{
  display: block;
  width: 2rem;
  height: 2rem;
}

.float .weibo{
  background: #f04e59;
}
.float .qqk{
  background: #fdbe3d;
}
.float .qqw{
  background: #97cbe1;
}
.float .qq{
  background: #4081e1;
}

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
    height: 2rem;
  }
  header .map img{
    height: 100%;
  }

  .main .title{
    padding: .5rem;
  }
  .main .title h3{
    color: #171717;
    font-size: 1.1rem;
    line-height: 1.5rem;
    word-wrap: break-word;
  }
   .main .title p{
     color:#666;
     font-size: .7rem;
     margin-top: .4rem;
   }
  .main .ad {
    background: #f9f9f9;
    padding: .5rem;
    border-top: 1px solid #bfc6d1;
    border-bottom: 1px solid #bfc6d1;
  }
  .main .ad a{
    font-size: .8rem;
    color:red;
  }
  .main .intr{
    padding: .5rem;
  }
  .main .intr p{
    font-size: .9rem;
    font-family: "Microsoft YaHei";
  }
  .main .content{
    padding:0 .5rem;
  }
  .main .content h4{
    font-size: 1rem;
  }
  .main .content p{
    font-size: .8rem;
    font-family: "Microsoft YaHei";
    line-height: 1.3rem;
  }
</style>
