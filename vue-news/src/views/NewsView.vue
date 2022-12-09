<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  components: {
    ListItem
  },
  created() {
    this.$emit('startSpinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
          .then(() => {
            console.log('fetched');
            this.$emit('endSpinner');
          })
          .catch(error => console.log(error));
    }, 3000);
  }
}
</script>

<style scoped>
</style>