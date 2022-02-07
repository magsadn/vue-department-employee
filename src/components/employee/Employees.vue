<template>
  <!--  departments.data  yazmaq lazimdir api ucun-->
  <div :key="employee.id" v-for="employee in employees">
    <!--   @toggle-department="$emit('toggle-department',employee.id)"-->
    <Employee @delete-employee="$emit('delete-employee',employee.id)" :employee="employee" />
  </div>
</template>

<script>
import Employee from "@/components/employee/Employee.vue";

export default {
  name: 'Employees',
  props: {
    employees: Array
  },
  components: {
    Employee
  },
  emits: [
      'delete-employee'
  ]
}
</script>

<style>

</style>