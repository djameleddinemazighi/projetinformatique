<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link v-if="!authenticated" to="/user/login">login | </router-link> 
      <router-link v-if="!authenticated" to="/user/register">Register |</router-link>  
      <router-link to="/user/users">Users</router-link> | 
         <router-link to="/roles">Roles</router-link> | 
         <router-link to="/rolesCreate">Creer Roles</router-link> | 
         <button v-if="authenticated" @click="logout()">logout</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
   data() {
    return {
        authenticated: false,
    };
  },
  created() {
    if (localStorage.getItem('token')) {
      this.authenticated = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      location.reload();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
