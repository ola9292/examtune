<template>
    <div  class="test">
        <h1>test</h1>
        <v-form>
          <div class="ma-10 pa-7" id="cont" v-for="(test, index) in tests" :key="test.title">
            <v-text-title class="mx-6">Question {{index}} of {{index}} </v-text-title>
            <v-text-field label="Enter question here..." class="mx-6" v-model="this.teststest.question1"></v-text-field>
             <v-text-title class="mx-6">Option 1</v-text-title>
            <v-text-field label="Enter option here..." class="mx-6" v-model="this.test.option1"></v-text-field>
             <v-text-title class="mx-6">Option 2</v-text-title>
            <v-text-field label="Enter option here..." class="mx-6" v-model="this.test.option2"></v-text-field>
             <v-text-title class="mx-6">Option 3</v-text-title>
            <v-text-field label="Enter option here..." class="mx-6" v-model="this.test.option3"></v-text-field>
             <v-text-title class="mx-6">Option 4</v-text-title>
            <v-text-field label="Enter option here..." class="mx-6" v-model="this.test.option4"></v-text-field>
              <v-text-title class="mx-6">Answer Notes and Workings</v-text-title>
            <v-text-field label="Enter workings..." class="mx-6" v-model="note"></v-text-field>
             <v-select :items="items" label="option"  class="ma-8"></v-select>
               
          </div>

        
           
        </v-form>
         <v-row  class="ma-10 pa-7">
                    <v-btn depressed v-on:click="addNew" class="success mx-3">Add</v-btn>
                    <v-btn depressed @click="removeNew" class="success mx-3">Remove</v-btn>

                </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
           items:[1,2,3,4],
           tests:[{
          question1: "",
             option1: "",
              option2: "",
               option3: "",
                option4: "",

           }]
        }

        },
    
    methods:{
      addNew(){
      this.tests.push({
          question1: "",
             option1: "",
              option2: "",
               option3: "",
                option4: "",

      })
    },
    removeNew(){
      this.tests.pop()
    }
    }
    
}
</script>