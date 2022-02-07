<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Department</label>
      <input type="text" v-model="name" name="name" placeholder="Add Department" />
    </div>
    {{ name }}
    <div class="form-control">
      <label>Phone</label>
      <input
          type="text"
          v-model="phone"
          name="phone"
          placeholder="Add Phone"
      />
    </div>
    <input type="submit" value="Save Department" class="btn btn-block" />
  </form>
</template>

<script>
  export default {
    name: 'AddDepartment',
    data() {
      return {
        name: '',
        phone: ''
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()

        if (!this.name) {
          alert('Please add a department')
          return
        }
        const newDepartment = {
          // id: Math.floor(Math.random() * 100000),
          name: this.name,
          phone: this.phone
        }
        this.$emit('add-department', newDepartment)

        this.name = ''
        this.phone = ''
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