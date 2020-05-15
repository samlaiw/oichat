
import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, {
    retries: 2,
    retryDelay: (count, error) => {
        let delay = 100 * Math.pow(10, (count - 1));

        console.error("axios retry", "count", count, "delay", delay, "condition", error);

        return delay;
    },
    retryCondition (){
        return true;
    }
});
