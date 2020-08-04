export default {
    data() {
        return {};
    },
    methods: {
        async callApi(method, url, dataObj) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                });
            } catch (err) {
                return err.response;
            }
        },
        i(desc, title = "Hey!") {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        s(desc, title = "Great!") {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        w(desc, title = "Woops!") {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        e(desc, title = "Woops!") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        sww(desc = "Something Went Wrong! Please Try Again", title = "Woops!") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
    }
};
