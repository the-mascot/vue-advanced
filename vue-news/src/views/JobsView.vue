<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.domain }}</a>
      <samll>{{ job.time_ago }}, {{ job.domain }}</samll>
      <small>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>