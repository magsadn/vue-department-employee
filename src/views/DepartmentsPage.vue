<template>
  <h1>{{ title }}</h1>
  <DepartmentsPageHeader
      @toggle-show-add-department="toggleShowAddDepartment" title="Departments"
      :showAddDepartment="showAddDepartment"/>
  <AddDepartment
      v-show="showAddDepartment"
      @add-department="addDepartment"/>
  <Departments
      @toggle-employeeList="toggleEmployeeList"
      @delete-department="deleteDepartment"
      :departments="departments"/>
  <router-view
      :showAddDepartment="showAddDepartment"></router-view>
</template>

<script>
import Departments from "@/components/department/Departments";
import AddDepartment from "@/components/department/AddDepartment";
import DepartmentsPageHeader from "@/components/department/DepartmentsPageHeader";

export default {
  name: 'DepartmentsPage',
  props: {
    title: String,
    showAddDepartment: Boolean,
  },
  components: {
    Departments,
    AddDepartment,
    DepartmentsPageHeader
  },
  data() {
    return {
      department: [],
      departments: [],
      showAddDepartment: false
    }
  },
  methods: {
    toggleShowAddDepartment() {
      this.showAddDepartment = !this.showAddDepartment
    },

    async addDepartment(department) {
      const res = await fetch('api/departments', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(department),
      })
      const data = await res.json()
      this.departments = [...this.departments, data]
    },

    async deleteDepartment(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`api/departments/${id}`, {
          method: 'DELETE',
        })

        res.status === 200 ? (this.departments = this.departments.filter((department) => department.id !== id)) : alert('Error deleting department')
      }
    },

    async toggleEmployeeList(id) {
      const departmentToToggle = await this.fetchDepartment(id)
      const updDepartment = {...departmentToToggle, employeeList: !departmentToToggle.employeeList}
      const res = await fetch(`api/departments/${id}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(updDepartment)
          }
      )

      const data = await res.json()

      this.departments = this.departments.map((department) => department.id === id ? {
        ...department,
        employeeList: data.employeeList
      } : department)
    }

    ,
    async fetchDepartments() {
      const res = await fetch('api/departments')
      const data = await res.json()
      return data.data
    },
    async fetchDepartment(id) {
      const res = await fetch(`api/departments/${id}`)
      const data = await res.json()

      return data
    },


  },
  async created() {
    this.departments = await this.fetchDepartments()
  }

}
</script>