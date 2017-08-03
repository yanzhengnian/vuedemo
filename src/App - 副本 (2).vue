<template>
  <div :title="hello">
    <!-- <componentA v-for="val in objList"></componentA> -->
    <ul>
      <li v-for="(item,index) in list" > 
         {{item.name}} - {{item.price}}
      </li>
    </ul> 
    <div v-if="isPartA">partA</div>
    <div v-else>no data</div>
    <a :href="link" :class="" :style="linkClass"> to baidu </a>
    <button v-on:click="addItem">addItem</button>
    <button v-on:click.stop="toggle">toggle</button>
    <input type="text" v-model.number="myValue">
    {{ myValue }}
    <br>
    <input type="checkbox" v-model="myBox" value="apple">
    <input type="checkbox" v-model="myBox" value="banana">
    {{ myBox }}
    <br>
    <select v-model='selection'>
      <!-- <option value="1">1</option>
      <option value="2">2</option> -->
      <option v-for="item in selectOptions" :value="item.value">{{item.text}}</option>
    </select>
    {{selection}}
    <componentA @my-event="onComaMyEvent" :size="48" :str="[1,1,2]"></componentA>
    <p is="componentA"></p>
    <!-- <p v-text="spanText"></p>
    <p v-html="spanText"></p>
    {{ num + 1 }}
    {{ status ? 'success' : 'fail'}}
    <ul>
      <li v-for="(item,index) in list" :class="{odd:index %2}"> 
         {{item.name}} - {{item.price}} - {{index}}
      </li>
    </ul> 
    <ul>
      <li v-for="(val,key,index) in objList"> 
         {{key}} - {{val}} - {{index}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import Vue from 'vue';
import componentA from './components/a.vue';
export default {
  // name: 'app'
  components: {
    componentA
  },
  data() {
    return {
      hello: 'world',
      link: 'www.baidu.com',
      spanText: '<span><img>world</span>',
      num: 1,
      status: false,
      linkClass: {
        'color': '#553633',
        'font-size': '22px'
      },
      isPartA: true,
      myValue: '',
      myBox: [],
      selection: null,
      selectOptions: [
        {text: 'apple', value: 0},
        {text: 'apple2', value: 1},
        {text: 'apple3', value: 2}
      ],
      list: [
        {
          name: 'apple',
          price: 34
        },
        {
          name: 'banana',
          price: 56
        }
      ],
      objList: {
        name: 'apple',
        price: 34,
        count: 3333,
        color: 'red'
      }
    };
  },
  methods: {
    addItem() {
      console.log(this.list);
      this.list.push({
          name: 'orange',
          price: 16
        });
      Vue.set(this.list, 1, {
        name: 'pinaapple',
        price: 256
      });
    },
    toggle() {
      this.isPartA = !this.isPartA;
    },
    onComaMyEvent(paramfromA) {
      console.log(paramfromA);
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
