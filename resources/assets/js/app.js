// config.js includes all touchscreen object data in a single object, window.mapConfig

require('./config.js');


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');
import VueStash from 'vue-stash'
Vue.use(VueStash)

var EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
    $bus: {
      get: function () {
        return EventBus
      }
    }
  })




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


/* Vue.component('map-overlay', require('./components/MapOverlay.vue'));
Vue.component('map-modal', require('./components/MapModal.vue')); */

Vue.component('thumbstrip', require('./components/Thumbstrip.vue'));
Vue.component('video-modal', require('./components/VideoModal.vue'));
Vue.component('app-title', require('./components/AppTitle.vue'));
Vue.component('modal', require('./components/Modal.vue'));

const app = new Vue({
    el: '#app',
    data: {
        store: {
            videos: window.videoConfig.videos,
            title: window.videoConfig.title
        },  
        
    }
});
