<script setup lang="ts">
import { MaterialIcon } from "@dbetka/vue-material-icons";
import Row from "./Row.vue"

</script>

<template>
    <Row :title="title" :description="description">
        <div class="ctn">
            <div :style="{backgroundColor: value ? '#2AD56A' : ''}">
                <div class="cursor" :style="{left: value ? '75%' : '25%'}"></div>
                <button class="button" v-on:click="OnClick">
                </button>
            </div>
        </div>
    </Row>
</template>

<script lang="ts">

export default {
    name: 'Boolean',
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
            value: false
        }
    },
    computed: {},
    mounted() {
    },
    methods: {
        async OnClick() {
            this.value = !this.value;
        }
    }
}
</script>

<style scoped>
.ctn {
    width: 100%;
    height: 30%;
    min-height: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: right;
    align-content: center;
    flex-wrap: nowrap;

    overflow: hidden;
    position: relative;
}

.ctn > div {
    width: 60px;
    height: 100%;
    min-height: 30px;

    background-color: rgb(223, 223, 223);
    border-radius: 18px;

    border: 1px rgba(0, 0, 0, 0.5) solid;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    position: relative;
    
    transition: background-color 0.15s cubic-bezier(0.43,-0.4, 0.54, 1.42);
}

.cursor {
    height: 80%;
    background-color: white;

    position: absolute;
    aspect-ratio: 1/1;
    border-radius: 50%;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);

    border: 1px rgba(0, 0, 0, 0.5) solid;
    transition: left 0.15s cubic-bezier(0.43,-0.4, 0.54, 1.42);
}

button {
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;

    z-index: 99;
    cursor: pointer;
    user-select: none;
}
</style>