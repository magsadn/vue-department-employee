<template>
  <header>
    <h1>{{title}}</h1>
    <Button v-show="employeesPage" @btn-click="$emit('toggle-show-add-employee')" :text="showAddEmployee ? 'Close':'Add Employee'" :color="showAddEmployee ? 'red' : 'green'"/>
  </header>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: 'EmployeesPageHeader',
  props: {
    title: String,
    showAddEmployee: Boolean
  },
  components: {
    Button,
  },
  computed: {
    employeesPage(){
      if (this.$route.path === '/employees'){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

}
</style>