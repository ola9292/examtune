<template>
    <div  class="post">
     <v-form>
          <div class="ma-10 pa-7" id="cont">
         <v-text-field label="Test Description" v-model="test"  class="ma-8">
         </v-text-field>

         <v-select :items="items" label="Privacy"  class="ma-8">

         </v-select>
         <div>
         <v-row>
         <v-checkbox label="This Quiz has subgroups" class="mx-6"></v-checkbox>
          <v-checkbox label="Randomize Qyestions" class="mx-6"></v-checkbox>
           <v-checkbox label="Save test results" class="mx-6"></v-checkbox>
            <v-checkbox label="Load or edit question banks now" class="mx-6"></v-checkbox>
         </v-row>
         <v-row>
         <v-checkbox label="Hide correction from user when test is concluded" class="mx-6"></v-checkbox>
          <v-checkbox label="Hide test result from user after submission" class="mx-6"></v-checkbox>
           
         </v-row>
         <v-btn depressed class="ma-3 success" router to="/test" >Continue</v-btn>
         </div>
        </div>
        
         


        

        
     </v-form>
    </div>
</template>
<script>
export default {
  data(){
      return{
          test: '',
          items:['Private','Public']
      }
  }
}
</script>
<style scoped>
h1{
    background: black;
}
</style>