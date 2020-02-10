<template>
  <div class="signup">
    
  <v-form>
    <v-container>
      <div class="ma-10 pa-7" id="cont">
      <v-col cols="12" sm="6" md="3" >
      <v-text-field label="username" v-model="username" :rules="userRules">
      </v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
       <v-text-field label="e.g example@gmail.com" v-model="email" :rules="emailRules">
      </v-text-field>
       </v-col>


      <v-col cols="12" sm="6" md="3">
       <v-text-field label="password" v-model="password">
      </v-text-field>
       </v-col>

      <v-col cols="12" sm="6" md="3">
       <v-text-field label="confirm-password" v-model="confirmPassword">
      </v-text-field>
      </v-col>

      <v-btn depressed class="success" @click="submit" router to="/post">Signup</v-btn>
      </div>
    </v-container>
    
  </v-form>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 data(){
   return{
     username: '',
     email: '',
     password: '',
     confirmPassword: '',
     userRules:[
        v => !!v || 'Name is required',
       v => v.length >= 4 || 'minimum of four characters'
     ],
     emailRules:[
        v => !!v || 'email is required',
        
     ]
   }
 },
 methods:{
   submit(){
     console.log(this.username,this.email,this.password,this.confirmPassword)
   }
 }
}
</script>
<style>
#cont{
  background-color: #C5E1A5
}
</style>