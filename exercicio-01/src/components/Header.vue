<template>
  
  <nav>
    <a href="#"><Logo /></a>
    <ul>      
      <li>Topic1</li>
      <li>Topic2</li>
      <li>Topic3</li>
      <li>Topic4</li>
    </ul>
    <form>
    <input type="text" placeholder="Search..." />
  </form>
  </nav>
  
</template>

<script>
import Logo from '../components/Logo'
export default {
  name: 'Header',
  components: {
    Logo,
  },
}
</script>

<style scoped>
  nav{
    display: flex;
    justify-content: space-between;   
  }
  ul{
    display: flex;
    margin-left: 59%;
    margin-right: 2%;
    list-style-type: none;
  }
  li{
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
  }
  form{
    display: flex;
    margin-top: 7%;
    margin-left: -20%;
  }
  input {
    font-weight: bold;
    height: 20px;
  };
</style>