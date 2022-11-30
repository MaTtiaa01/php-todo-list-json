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
        callApi(url, myVar) {
            const data = {
                myPostParam: myVar
            }
            axios
                .post(url, data, {
                    headers: { 'Content-type': 'multipart/form-data' }
                })
                .then(response => {
                    console.log(response);
                    this.tasks = response.data
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        this.callApi(this.api_url, this.task)
    }
}).mount('#app')