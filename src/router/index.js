import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bilibili from '../views/old/bilibili'
import novel from '../views/old/novel'
import read from '../views/old/novel/read'
import novel_research from '../views/old/novel/novel_research'
import jpg from '../views/old/jpg'
import replies from '../views/old/replies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/bilibili',
    name: 'bilibili',
    component: bilibili,
    meta: {
      title: 'B站信息'
    }
  },
  {
    path: '/novel',
    name: 'novel',
    component: novel,
    meta: {
      title: '小说'
    },
    children: [
      {
        path: '/novel/read',
        name: 'read',
        component: read,
        meta: {
          title: '阅读'
        }
      },
      {
        path: '/novel/research',
        name: 'novel_research',
        component: novel_research,
        meta: {
          title: '小说搜索'
        }
      }
    ]
  },
  {
    path: '/jpg',
    name: 'jpg',
    component: jpg,
    meta: {
      title: '图片'
    }
  },
  {
    path: '/replies',
    name: 'replies',
    component: replies,
    meta: {
      title: '评论'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
export default router
