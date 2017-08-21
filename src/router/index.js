import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/pages/index';
import DetailPage from '@/pages/detail';
import OrderListPage from '@/pages/orderList';
import DetailAnalysis from '@/pages/detail/analysis';
import DetailCount from '@/pages/detail/count';
import DetailForecase from '@/pages/detail/forecase';
import DetailPublish from '@/pages/detail/publish';
import resourceTest from '@/pages/resourceTest';
Vue.use(Router);

export default new Router({
	mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/test',
      component: resourceTest
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: 'detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnalysis
        },
        {
          path: 'count',
          component: DetailCount
        },
        {
          path: 'forecast',
          component: DetailForecase
        },
        {
          path: 'publish',
          component: DetailPublish
        }
      ]
    }
  ]
});
