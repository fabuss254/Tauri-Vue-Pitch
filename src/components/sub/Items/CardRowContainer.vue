<script setup lang="ts">
import ItemCard from "./ItemCard.vue"
</script>

<template>
    <section class="Container">
        <div>
            <a><h2>{{ CtnName }}<material-icon name="arrow_right" filled round size="24"/></h2></a>
            <div class="content">
                <ItemCard :Item="item" v-for="item of Items" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">


export default {
    name: 'CardRowContainer',
    components: {},
    props: {
        CtnName: {
            type: String,
            required: true
        },
        Items: {
            type: Array,
            required: true
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

<style scoped>
.Container {
    margin: 0;padding: 0;
}

a {
    display: block;
    width: 0;
}

a > h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 10px;
}

a > h2 > i {
    transform: translate(-6px, 4px);
    transition: transform 0.2s cubic-bezier(0, 0, 0.57, 1.79);
}

a {
    text-decoration: none;
    user-select: none;
    cursor: pointer;
}

a:hover > h2 > i {
    transform: translate(0px, 4px);
}

.content {
    display: -webkit-inline-box;
    /*
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    */
    width: 100%;
    gap: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
    scrollbar-width: none;

    margin: 0;
    padding: 16px 10px;

    /*max-height: 150px;*/
}
</style>