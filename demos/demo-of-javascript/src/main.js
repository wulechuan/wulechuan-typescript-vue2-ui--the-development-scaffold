import '@wulechuan/vue2-ui--something/dist/something.css'
import '@wulechuan/vue2-ui--something/dist/some-other-thing.css'

import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#vue2-app-placeholder')
