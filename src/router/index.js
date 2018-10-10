import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import keyWord from '@/components/keyWord'
import cateGory from '@/components/cateGory'
import Nav from '@/components/Nav'
import hotList from '@/components/hotList'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },    
    {
      path: '/cate-gory',
      name:'cateGory',
      component: cateGory
      // children:[
      //   {
      //     path:'nav',
      //     name:'Nav',
      //     component:Nav
      //   }
      // ]
    },
    {
      path:'/nav',
      name:'Nav',
      component:Nav
    },
    // {
    //   path:'/list',
    //   component:List
    // }, 
    {
      path:'/detail',
      name:"Detail",
      component:Detail
    },
    {
      path: '/key-word',
      name: 'keyWord',
      component: keyWord,
      children:[
        {
          path: 'key-word',
          name: 'keyWord',
          component: keyWord
        },
        {
          path:'list',
          name:'List',
          component:List
        }
      ]
    },
    {
      path:'/hot-list',
      component:hotList
    }
  ]
})
