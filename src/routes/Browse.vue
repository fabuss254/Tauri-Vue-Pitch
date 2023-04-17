<script setup lang="ts">
import Sidebar from "./../components/Sidebar.vue"
import CardRowContainer from "./../components/sub/Items/CardRowContainer.vue"
import axios from "axios"
</script>

<template>
    <div class="browse">
        <Sidebar />
        <div>
            <header>
                <h1>Welcome back USERNAME!</h1>
            </header>
            
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Browse',
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    mounted() {
    },
    methods: {
        OnClick() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.browse {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;

    height: 100%;
    overflow-x: hidden;
}

.browse > div:last-child {
    flex: 1 1;
    overflow-x: hidden;
}
</style>