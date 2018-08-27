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
      return this.$store.currentEra.overlay;
      }
    },
	methods:{
		setCurrentObject: function (event) {
            var parent = event.target.parentNode;
            if(parent.dataset.name) {
               this.$store.currentObject = this.$store.currentEra.objects[parent.dataset.name];    
               this.$store.showMapModal = true;
            }
            
		},
	}
    };
 </script>

 <style>

 </style>