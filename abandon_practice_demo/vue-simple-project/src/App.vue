<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <li v-for="vo in items" class="lists" v-bind:class="{finish:vo.isF}" v-on:click="sayhello(vo)">{{vo.title}}</li>
    </ul>
  </div>
</template>

<script>
//  var Store = require("./store");
  import Store from "./store";
  console.log(Store);
  //export相当于new vue({.....})
  export default {
//  data:funtion(){})
    data(){
      return {
        title: "this is nedw project",
        items:Store.get(),
        newItem:"",
      }
    },
    methods:{
      sayhello:function(item) {
       item.isF = !item.isF;
      },
      addNew:function(){
//        只有用this才能取到data里的items
        this.items.push({title:this.newItem,isF:false});
        console.log(this.newItem);
        this.newItem="";
      }
    },
    watch:{
      items:{
        handler:function(items){
          Store.save(items);
;        },
//        是否进行深度观察
        deep:true
      }
    }
  }
</script>

<style>
  .lists{
    width:140px;height: 40px;border:1px solid red;
    background-color: whitesmoke;
  }
  .finish{
    color:yellow;
  }
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
