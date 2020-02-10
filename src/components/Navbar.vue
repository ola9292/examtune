<template>
    <nav>
       <v-toolbar app flat class="green darken-3">
           <v-toolbar-title>
           <span>Exam</span>    
           <span class="font-weight-light">tune</span>
             </v-toolbar-title>
             <v-spacer></v-spacer>
             <div >
             <v-btn text color="grey" router to="/">
                 <v-icon>mdi-home</v-icon>
                 <span id="myBtn">Home</span>
                 </v-btn>

                 <v-btn text color="grey" router to="/pricing">
                 <v-icon>mdi-cash-usd</v-icon>
                 <span>Pricing</span>
                 </v-btn>

                 <v-btn text color="grey" router to="/account">
                 <v-icon>mdi-account</v-icon>
                 <span>Create Test</span>
                 </v-btn>
                </div>
                  <v-btn depressed color="success" router to="/Signup">
                 <span>Sign Up</span>
                 </v-btn>
            
       </v-toolbar>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
#myBtn:hover{
    color:aquamarine;
}
</style>