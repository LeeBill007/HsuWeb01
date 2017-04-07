/*Component Data*/
var bus = new Vue();

/* Header */
Vue.component('app-header', {
    template: '<div>Header!' +
                '</div>',
    data: function () {
        return { message: 'hello' }
    },
    methods: {
        doclick: function () {
        }
    }
})
/* Footer */
Vue.component('app-footer', {
    template: '<div>footer!</div>'
})
/* Content-Intro*/
Vue.component('app-intro', {
    template: '<div>Intro</div>'
});



/* Content-Artical */
Vue.component('app-artical', {
    template: `<div class="container">
                    <h4>Artical</h4>
                    <ul>
                        <li v-for="item in test">{{item.title}} / {{item.intro}}
                        </li>
                    </ul>
                    </div>
                ` ,                
    data: function () {
        return {
            test:
            [
                {
                    "title": "1",
                    "intro": "Albert"
                },
                {
                    "title": "2",
                    "intro": "Kimberly"
                },
                {
                    "title": "3",
                    "intro": "Deborah"
                }
            ]
        }
    },
    methods: {

    }
});

/* Content-Contact */
Vue.component('app-contact', {
    template: '<div>Contact</div>'
});
