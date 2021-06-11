<template>
  <div class="container">
    <div class="boxItens">
      <p>
        <b>Produto: </b>{{ product.name }}<br />
        <b>Preço: </b>R${{ product.price }}<br />
        <b>Categoria: </b>{{ product.category }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.boxItens {
  background-color: #fdfdfe;
  border: 1px solid #fdfdfe;
  border-radius: 5px;
  color: #52616f;
  text-align: left;
  padding: 10px;
  margin: 1px 1px;
}
</style>