
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


var mapConfig = {"eras":{"1":{"id":"bronze","name":"The Bronze Age","dates":"2000-1200 BCE","overlay":"<svg id=\"Bronze\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3840 2160\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>iron</title><g id=\"_1\" data-name=\"1\"><circle cx=\"1628.25\" cy=\"993.25\" r=\"36.25\"/><path class=\"cls-1\" d=\"M1625.74,979.67h-.11l-6.1,3.29-.92-3.62,7.67-4.1h4.05v35.1h-4.59Z\"/></g></svg>","objects":{"1":{"name":"Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}},"2":{"name":"2-Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}},"3":{"name":"3-Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}}}},"2":{"id":"iron","name":"The Iron Age","dates":"1200–500 BCE","overlay":"<svg id=\"Iron\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3840 2160\"><defs><style>.cls-1{font-size:54px;fill:#fff;font-family:MyriadPro-Regular, Myriad Pro;}</style></defs><title>iron</title><g id=\"_2\" data-name=\"2\"><circle cx=\"700.25\" cy=\"1361.25\" r=\"36.25\"/><text class=\"cls-1\" transform=\"translate(685 1378.34)\">2</text></g></svg>","objects":{"1":{"name":"Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}}}},"3":{"id":"greece","name":"The Achaemenid Empire and Greece","dates":"500–300 CE","overlay":"<svg id=\"Bronze\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3840 2160\"><defs><style>.cls-1{font-size:54px;fill:#fff;font-family:MyriadPro-Regular, Myriad Pro;}</style></defs><title>bronze</title><g id=\"_1\" data-name=\"1\"><circle cx=\"1628.25\" cy=\"993.25\" r=\"36.25\"/><text class=\"cls-1\" transform=\"translate(1613 1010.34)\">1</text></g></svg>","objects":{"1":{"name":"Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}}}},"4":{"id":"roman","name":"The Hellenistic, Roman, and Parthian Empires","dates":"300 BCE-300 CE","overlay":"<svg id=\"Bronze\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3840 2160\"><defs><style>.cls-1{font-size:54px;fill:#fff;font-family:MyriadPro-Regular, Myriad Pro;}</style></defs><title>bronze</title><g id=\"_1\" data-name=\"1\"><circle cx=\"1628.25\" cy=\"993.25\" r=\"36.25\"/><text class=\"cls-1\" transform=\"translate(1613 1010.34)\">1</text></g></svg>","objects":{"1":{"name":"Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}}}},"5":{"id":"china","name":"From the Sasanian Empire to China","dates":"300-800 CE","overlay":"<svg id=\"Bronze\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3840 2160\"><defs><style>.cls-1{font-size:54px;fill:#fff;font-family:MyriadPro-Regular, Myriad Pro;}</style></defs><title>bronze</title><g id=\"_1\" data-name=\"1\"><circle cx=\"1628.25\" cy=\"993.25\" r=\"36.25\"/><text class=\"cls-1\" transform=\"translate(1613 1010.34)\">1</text></g></svg>","objects":{"1":{"name":"Poopship","tombstone":"Persepolis: amphora with zoomorphic handles sam et faccatus doloreperionse quassimilit omni debitat ibusdaecus eationsequae cusam,inciderchici a duntiis sit eum net quodit, es re lam, se volorendel eate","thumbnail":"poopship_thumb.jpg","media":{"1":{"type":"image","file":"poopship.jpg","config":"none"},"2":{"type":"image","file":"poopship.jpg","config":"none"}}}}}}};

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

const app = new Vue({
    el: '#app',
    data: {
        store: {
            showMapModal: false,
            currentEra: mapConfig.eras["1"],
            currentObject: {},
            configData: mapConfig
        },  
        
    }
});
