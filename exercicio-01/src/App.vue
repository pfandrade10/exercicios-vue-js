<template>
  <SideBar>
    <ul class="sidebar-panel-nav">
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
  </SideBar>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 ul.sidebar-panel-nav {
   list-style-type: none;
   margin: 0px;
   padding: 0px;
   text-align: left;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }

 li:hover{
   background-color: #374e64;
 }

 a{
   padding: 12px 15px;
 }
</style>
