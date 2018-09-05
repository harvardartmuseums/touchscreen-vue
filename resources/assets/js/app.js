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

Vue.component('era-selector', require('./components/EraSelector.vue'));
Vue.component('map-overlay', require('./components/MapOverlay.vue'));
Vue.component('thumbstrip', require('./components/Thumbstrip.vue'));
Vue.component('object-modal', require('./components/ObjectModal.vue'));
Vue.component('object-spin', require('./components/ObjectSpin.vue'));
Vue.component('object-video', require('./components/ObjectVideo.vue'));

const app = new Vue({
    el: '#app',
    data: {
        store: {
            showObjectModal: false,
            currentEra: window.mapConfig.eras["1"],
            currentTouchpointName: null,
            currentTouchpointGraphic: "",
            currentObject: window.mapConfig.eras["1"].objects["1"],
            currentOverlay: window.mapConfig.eras["1"].overlay,
            configData: mapConfig
        },  
        
    }
});
