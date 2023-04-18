<script setup lang="ts">
import { MaterialIcon } from "@dbetka/vue-material-icons";
import Row from "../settings/Row.vue"

import { open } from '@tauri-apps/api/dialog';

</script>

<template>
    <Row :title="title" :description="description">
        <div class="ctn">
            <input type="text" readonly class="textinput" :value="path"/>
            <button class="button" v-on:click="OnClick">
                <MaterialIcon name="folder" icon="folder" />
            </button>
        </div>
    </Row>
</template>

<script lang="ts">

export default {
    name: 'FileLocation',
    components: { Row, MaterialIcon },
    props: {
        title: {
            type: String,
            default: "No title"
        },
        description: {
            type: String,
            default: "No description"
        }
    },
    data() {
        return {
            path: "/"
        }
    },
    computed: {},
    mounted() {
    },
    methods: {
        async OnClick() {
            const selected = await open({
                multiple: false,
                directory: true,
                title: "Select plugin installation directory",
                defaultPath: "/",
            });

            if (!selected) return;
            this.path = typeof(selected) == "object" ? selected[0] : selected;
        }
    }
}
</script>

<style scoped>
.ctn {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;

    background-color: rgb(223, 223, 223);
    border-radius: 10px 18px 18px 10px;

    border: 1px rgba(0, 0, 0, 0.5) solid;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

    overflow: hidden;
}

input {
    width: 100%;
    border: none;
    resize: none;
    overflow: hidden;

    padding: 10px;
    background-color: rgba(0, 0, 0, 0);
}

input:focus {
    outline: none;
}

button {
    border: none;
    border-left: 1px rgba(0, 0, 0, 0.5) solid;
    aspect-ratio: 1/1;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    background-color: #2AD56A;
}

button:hover {
    filter: brightness(0.8);
    cursor: pointer;
}
</style>