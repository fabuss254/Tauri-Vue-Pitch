<script setup lang="ts">
import ItemCard from "./ItemCard.vue"
</script>

<template>
    <section class="Container">
        <div>
            <a><h2>{{ CtnName }}<material-icon name="arrow_right" filled round size="24"/></h2></a>
            <div class="content-ctn">
                <div class="control left" v-on:click="left()">
                    <material-icon name="arrow_left" filled round size="24"/>
                </div>
                <div class="content-overflow">
                    <div class="content">
                        <ItemCard :Item="item" v-for="item of Items" />
                    </div>
                </div>
                <div class="control right" v-on:click="right()">
                    <material-icon name="arrow_right" filled round size="24"/>
                </div>
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
        return {
            offsetx: 0,
        }
    },
    computed: {},
    mounted() {
    },
    methods: {
        right() {

        },
        left() {

        }
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
    padding: 0 10px;
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

.content-overflow {
    /*width: 100%;*/
    height: 100%;
}

.content {
    display: -webkit-inline-box;
    gap: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
    scrollbar-width: none;

    margin: 0;
    padding: 16px 10px;
    position: relative;

    /*max-height: 150px;*/
}

.content-ctn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    align-items: stretch;
    position: relative;
    width: 100%;
    height: 100%;

    flex: 1 1;
}

.control {
    height: 100%;
    width: 30px;
    background-color: rgb(0, 0, 0);
    flex: 0 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.1s ease-out;

    color: white;
    opacity: .2;
    z-index: 50;
}

.control > i {
    transform: scale(2);
}

.control:hover {
    opacity: .8;
}

.left {
    left: 0;
    border-radius: 0 20px 20px 0;
}

.right {
    right: 20px;
    border-radius: 20px 0 0 20px;
}
</style>