<script setup>
import UserBar from "./UserBar.vue";
import ImageGallary from "./ImageGallary.vue";
</script>

<template>
  <div class="profile-container">
    <UserBar
      username="shivani vyas"
      :userInfo="{ posts: 4, followers: 100, following: 342 }"
    />
    <ImageGallary :posts="[
        {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq5Q5vtPMetbB77I30rhC80N8CVw37d8CFg&s'
        },
        {
            
        id:2,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq5Q5vtPMetbB77I30rhC80N8CVw37d8CFg&s'
        
        }

    ]"/>
      
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
</style>
