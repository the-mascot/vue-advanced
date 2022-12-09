<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
    <spinner :loading=this.fetchedLoadingStatus></spinner>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";
import { mapGetters } from "vuex";

export default {
  components: {
    ToolBar,
    Spinner
  },
  computed: {
    ...mapGetters(['fetchedLoadingStatus'])
  },
  created() {
    this.$store.commit('START_SPINNER');
    setTimeout(() => {
      console.log('wait');
      this.$store.commit('END_SPINNER');
    }, 3000);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
