import {fetch} from '@tauri-apps/api/http';

type User = {
    id: number;
    username: string;
    cover_url: string;
    url: string;
    developer: boolean;
    press_user: boolean;
    gamer: boolean;
}

class Itch {
    key: string | undefined;
    user: User | undefined;

    setKey(key: string | undefined) {
        this.key = key;
    }

    getKey(): string | undefined {
        return this.key;
    }

    async getUserInfo(allowCache = true): Promise<User | null | undefined> {
        if (!this.key) return null;
        if (allowCache && this.user) return this.user;

        let Response = await fetch("https://itch.io/api/1/" + this.key + "/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data : {errors: [string]} & {user: User} = Response.data
        if (data.errors) return null;
        this.user = data.user;
        return this.user;
    }

    getCachedUserInfo(): User | undefined {
        return this.user;
    }
}

export default new Itch();