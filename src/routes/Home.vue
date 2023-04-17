<script setup lang="ts">
import Sidebar from "./../components/Sidebar.vue"
import CardRowContainer from "./../components/sub/Items/CardRowContainer.vue"
import axios from "axios"
import xml2js from 'xml2js';
</script>

<template>
    <div class="home">
        <Sidebar />
        <div>
            <header>
                <h1>Welcome back USERNAME!</h1>
            </header>
            <div class="content"> <!-- CONTENT -->
                <CardRowContainer 
                    :Items="featured.filter((item) => item.price == '$0.00')"
                    CtnName="Free" 
                />
                <CardRowContainer 
                    :Items="featured.filter((item) => item.price != '$0.00')"
                    CtnName="Paid" 
                />
                <CardRowContainer 
                    :Items="[]"
                    CtnName="Installed" 
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Home',
    components: {},
    props: {},
    data() {
        return {
            featured: [],
        }
    },
    computed: {},
    async mounted() {
        // TODO: Define a type for search's returns
        let res = await axios.get('https://itch.io/tools/tag-roblox-studio-plugin.xml', {
                responseType: "text",
        })
            
        let collection = new DOMParser().parseFromString(res.data, "text/xml")
        Array.from(collection.getElementsByTagName("item")).forEach((item) => {
            let tbl = {}
            for (let child of item.children){
                tbl[child.tagName] = child.textContent
            }
            this.featured.push(tbl);
        })
    },
    methods: {
    }
}
</script>

<style scoped>
header {
    background-color: #2AD56A;
    width: 100%;
    height: 80px;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    box-shadow: inset 0px -4px 10px 0 rgba(0, 0, 0, 0.2);

}

.home > div:last-child {
    flex: 1 1;
    overflow-x: hidden;
}

.home {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;

    height: 100%;
    overflow-x: hidden;
}

.content {
    flex: 1 1;
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;

    padding: 0 10px;
    overflow-x: hidden;
    position: relative;
}

</style>