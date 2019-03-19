<template>
  <body>
  <div class="column">
    <img src="/static/images/journal.png"/>
    <h1>Keep all of your secrets in your personal blog.</h1>
    <h2>No one can see them.</h2>
    <form v-on:submit.prevent="register">
      <p>1. Choose a secret name (this is how you will be known by yourself).</p>
      <input class="narrow" v-model="username" placeholder="Secret Name">
      <p>2. Create an account.</p>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email Address">
      <input class="narrow" type="password" v-model="password" placeholder="Password">
      <button class="alternate" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>
    <footer>
      <p>Check us out on <a href="https://github.com/cagu3/cp5">GitHub</a></p>
  </footer>
  </div>
  </body>

  

</template>


<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
   username: this.username,
         email: this.email,
         password: this.password,
   name: this.name,
       });
     }
   }
 }
</script>


<style scoped>

body {
  background-color: #FFDB8C;
}

 img {
     width: 100px;
 }

 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
 .footer {
    float: left;
 }
</style>

