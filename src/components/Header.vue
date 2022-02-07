<template>
  <header>
    <h1>{{title}}</h1>
  </header>
  <div>
    <router-link to="/">
      <Button @btn-click="$emit('toggle-show-department')" :text="showDepartment ? 'Close':'Home'" :color="showDepartment ? 'red' : 'green'"/>
    </router-link>
    <router-link to="/departments">
      <Button @btn-click="$emit('toggle-show-department')" :text="showDepartment ? 'Close':'Department'" :color="showDepartment ? 'red' : 'green'"/>
    </router-link>
    <router-link to="/employees">
      <Button @btn-click="$emit('toggle-show-employee')" :text="showEmployee ? 'Close':'Employee'" :color="showEmployee ? 'red' : 'green'"/>
    </router-link>
  </div>

</template>

<script>
import Button from "@/components/Button";

export default {
  name: 'Header',
  props: {
    title: String,
    showDepartment: Boolean,
    showEmployee: Boolean
  },
  components: {
    Button,
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background: #e38c3b;
}
</style>