<template>
<!-- @dblclick="$emit('toggle-reminder',department.id)"  :class="[department.employeeList ? 'employeeList' : '' , 'department']"-->
<!-- class="departments" -->
  <router-link class="router" :to="{ path: '/departments/' + department.id}">
    <div @click="$emit('show-department',department.id)" class="dep" @dblclick="$emit('toggle-employeeList',department.id)"  :class="[department.employeeList ? 'employeeList' : '' , 'department']">
      <h3>{{department.name}}
        <div class="icons">
          <i @click="$emit('edit-employee',department.id)"  class="far fa-edit"></i>
          <i @click="$emit('delete-department',department.id)" class="fas fa-times"></i>
        </div>
      </h3>
      <p>{{department.phone}}</p>
      <p>{{department.employeeList}}</p>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'Department',
    props: {
      department: Object
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

.router {
  text-decoration: none;
  color: inherit;
}

  .department:hover .fas, .department:hover .far {
    opacity: 1;
  }

  .department {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .dep:hover {
    background: #e1e1fc;
  }

  .department.employeeList {
  }

  .department:hover {
    border-left: 5px solid blue;
  }

  .department h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>