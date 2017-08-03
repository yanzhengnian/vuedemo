<template>
  <div>
    <input type="text" v-model="myValue">
    {{ myValueWirhoutNum}}
    <ul>
      <li v-for="(item,index) in myList" > 
         {{item.name}} + {{item.price}}
      </li>
    </ul> 
    <button @click="changeList">change</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  // name: 'app'
  data() {
    return {
      myValue: '',
      myList: [
        {
          name: 'apple',
          price: 34
        },
        {
          name: 'banana',
          price: 56
        }
      ]
    };
  },
  // 值变化才会执行，会被缓存
  computed: {
    myValueWirhoutNum() {
      return this.myValue.replace(/\d/g, '0');// + 'end';
    }
  },
  watch: {
    myValue: function(val, oldVal) {
      console.log(val, oldVal);
    },
    myList: function() {
      this.tellUser();
    }
  },
  // 每次调用都会计算属性
  methods: {
    getMyValue() {
      return this.myValue.replace(/\d/g, '0');
    },
    changeList() {
      Vue.set(this.myList, 1, {
        name: 'pinaapple',
        price: 256
      });
    },
    tellUser() {
      alert('list change');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
