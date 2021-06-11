<template>
  <section>    
    <article v-for="(item, index) in items" :key="index">
        <Picture :link="item.img" :title="item.titleImg"/>
        <section>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </section>
    </article>
  </section>
</template>

<script>
import Picture from './Picture';
export default {
  name: 'Article',
  components: {
    Picture,
  },
  data(){
    return{
      items: [
        {
          id: 1,
          title: 'At vero',
          content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
          titleImg: 'imagem 1',
          img: 'img1'
        },
        {
          id: 2,
          title: 'Et harum',
          content:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo maxime placeat facere possimus.',
          titleImg: 'imagem 2',
          img: 'img2'
        },
        {
          id: 3,
          title: 'Ut enim',
          content:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in',
          titleImg: 'imagem 3',
          img: 'img3'
        },
      ]
    }
  }
}
</script>

<style scoped>
article{
  display: flex;
  margin-bottom: 1%;
  background-color: #c9d6df;
}
article section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
}
</style>