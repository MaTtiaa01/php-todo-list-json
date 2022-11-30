import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            api_url: "server.php",
            tasks: [],
            task: ''
        }
    },
    methods: {
        callApiGet(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.tasks = response.data
                })
                .catch(err => {
                    console.error(err);
                })
        },

        callApiPost() {
            const data = {
                task: this.task
            }
            axios
                .post(this.api_url, data, {
                    headers: { 'Content-type': 'multipart/form-data' }
                })
                .then(response => {
                    console.log(response);
                    this.tasks = response.data
                    this.task = ""
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        this.callApiGet(this.api_url)
    }
}).mount('#app')