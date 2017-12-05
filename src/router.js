import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/home.vue'
import Posts from './views/posts.vue'
import Post from './views/post.vue'
import Projects from './views/projects.vue'
import About from './views/about.vue'
import Movingdots from './views/sub-views/movingdots.vue'
import Typeeffect from './views/sub-views/typeeffect.vue'

export default new VueRouter({
  mode: 'history',
  base: 'blog',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/projects/movingdots',
      component: Movingdots
    },
    {
      path: '/projects/typeeffect',
      component: Typeeffect
    },
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/post/:filename',
      component: Post
    },
    {
      path: '/about',
      component: About
    }
  ]
})
