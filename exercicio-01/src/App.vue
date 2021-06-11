  
<template>
<div class='container'>
  <header>
    <Header />
  </header>
  <nav>
    <Navbar />
  </nav>
  <main class='wrapper'>
      <Article />
      <Aside :items="sections"/>
  </main>

</div>
  
  
</template>

<script>
import Header from './components/Header';
import Navbar from './components/Navbar';
import Article from './components/Article';
import Aside from './components/Sidebar';
export default {
  name: 'App',
  components:{
    Header,
    Navbar,
    Article,
    Aside,
  },
  data(){
    return {
      sections: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9', 'option 10']
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1e2022;
  margin: 0 auto;
  max-width: 1000px;
}
.wrapper{
  display: grid;
  grid-template-columns: 70% 30%;
}
</style>