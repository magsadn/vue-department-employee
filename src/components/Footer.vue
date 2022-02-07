<template>
  <footer>
    <p>Copyright &copy; 2022</p>
   <div class="link">
     <router-link to="/about">About</router-link>
     <router-link to="/contact">Contact</router-link>
   </div>
  </footer>
</template>

<style scoped>
  a {
    color: #333;
  }
  footer {
    margin-top: 30px;
    text-align: center;
  }
  .link {
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    margin: 0 auto;
    padding: 10px 0;
  }

</style>