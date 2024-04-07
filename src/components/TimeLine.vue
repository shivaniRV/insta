<script setup>
import container from "./container.vue";
import Card from './Card.vue';

const data=[
    {
        id:1,
        username:"Taylor Swift",
        url:"https://cdn.britannica.com/86/182086-050-5FB81069/singer-Taylor-swift-2013.jpg",
        caption:"Midnight new album is out"
    },{
        id:2,
        username:"shraddha",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkdP55cyp4N4Mgp27UC72r3YtGg-McoHIu_ciR2kw_Q&s",
        caption:"Hey people!"

    }

]

//   components: { container }
  </script>

<template>
    <container>
        <div class="timeline-container">
            <Card v-for="post in data" :key="post.id" :post="post"/>
           

        </div>
     
    </container>
</template>

<style scoped>
.timeline-container{
    /* background-color:purple ; */
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

}
</style>