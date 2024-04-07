<script  setup>
import { ref,defineProps,reactive } from 'vue';
import {useUserStore}  from "../stores/Users"
import {storeToRefs} from "pinia"

const open = ref(false);

const useStore=useUserStore()
const {errorMessage,loading,user}= storeToRefs(useStore);

const props= defineProps((['isLogin']))
const userCredentials= reactive({
  email:"",
  password:"",
  username:""
})


const showModal = () => {
  open.value = true;
  useStore.getUser()
};
const clearUserCredentialsInput=()=>{
  userCredentials.username="";
  userCredentials.email="";
  userCredentials.password="";
  useStore.clearErrorMessage()

}

const handleOk = async(e) => {
  if(props.isLogin){
    await useStore.handleLogin({
      password:userCredentials.password,
      email:userCredentials.email
    });

  }
  else{
    await useStore.handleSignup(userCredentials);

  }
  
   
   if(user.value)  {
    // open.value=false;
    // userCredentials.email="";
    // userCredentials.password="";
    // userCredentials.username=""
    clearUserCredentialsInput()
   }
  // open.value = false;
};

const handleCancel=()=>{
  clearUserCredentialsInput()
 open.value=false
}
const title= props.isLogin ?'Login' :'Signup'

</script>


<template>
 
  <div>
    <!-- {{ user }} -->
    
    <a-button type="primary" @click="showModal" class="btn">{{ title}}</a-button>
  
    <!-- <a-modal v-model:open="open" title="title" @ok="handleOk"> -->
      <a-modal v-model:visible="open" title="signup" @ok="handleOk">
        <template #footer>
        <a-button key="back" @click="handleCancel">cancel</a-button>
        <a-button 
         :disabled="loading"
         :key="submit" 
         type="primary" 
         :loading="loading"
          @click="handleOk" 
          >
          Submit
        </a-button>
      </template>
       <div v-if="!loading" class="input-container">
      <a-input  class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
      <a-input class="input" v-model:value="userCredentials.email" placeholder="Email" />
      <a-input  class="input" v-model:value="userCredentials.password" placeholder="Password" type="password" />
    </div>
    <div  v-else class="spinner">
      <ASpin/>
    </div>
      <a-typography v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography>
      

      <!-- <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p> -->
    </a-modal>
  </div>
</template>

<style scoped>
 .btn {
margin-left:10px;

 }
 .input{
  margin-top:5px;
 }
 .input-container{
  height: 120px;
 }
 .spinner{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
 }
</style>
