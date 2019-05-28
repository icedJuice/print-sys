import Vue from 'vue'
import Router from 'vue-router'

// 按需加载, 分开打包 写法
// const main = r => require.ensure([], () => r(require('@/pages/main')), 'main')
// const list = r => require.ensure([], () => r(require('@/pages/list')), 'list')
// const detail = r => require.ensure([], () => r(require('@/pages/detail')), 'detail')
import main from '@/pages/main';
import list from '@/pages/list';
import detail from '@/pages/detail';

Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
        path: '/list',
        name: 'list',
        component: list
      },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
