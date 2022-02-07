<template>
  <h1>{{ title }}</h1>
  <EmployeesPageHeader
      @toggle-show-add-employee="toggleShowAddEmployee" title="Employees"
      :showAddEmployee="showAddEmployee"/>
  <AddEmployee
      v-show="showAddEmployee"
      @add-employee="addEmployee"/>
  <Employees
      @delete-employee="deleteEmployee"
      :employees="employees"/>
  <router-view
      :showAddEmployee="showAddEmployee"></router-view>
</template>

<script>
import Employees from "@/components/employee/Employees";
import AddEmployee from "@/components/employee/AddEmployee";
import EmployeesPageHeader from "@/components/employee/EmployeesPageHeader";

export default {
  name: 'EmployeePage',
  props: {
    title: String,
    showAddDepartment: Boolean
  },
  components: {
    Employees,
    AddEmployee,
    EmployeesPageHeader,
  },
  data() {
    return {
      employees: [],
      showAddEmployee: false
    }
  },
  methods: {
    toggleShowAddEmployee() {
      this.showAddEmployee = !this.showAddEmployee
    },
    async addEmployee(employee) {
      const res = await fetch('api/employees', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(employee),
      })
      const data = await res.json()
      this.employees = [...this.employees, data]
    },
    async deleteEmployee(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`api/employees/${id}`, {
          method: 'DELETE',
        })

        res.status === 200 ? (this.employees = this.employees.filter((employee) => employee.id !== id)) : alert('Error deleting employee')
      }
    },
    async fetchEmployees() {
      const res = await fetch('api/employees')
      const data = await res.json()
      return data.data
    },
    async fetchEmployee(id) {
      const res = await fetch(`api/employees/${id}`)
      const data = await res.json()

      return data
    },


  },
  async created() {
    this.employees = await this.fetchEmployees()
  }

}
</script>