
<script setup lang="ts">

</script>

<template>
    <div class="btn" v-on:click="redirect(this.link)">
        <material-icon :name="btnIcon" filled round size="24"/>
        <p>{{ btnName }}</p>

        <div></div>
    </div>
</template>

<script lang="ts">

export default {
    name: '',
    components: {},
    props: {
        btnName: {
            type: String,
            required: true
        },
        btnIcon: {
            type: String,
            required: true
        },
        IconWeight: {
            type: Number,
            default: 400,
        },
        link: {
            type: String,
            default: "/",
        }
    },
    data() {
        return {}
    },
    computed: {},
    mounted() {
    },
    methods: {
        redirect(link: string) {
            this.$router.push(link)
        }
    }
}
</script>

<style scoped>
.btn {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 40px;
    cursor: pointer;
    user-select: none;

    position: relative;
}

.btn p {
    margin: 0 5px;
}

.btn i {
    padding-left: 6px;
}

.btn > div { /* Hover effect */
    position: absolute;
    width: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.25s ease-out, width 0.15s ease-in-out;
}

.btn:hover > div {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>