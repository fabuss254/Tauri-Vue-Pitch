<template>
  <router-view class="e"></router-view>
</template>

<script lang="ts">
import itch from "./Libraries/itch";
import Settings from "./Libraries/settings";

export default {
  name: 'App',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  async mounted() {
    await Settings.Load();

    itch.setKey(Settings.Get("Token", ""));
    if (await itch.getUserInfo()) {
      this.$router.push('/');
    } else {
      this.$router.push('/login');
    }

  },
  methods: {}
}
</script>

<style scoped>

</style>
