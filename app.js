import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            api_url: "file.json",
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

        callApiPost(url, myVar) {
            const data = {
                myPostParam: myVar
            }
            axios
                .post(url, data, {
                    headers: { 'Content-type': 'multipart/form-data' }
                })
                .then(response => {
                    console.log(response);
                    this.task = response.data
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