<template>
    <div class="main">
        <div> <!-- Container -->
            <h1>Welcome back !</h1>
            <footer>
                <form>
                    <input type="text" placeholder="Username">
                    <input type="password" placeholder="Password">
                    <input type="submit" value="Login" @click.prevent="OnClick()">
                </form>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Login',
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
.main {
    background-color: #2AD56A;
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.main > div {
    position: relative;

    background-color: #fff;
    width: 400px;
    /*height: 300px;*/
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
}

footer {
    /*background-color: red;*/

    bottom: 10px;

    width: 100%;
    /*height: 200px;*/
}

form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

input {
    margin: 4px 8px;
    padding: 8px 6px;

    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}

input[type="submit"] {
    background-color: #2AD56A;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    margin: 16px 10px 8px;
}

</style>