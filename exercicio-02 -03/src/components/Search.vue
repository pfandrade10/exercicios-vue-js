<template>
  <div>
    <input
      type="text"
      placeholder="Buscar"
      v-model="search"
      v-on:keyup="handleSearch"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {
    onSearch: Function,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.onSearch(this.search);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  width: 93%;
  margin-bottom: auto;
  border: 1px solid grey;
  border-radius: 5px;
  color: grey;
}
textarea:focus,
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
</style>