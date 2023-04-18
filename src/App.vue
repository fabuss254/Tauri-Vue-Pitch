<template>
  <router-view class="e"></router-view>
</template>

<script lang="ts">
import { BaseDirectory, createDir, exists, writeTextFile, readTextFile } from "@tauri-apps/api/fs";
import itch from "./Libraries/itch";

export default {
  name: 'App',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  async mounted() {
    if (!(await exists('fab-pitch', {dir: BaseDirectory.LocalData}))){
        try {
            await createDir('fab-pitch', {dir: BaseDirectory.LocalData});
            writeTextFile('fab-pitch/config.json', JSON.stringify({}), {dir: BaseDirectory.LocalData});
        } catch(e) {
            console.log("Error while creating directory", e);
        }
    }

    let Data = JSON.parse(await readTextFile('fab-pitch/config.json', {dir: BaseDirectory.LocalData}));
    itch.setKey(Data.key);
    console.log(itch)
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
