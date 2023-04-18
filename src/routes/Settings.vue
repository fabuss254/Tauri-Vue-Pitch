<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue"
import FileLocation from "../components/settings/FileLocation.vue"
import Boolean from "../components/settings/Boolean.vue";
</script>

<template>
    <div class="browse">
        <Sidebar />
        <div>
            <header>
                <h1>Settings</h1>
            </header>
            <div class="content">
                <FileLocation 
                    title="File Location"
                    description="Change the location of the file that stores your data."
                />
                <Boolean
                    title="Auto update"
                    description="Automatically update plugins when a new version is available."
                />
                <Boolean
                    title="Notifications"
                    description="Notify you when a new version of a plugin is available."
                />
                <Boolean
                    title="Tray on close"
                    description="Keep the application running in the background when you close the window."
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Settings',
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

header > h1 {
    margin: 0;
    padding: 10px 0;

    text-align: center;
}

.content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>