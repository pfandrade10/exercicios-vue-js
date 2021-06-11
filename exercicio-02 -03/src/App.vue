<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-evenly;
  }
</style>
