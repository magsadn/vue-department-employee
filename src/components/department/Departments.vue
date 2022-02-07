<template>
<!--  departments.data  yazmaq lazimdir api ucun-->
  <div :key="department.id" v-for="department in departments">
    <!--   @toggle-employeeList="$emit('toggle-employeeList',department.id)"-->
    <Department
        @show-department="$emit('toggle-show-department',department.id)"
        @toggle-employeeList="$emit('toggle-employeeList',department.id)"
        @delete-department="$emit('delete-department',department.id)"
        :department="department" />
  </div>
</template>

<script>
import Department from "@/components/department/Department.vue";

  export default {
    name: 'Departments',
    props: {
      departments: Array
    },
    components: {
      Department
    },
    emits: [
        'show-department',
        'delete-department',
        'toggle-employeeList'
    ]
  }
</script>

<style>

</style>