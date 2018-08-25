
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


Vue.component('narrative-response', require('./components/NarrativeResponse.vue'));
Vue.component('quantitative-response', require('./components/QuantitativeResponse.vue'));
Vue.component('short-response', require('./components/ShortResponse.vue'));
Vue.component('computed-total-response', require('./components/ComputedTotalResponse.vue'));
Vue.component('image-search', require('./components/ImageSearch.vue'));
Vue.component('modal', require('./components/Modal.vue'));
Vue.component('ham-modal', require('./components/HamModal.vue'));
Vue.component('upload-modal', require('./components/UploadModal.vue'));
Vue.component('edit-modal', require('./components/EditModal.vue'));
Vue.component('proposal-images', require('./components/ProposalImages.vue'));
Vue.component('confirmation-button', require('./components/ConfirmationButton.vue'));




const app = new Vue({
    el: '#app',
    data: {
        store: {
            objectCount: 0,
            showHamModal: false,
            showUploadModal: false,
            showEditModal: false,
            currentObject: {},
            currentImage: {},
        },  
        
    }
});
