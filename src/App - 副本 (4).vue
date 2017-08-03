<template>
  <div class="appDiv">
    <button @click="toggleCom">Toggle</button>
    <!-- 指令 -->
    <p class="directClass" v-color="'red'">Test 指令</p>
    <input type="text" v-focus>
    <div class="ab">
      <transition name="fade" mode="out-in">
        <!-- <div :is="currentView"></div> -->
        <!-- <p v-show="show">i an show</p> -->
        <p v-if="show" key="1">i am show</p>
        <p v-else key="2">not in show</p>
      </transition>
       <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          v-bind:css="false"
        >
          <p class="animate-p" v-if="show">
            Demo
          </p>
        </transition>
    </div>
  </div>
</template>
  
<script>
import comA from './components/a';
import comB from './components/b';
var jquery = require('jquery');
export default {
  // name: 'app'
  directives: {
    color: function (el, binding) {
      el.style.color = binding.value;
    },
    focus: {
      inserted (el, binding) {
        el.focus();
      }
    },
    custom: {
      bind (el, binding) {

      },
      inserted (el, binding) {
        el.style.color = binding.value;
      }
    }
  },
  components: {
    comA,
    comB
  },
  data() {
    return {
      currentView: 'comA',
      hello: 'world',
      show: true
    };
  },
  methods: {
    beforeEnter: function (el) {
      // el.style.left = '-500px';
      // el.style.opacity = 0;
      jquery(el).css({
        left: 0,
        opacity: 0
      });
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    enter: function (el, done) {
      // el.style.left = 0;
      // el.style.opacity = 1;
      jquery(el).animate({
        left: 500,
        opacity: 1
      }, {
        duration: 1500,
        complete: done
      });
      done();
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    leave: function (el, done) {
      jquery(el).animate({
        left: 1000,
        opacity: 0
      }, {
        duration: 1500,
        complete: done
      });
      // el.style.left = '500px';
      // el.style.opacity = 0;
    },
    getMyEvent(paramA) {
      console.log('i got param: ', paramA);
    },
    toggleCom() {
      this.show = !this.show;
      if (this.currentView === 'comA') {
        this.currentView = 'comB';
      } else {
        this.currentView = 'comA';
      }
    }
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.appDiv{
  .directClass{
    font-size: 30px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter, .fade-leave {
  opacity: 0;
}

.my-trans-enter-active, .my-trans-leave-active {
  transition: all .5s ease-out;
}
.my-trans-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active {
  transform: translateY(500px);
  opacity: 0;
}
.animate-p {
  position: absolute;
  top: 300px;
  left: 500px;
}
</style>
