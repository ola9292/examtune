<template>
    <div  class="testinfo">
        <h1>test-info</h1>
        <div v-for="employee in employees" :key="employee.name">
        <v-form>
            <v-text-field label="job" class="mx-6" v-model="job">

            </v-text-field>

            <v-text-field label="name" class="mx-6" v-model="name">

            </v-text-field>

            <v-textarea label="description" class="mx-6" v-model="description">

            </v-textarea>


        
        </v-form>
        
        </div>
        <div>
            <v-btn depressed class="primary mx-6" @click="addnewForm">add form</v-btn>
        </div>
    </div>
</template>
<script>
export default {
      data(){
        return{
         employees:[{
             name:'',
             job:'',
             description:''
         }]
        }

        },
        methods:{
            addnewForm (){
                this.employees.push({
                      name:'',
                     job:'',
                     description:''
                })
            }
        }
}
</script>