
import aes192 from "~/assets/js/hash/aes192.js";

export default (context) => {
    const app = context.app;
    const cid = app.$cookies.get("uid");

    if(!cid || !aes192.validate(cid)){
        const time = new Date().getTime();
        const rnd = Math.floor(Math.random() * Math.pow(10, 16));
        const unique = time.toString() + "-" + rnd.toString();
        const hash = aes192.encrypt(unique);

        app.$cookies.set("uid", hash, {
            path: "/",
            maxAge: 60 * 60 * 24 * 90
        })
    }
};