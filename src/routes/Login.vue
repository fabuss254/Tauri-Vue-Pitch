<template>
    <div class="main">
        <div> <!-- Container -->
            <h1>Welcome back !</h1>
            <footer>
                <form>
                    <input type="text" placeholder="API Key" ref="keyInput">
                    <p :style="{display: errorMessage == '' ? 'none' : 'block'}">{{ errorMessage }}</p>
                    <input type="submit" value="Login" @click.prevent="OnClick()">
                </form>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import itch from "../Libraries/itch";

export default {
    name: 'Login',
    components: {},
    props: {},
    data() {
        return {
            errorMessage: ""
        }
    },
    computed: {},
    mounted() {
        
    },
    methods: {
        async OnClick() {
            this.errorMessage = "";
            const key: string = this.$refs.keyInput.value
            console.log("Entered key", key);
            itch.setKey(key);

            let userInfo = await itch.getUserInfo();
            if (!userInfo) {
                this.errorMessage = "Error: key is invalid";
                return;
            }

            this.$router.push('/');
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

    margin: 8px 10px 8px;
}

p {
    color: red;
    text-align: left;
    margin: 0 15px;

    font-size: 12px;
    font-weight: bold;
}

</style>