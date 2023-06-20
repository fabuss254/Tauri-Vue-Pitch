import { writeTextFile, readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
const Settings: {Load: () => Promise<void>, Save: () => Promise<void>, Get: (Name: string, Default: any) => any, Set: (Name: string, Value: any) => void, RawData: any} = {}

function cesar(str: string, amount: number): string {
    if (amount < 0) return cesar(str, amount + 26);

    let res = '';
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c.match(/[a-z]/i)) {
        const code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90))
            c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        else if ((code >= 97) && (code <= 122))
            c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        res += c;
    }
    return res;
};

Settings.Load = async function(doForce: boolean = false) {
    if (!doForce && Settings.RawData) return;

    let RawData
    try {
        RawData = await readTextFile('fab-pitch/appsettings.conf', { dir: BaseDirectory.LocalData });
    } catch {
        await writeTextFile('fab-pitch/appsettings.conf', cesar('{}', 10), { dir: BaseDirectory.LocalData });
    }
    if (RawData === null || RawData === undefined){
        Settings.RawData = {}
        return
    }

    const Data = JSON.parse(cesar(RawData, -10))
    Settings.RawData = {}
    for (const Key in Data) {
        Settings.RawData[Key] = Data[Key]
    }
}

Settings.Save = async function() {
    const RawData = JSON.stringify(Settings.RawData)
    await writeTextFile('fab-pitch/appsettings.conf', cesar(RawData, 10), { dir: BaseDirectory.LocalData });
}

Settings.Get = function(Name: string, Default: any) {
    if (Settings.RawData[Name] === undefined) {
        Settings.RawData[Name] = Default
        Settings.Save()
    }
    return Settings.RawData[Name]
}

Settings.Set = function(Name: string, Value: any) {
    Settings.RawData[Name] = Value
    Settings.Save()
}

export default Settings