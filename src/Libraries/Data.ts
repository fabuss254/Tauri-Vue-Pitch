import { BaseDirectory, createDir, exists, writeTextFile, readTextFile } from "@tauri-apps/api/fs";

type DataFolder = {
    key: string | undefined,
    config: {
        FileLocation: string,
        AutoUpdate: boolean,
        AutoLaunch: boolean,
        Notifications: boolean,
        TrayOnClose: boolean,
    }
}

class Data() {
    this.dataCache: DataFolder = {};

    getCachedData() {
        return this.dataCache;
    }

    async getData(cacheAllowed = true) : promise<DataFolder> {
        if (cacheAllowed && this.dataCache) return this.dataCache;

        if (!(await exists('fab-pitch', {dir: BaseDirectory.LocalData}))){
            try {
                await createDir('fab-pitch', {dir: BaseDirectory.LocalData});
                writeTextFile('fab-pitch/config.json', JSON.stringify({}), {dir: BaseDirectory.LocalData});
            } catch(e) {
                console.log("Error while creating directory", e);
            }
        }

        return JSON.parse(await readTextFile('fab-pitch/config.json', {dir: BaseDirectory.LocalData}));
    }
}

export default new Data();