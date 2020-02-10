<template>
 <v-app class="grey">
<navbar />

<v-content>
  <router-view>

  </router-view>
 

</v-content>

<footer-app></footer-app>
 </v-app>
</template>
 
 <script>
 import Navbar from './components/Navbar'
 import Footer from './components/Footer'

 export default {
   name: 'App',
   components:{Navbar,
   'footer-app' : Footer},
  
   data (){
     return{
        
     }
   }

 }
 </script>