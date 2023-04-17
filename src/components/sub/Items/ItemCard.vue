<template>
    <div class="ctn">
        <h1>{{ Item.plainTitle }}</h1>
        
        <!-- Hide the price tag when it's free -->
        <!--<div :class="'price-tag ' + (Item.price == '$0.00' ? 'hide' : '') ">{{ Item.price }}</div>-->

        <!-- OR -->

        <!-- Make the price tag blue and show 'FREE' -->
        <div :class="'price-tag ' + (Item.price == '$0.00' ? 'free' : '') ">{{ Item.price == '$0.00' ? 'FREE' : Item.price }}</div>

        <div class="bg-img" v-bind:style="{ 'background-image': 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(' + Item.imageurl + ')' }"></div>
        <div class="info-ctn">
            <p class="desc">{{ Item.description.split(/<\/?[^>]+>/)[0] }}</p>
            <p class="author"><b>{{ Item.guid.match(/https:\/\/(.+)\.itch\.io/)[1] }}</b></p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ItemCard',
    components: {},
    props: {
        Item: {
            type: Object,
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
.ctn {
    --bg-scale: 60%;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px 0 rgba(0, 0, 0, 0.2);

    aspect-ratio: 6/4;
    height: 175px;
    /*height: 80%;*/

    overflow: hidden;
    position: relative;

    user-select: none;
    cursor: pointer;

    transition: all 0.1s cubic-bezier(0.41, 0.64, 0.6, 1.8);
}

.ctn:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 2px 0 rgba(0, 0, 0, 0.2);
}

.bg-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: var(--bg-scale);

    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), var(--bg-img);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

h1 {
    position: absolute;
    left: 6px;
    bottom: calc((90% - var(--bg-scale)) + 4px);
    z-index: 2;
    color: white;

    width: 80%;

    text-shadow: 0px 0px 10px black;
    font-size: 20px;
}

.info-ctn {
    position: absolute;
    height: calc(100% - var(--bg-scale));

    display: flex;
    align-content: center;
    align-items: flex-end;
    flex-direction: column;

    width: calc(100% - 12px);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.desc {
    color: #696969;
    font-size: 13px;
    text-align: left;

    width: 100%;
    height: 40px;

    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;

    /*background-color: red;*/
}

.author {
    position: absolute;
    bottom: 0;

    width: 100%;
    text-align: right;

    font-size: 14px;
}

.price-tag {
    position: absolute;
    top: 0;
    right: 0;

    background-color: #2AD56A;
    color: white;
    font-size: 13px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 0 0 0 10px;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);

    z-index: 5;
}

.free {
    background-color: #2a88d5;
}
.hide {
    display: none;
}

p {
    margin: 0%;
}
</style>