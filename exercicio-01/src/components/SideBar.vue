<template>
  <aside >
    <section v-for="(item, index) in items" :key="index">
      <h5>{{ item }}</h5>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    items: String,
  },
}
</script>

<style scoped>
  aside{
    text-align: right;
    background: #524b4a;
    color: white;
    margin-left: 10%
  }

  h5{
    padding-right: 25px;
  }
  h5:hover{
    cursor: pointer;
    background-color: #5c1207;
  }
</style>