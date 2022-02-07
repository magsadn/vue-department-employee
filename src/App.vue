<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--      v-if ve v-show eyni metoddur -->
<!--   @toggle-employeeList="toggleEmployeeList"-->
  <div class="container">
    <Header title="Department Employee"/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/views/Home";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home
  },
  data() {
    return {
      employees: [],
    }
  },

}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  overflow: auto;
  min-height: 650px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
