<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <p>Cadastrar Produto</p>
      <input type="text" placeholder="Nome" v-model="name" required />
      <input type="number" placeholder="Preço" v-model="price" required />
      <input type="text" placeholder="Categoria" v-model="category" required />
      <input type="submit" value="Cadastrar" />
      <button type="button">
        <router-link to="/products">Listar Produtos</router-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      name: "",
      price: "",
      category: "",
    };
  },
  props: {
    onAddProduct: Function,
  },
  methods: {
    onFormSubmit() {
      const product = {
        name: this.name,
        price: this.price,
        category: this.category,
      };
      this.$store.dispatch("addProduct", product);
      this.name = "";
      this.price = "";
      this.category = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 10px 60px 40px;
  width: 300px;
  box-shadow: 1px 1px 35px -20px;
}
form p {
  color: gray;
  font-size: large;
  font-weight: bold;
  text-align: center;
}
input {
  margin: 1%;
  line-height: 20px;
  padding: 10px;
  font-size: medium;
  border-radius: 5px;
  border-width: 1px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}

input[type="submit"] {
  background-color: gray;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  font-size: small;
  border: none;
}
input[type="submit"]:hover {
  background-color: #5c5c5c;
  cursor: pointer;
}
textarea:focus,
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

button{
  background-color: gray;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: larger;
  margin: 10px 3px 3px 3px;
  line-height: 10px;
  padding: 15px;
  border-radius: 5px;
  border: none;
}
button:hover{
  background-color: #5c5c5c;
  cursor: pointer;
}

a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: small;
  color: white;
}
</style>