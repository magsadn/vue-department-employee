<template>
  <!-- @dblclick="$emit('toggle-reminder',department.id)"  :class="[department.employeeList ? 'employeeList' : '' , 'department']"-->
  <!-- class="departments" -->
  <div class="emp" :class="[employee.department ? 'department' : '' , 'employee']">
    <h3>{{employee.name}}{{employee.surname}}
      <div class="icons">
        <i @click="$emit('edit-employee',employee.id)"  class="far fa-edit"></i>
        <i @click="$emit('delete-employee',employee.id)" class="fas fa-times"></i>
      </div>
    </h3>
    <p>{{employee.email}}</p>
    <p>{{employee.phone}}</p>
    <p>{{employee.address}}</p>
    <p>{{employee.department.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    employee: Object
  },
}
</script>

<style>
.far  {
  color: blue;
  padding-right: 40px;
  opacity: 0;
}
.fas {
  color: red;
  opacity: 0;
}

.employee {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.employee:hover .fas, .employee:hover .far {
  opacity: 1;
}

.employee.department {
}

.employee:hover {
  border-left: 5px solid orange;
}

.emp:hover {
  background: #ffebdc;
}

.employee h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>