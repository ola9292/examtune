<template>
  <div class="account">
    <h1>Create a Test</h1>
    <v-card-text>
      <v-form>
        <v-text-field placeholder="title" v-model="title">
        </v-text-field>
         <v-textarea placeholder="test" v-model="test"></v-textarea>
      </v-form>
    </v-card-text>

    <v-btn depressed class="primary ma-6">Submit</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      title: "",
      test: ""
    }
  },
  methods:{
    add(){
      console.log(this.title,this.test)
    }
  }

}
</script>
<style scoped>
h1{
  color: green;
  text-align: center
}
</style>
