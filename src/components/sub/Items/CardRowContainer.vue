<script setup lang="ts">
import ItemCard from "./ItemCard.vue"
</script>

<template>
    <section class="Container">
        <div>
            <a><h2>{{ CtnName }}<material-icon name="arrow_right" filled round size="24"/></h2></a>
            <div class="content-ctn" v-if="Items.length > 0">
                <div class="control left" v-on:click="left()">
                    <material-icon name="arrow_left" filled round size="24"/>
                </div>
                <div class="content-overflow">
                    <ul ref="content" class="content" :style="{transform: 'translateX(' + offsetX + 'px)'}">
                        <li v-for="item of Items"><ItemCard :Item="item" /></li>
                    </ul>
                </div>
                <div class="control right" v-on:click="right()">
                    <material-icon name="arrow_right" filled round size="24"/>
                </div>
            </div>
            <div class="no-content" v-else>
                Nothing to show here :(
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
            offsetX: 0,
        }
    },
    computed: {},
    mounted() {
    },
    methods: {
        getIncrement() {
            return this.$refs.content.children[0].offsetWidth * 2;
        },
        roundToNearest(num: number, rawNearest: number | null | undefined) {
            let nearest = rawNearest || this.$refs.content.children[0].offsetWidth + 10;
            return Math.round(num / nearest) * nearest;
        },
        right() {
            this.updateElement(-1);
        },
        left() {
            this.updateElement(1);
        },
        updateElement(multiplier: number) {
            this.offsetX = Math.min(Math.max(this.roundToNearest(this.offsetX + this.getIncrement() * multiplier), -this.$refs.content.offsetWidth + this.$refs.content.parentElement.offsetWidth), 0);
        }
    }
}
</script>

<style scoped>
.Container {
    margin: 0;padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
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

    overflow-x: hidden;
}

.content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    gap: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
    scrollbar-width: none;

    margin: 0;
    padding: 16px 10px;
    position: relative;
    width: fit-content;

    transition: transform 0.3s cubic-bezier(0.45, 0.05, 0.49, 1.02);

    /*max-height: 150px;*/
}

.content-ctn {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;

    position: relative;
    width: 100%;
    height: 100%;

    flex: 1 1;
}

.control {
    height: auto;
    /*height: 100%;*/
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

    cursor: pointer;
    user-select: none;
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

.no-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;

    font-size: 1.8em;
    color: #888;
    background-color: rgba(0, 0, 0, 0.1);

    padding: 60px 0;
}
</style>