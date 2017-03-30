/*Component Data*/
var bus = new Vue();

/* Header */
Vue.component('app-header', {
    template: '<div>Header!<input type=text id = ss  v-model = "message" v-on:blur="doclick()">'+
                '<p><b>shooooow: {{message}}</b></p>'+
                '</div>',
    data:function(){
        return { message: 'hello' }
    },
    methods:{
        doclick: function () {
            bus.$emit('id-selected', this.message);
        }
    }
})
/* Footer */
Vue.component('app-footer', {
    template: '<div>footer!</div>'
})
/* Content-Intro*/
Vue.component('app-intro', {
    template: '<div>Intro</div>',
        created() {
        bus.$on('id-selected', function (id) {             
            alert(id+"--intro")
        })
    }
});

/* Content-Artical */
Vue.component('app-artical', {
    template: '<div>artical <label>:: {{getval}}</label> </div>',
    data:function(){
        return{getval:'未改前'}
    },
    
    created() {
        bus.$on('id-selected', function (id) {
            this.getval = id;
            alert(this.getval+"--artical")
        })
    }
       
    
});

/* Content-Contact */
Vue.component('app-contact', {
    template: '<div>Contact</div>'
});
