<template>
    <div class="Row">
        <div class="left">   
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <div class="right">
            <slot>test</slot>
        </div>
    </div>
    
</template>

<script lang="ts">

export default {
    name: 'Row',
    components: {},
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
        return {}
    },
    computed: {},
    mounted() {
    },
    methods: {
    }
}
</script>

<style>
.Row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px 10px;
    margin: 0;

    overflow-y: hidden;
    position: relative;

    background-color: rgba(0, 0, 0, 0);
}

.Row:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>

<style scoped>
.left {
    width: 70%;
    float: left;
}

.right {
    width: 30%;
    height: 100%;
    float: right;
}

h2 {
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    padding: 0;
}
</style>