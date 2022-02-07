<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'Home',
  props: {
    title: String,
  },
  components: {
    Header
  },

}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
