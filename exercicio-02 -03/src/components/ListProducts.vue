<template>
  <section>
    <Search :onSearch="handleSearchProducts"/>
    <div class="box">
      <div v-if="listedProducts.length > 0">
        <div v-for="(item, index) in listedProducts" :key="index">
          <Product :product="item" />
        </div>
      </div>
      <div v-else>
        <div v-for="(item, index) in products" :key="index">
          <Product :product="item" />
        </div>
        <p><b>Total:</b>{{ totalProducts }} produtos</p>
      </div>
    </div>
    
    <button><router-link to="/">Home</router-link></button>
  </section>
</template>

<script>
import Product from "./Product";
import Search from './Search';

export default {
  name: "ListProducts",
  components: {
    Product,
    Search,
  },
  props: {
  },
  data(){
    return{
      products: this.$store.getters.getProducts,
      listedProducts: [],
    }
  },
  methods: {
    handleSearchProducts(text){
      const results = this.products.filter((e) => e.name.startsWith(text));
      if(results.length > 0){
        this.listedProducts = results;
      } else {
        this.listedProducts = this.products;
      }
    }
  },
  computed: {
    totalProducts: function(){
      const products = this.$store.state.products.length;
      const listedProducts = this.listedProducts.length;
      const total = listedProducts > 0 ? listedProducts : products;
      return total > 1 || total === 0 ? ` ${total}` : ` ${total}`;
    },
  },
};
</script>


<style scoped>
section {
  width: 300px;
  box-shadow: 1px 1px 35px -20px;
  
}

.box div{
  
  border: 1px solid #52616f;
  padding-bottom: 5px;
  border-radius: 5px;
}

section p{
  font-weight: bold;
  color: gray;
  float: right;
}
b {
  color: gray;
}

div {
  padding: 5px
}

button{
  background-color: gray;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: small;
  margin: 10px 3px 3px 3px;
  line-height: 10px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  width: 290px;
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