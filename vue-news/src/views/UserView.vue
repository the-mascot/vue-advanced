<template>
  <div>
    <user-profile :info="userInfo">
      <template #username>{{ userInfo.id }}</template>
<!--      <template slot="time">{{ userInfo.created }}</template>-->
      <span slot="karma">{{ userInfo.karma }}</span>
<!--      <template slot="karma">{{ userInfo.karma }}</template>-->
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style scoped>
</style>