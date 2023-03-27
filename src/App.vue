<script setup lang="ts">
import {readDir} from "@tauri-apps/api/fs";
import {resolve, sep} from "@tauri-apps/api/path";
let Routes: {[k: string]: any} = {};

(async () => {
  let Path = await resolve("./../src/routes")
  let Data = await readDir(Path)

  for (let File of Data) {
    if (!File.name) continue;

    console.log("loading", Path + sep + File.name + "...")
    if (File.name.endsWith(".vue")) {
      Routes[File.name] = await import(Path + sep + File.name)
    }
  }

  console.log("Done loading routes", Routes)
})()

</script>

<template>
  Hello
</template>


<style scoped>

</style>
