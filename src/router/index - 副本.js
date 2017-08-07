import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import comA from '@/components/a';
import comB from '@/components/b';
import RedApple from '@/components/redApple';

Vue.use(Router);

export default new Router({
	mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Hello
    },
    {
      path: '/apple',
      name: 'applePage',
      component: comA,
      children: [
        {
          path: 'red',
          component: RedApple
        }
      ]
    },
    {
      path: '/banana',
      component: comB
    }
  ]
});
