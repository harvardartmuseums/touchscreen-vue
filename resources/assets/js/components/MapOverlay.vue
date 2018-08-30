<template>
    <div id="overlay" v-html="overlay" @click="setCurrentObject">
    </div>  
</template>
    

 <script>
   export default {

   data() {
      return {
      }
    },
    computed: {
      overlay () {
      return this.$store.currentOverlay;
      }
    },
	methods:{
		setCurrentObject: function (event) {
            var parent = event.target.parentNode;
            var touchpoint = document.querySelector('[data-name="' + parent.dataset.name + '"]');
            if(parent.dataset.name) {
               this.$store.currentObject = this.$store.currentEra.objects[parent.dataset.name];
               this.$store.currentTouchpointName = parent.dataset.name;
               this.$store.currentTouchpointGraphic = touchpoint.firstChild.outerHTML;
               this.$store.showObjectModal = true;
            }
            
        } 
	}
    };
 </script>

 <style>

 </style>