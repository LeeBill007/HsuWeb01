/*文章列表*/
Vue.component('artical-list', {
    template: `
        <div>
            {{data}}
            <button @click="test">fff</button>
        </div>
        `,
    beforeCreated: function () {
        axios.post('/Home/Artical_pre')
                .then(function (res) {
                    art.ee = res.data
                    console.log(art.ee);
                })
                .catch(function (error) {
                    console.log(error)
                })
    },
    data:{
        
    }
    methods: {
        test: function () {
            axios.post('/Home/Artical_pre')
                .then(function (res) {
                    art.ee = res.data
                    console.log(art.ee);
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
});

/* 文章修改*/
Vue.component('artical-edit', {
    template: ` <div>
                <div class ="form-group">
                    <label>標題</label>
                    <input type="text" v-model="title" value="" class="form-control" />
                 </div>
                <div class="form-group">
                    <label>簡述</label>
                    <input type="text" v-model="description" value="" class="form-control" />
                </div>
                <div class="form-group">
                    <label>內容</label>
                    <textarea class="form-control" v-model="detail" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <input type="button" class="btn btn-danger" name="name" value="取消" v-on:click="cancel" />
                    <input type="button" class="btn btn-info" name="name" value="送出" v-on:click="submit" />
                </div>
                </div>
                ` ,
    data: function () {
        return { title: "t1", description: "des", detail: "d1" }
    },
    methods: {
        submit: function () {
            axios.post('/Home/Artical_post', { title: this.title, description: this.description, detail: this.detail })
            .then(function (res) {

            })
            .catch(function (error) {
                console.log(error)
            });

            console.log("submit");
        },
        cancel: function () {
            console.log("cancel");
        }
    }
});
