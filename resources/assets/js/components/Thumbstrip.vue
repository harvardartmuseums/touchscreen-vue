<template>
    <div id="thumbstrip">
        <div class="thumbcontainer"  v-for="(object, index) in objects" v-bind:key="object.name" @click="setCurrentObject(index)">
            <img class="thumb" :src="'images/' + object.thumbnail">
                <div class="thumbnumber">
                    {{index}}
                </div>
            </div>
    </div>
</template>
    

 <script>
   export default {

   data() {
      return {
      }
    },
    computed: {
      objects () {
      return this.$store.currentEra.objects;
      }
    },
	methods:{
		setCurrentObject(index) {
            console.log(index);
			this.$store.currentObject = this.$store.currentEra.objects[index];
            this.$store.showMapModal = true;
		},
	}
    };
 </script>

 <style>

 </style>