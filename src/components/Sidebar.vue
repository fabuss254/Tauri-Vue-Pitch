<script setup lang="ts">
import Btn from "./sub/SidebarBtn.vue"
import Delimiter from "./sub/SidebarDelimiter.vue"
</script>

<template>
    <div class="bar">
        <Btn btnName="Home" btnIcon="home" link="/"/>
        <Btn btnName="Installed" btnIcon="backpack"/>
        <Delimiter />
        <Btn btnName="Browse" btnIcon="search" link="/browse"/>
        <Btn btnName="Shop" btnIcon="store"/>
        <Delimiter />
        <Btn btnName="Settings" btnIcon="settings"/>
        <Btn btnName="Profile" btnIcon="person"/>
        <Btn btnName="Logout" btnIcon="logout"/>
        <Delimiter />
        <Btn btnName="About" btnIcon="info"/>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
.bar {
    background-color: white;
    height: 100%;
    width: 36px;

    transition: width 0.2s ease-in-out;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.2);

    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: hidden;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
}

.bar:hover {
    width: 150px;
}

@media only screen and (min-width: 1000px) {
    .bar {
        width: 150px;
    }
}

/*
.bar > div {
    width: 150px !important;
    text-align: center;
    position: absolute;
}


.bar > div > div {
    width: 100%;
}*/
</style>