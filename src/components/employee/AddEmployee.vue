<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Add Name" />
    </div>
    {{ name }}
    <div class="form-control">
      <label>Surname</label>
      <input type="text" v-model="surname" name="surname" placeholder="Add Surname" />
    </div>
    <div class="form-control">
      <label>Email</label>
      <input type="text" v-model="email" name="email" placeholder="Add Email" />
    </div>
    <div class="form-control">
      <label>Phone</label>
      <input type="text" v-model="phone" name="phone" placeholder="Add Phone" />
    </div>
    <div class="form-control">
      <label>Address</label>
      <input type="text" v-model="address" name="address" placeholder="Add Address" />
    </div>
    <div class="form-control">
      <label>Department</label>
      <input type="text" v-model="department" name="department" placeholder="Add Department" />
    </div>
    <input type="submit" value="Save Employee" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddEmployee',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
      department: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.name) {
        alert('Please add a employee')
        return
      }
      const newEmployee = {
        // id: Math.floor(Math.random() * 100000),
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        address: this.address,
        department: this.department
      }
      this.$emit('add-employee', newEmployee)

      this.name = ''
      this.surname = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.department = ''
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>