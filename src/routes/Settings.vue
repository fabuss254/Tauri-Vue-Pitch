<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue"
import FileLocation from "../components/settings/FileLocation.vue"
import Boolean from "../components/settings/Boolean.vue";
import Settings from "../Libraries/settings"
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
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
                    :defaultValue="Settings.Get('FileLocation', '/')"
                    :onChange="(value: any) => Settings.Set('FileLocation', value)"
                />
                <Boolean
                    title="Auto update"
                    description="Automatically update plugins when a new version is available."
                    :defaultValue="Settings.Get('AutoUpdate', true)"
                    :onChange="(value: any) => Settings.Set('AutoUpdate', value)"
                />
                <Boolean
                    title="Notifications"
                    description="Notify you when a new version of a plugin is available."
                    :defaultValue="Settings.Get('Notifications', true)"
                    :onChange="(value: any) => {Settings.Set('Notifications', value); if (value && HasNotificationPermission) sendNotification({title: 'Notifications enabled', body: 'You will now be notified when a new version of a plugin is available.'})}"
                />
                <Boolean
                    title="Tray on close"
                    description="Keep the application running in the background when you close the window."
                    :defaultValue="Settings.Get('TrayOnClose', false)"
                    :onChange="(value: any) => Settings.Set('TrayOnClose', value)"
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
        return {
            HasNotificationPermission: false
        }
    },
    computed: {},
    async mounted() {
        let permissionGranted = await isPermissionGranted();
        if (!permissionGranted) {
            const permission = await requestPermission();
            console.log(permission)
            permissionGranted = permission === 'granted';
        }
        this.HasNotificationPermission = permissionGranted;
        console.log(permissionGranted)
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