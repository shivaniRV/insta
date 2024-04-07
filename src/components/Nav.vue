<script setup>
import {RouterLink,useRouter} from "vue-router"
import container from "./container.vue";
import AuthModal from "./AuthModal.vue"
import {useUserStore} from '../stores/Users'
import {ref} from "vue"
import { storeToRefs } from "pinia";

const userStore =useUserStore()

const {user,loadingUser}=storeToRefs(userStore)
const router=useRouter()
const searchusername =ref("")
const isAuthenticated=ref(false)
const onSearch=()=>{
    if(searchusername.value){
        router.push(`/profile/${searchusername.value}`);
        searchusername.value=""
    }
}

const handleLogout= async()=>{
    await userStore.handleLogout()
}
</script>
<template>
   <ALayoutHeader>
    <container>
        <div class="nav-container">
            <div class="right-content">
    <RouterLink to="/">Instagram</RouterLink>
    
        <AInputSearch
        v-model:value="value"
        placeholder="username..."
        style="width: 200px"
        @search="onSearch"
        />
        <div v-if="!loadingUser"></div>

    <div class="left-content" v-if="!user">
    <!-- <AButton type="primary">sign up</AButton> -->
    <!-- <AButton type="primary"> LogIn</AButton> -->
    <AuthModal :isLogin="false"/>
    <AuthModal :isLogin="true"/>
</div>
<div class="left-content" v-else>
    <a-button type="primary">Profile</a-button>
    <a-button type="primary" @click="handleLogout">Logout</a-button>
</div>
</div>

</div>
</container>
   </ALayoutHeader>
</template>
<style scoped>
.nav-container{
    /* background-color:purple; */
    display: flex;
    justify-content: space-between;
}
.right-content{
    display: flex;
    align-items:center ;
}
.right-content a{
    margin-right:10px;

}
.left-content{
    display: flex;
    align-items: center;
}
.left-content button{
    margin-left:10px;
    
}
</style>

