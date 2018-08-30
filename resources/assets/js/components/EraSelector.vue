<template>
        <div id="erastrip">
            <div v-for="era in eras" v-bind:key="era.id" :class="{eracontainer : true, active : current == era.id}"  @click="setCurrentEra(era)">
                <div  class="agecontainer">
                    <span class="epoch">{{era.name}}</span>
                    <span class="dates">({{era.dates}})</span>
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
      eras () {
      return this.$store.configData.eras;
      },
      current () {
      return this.$store.currentEra.id;
      }
    },
	methods:{
		setCurrentEra(era) {
            this.$store.currentEra = era;
            this.$store.currentOverlay = era.overlay;
            this.$store.showObjectModal = false;
            this.$store.currentMiniOverlay = "";
		},
	}
    };
 </script>

 <style>
 #erastrip {
     font-size: 0.9em;
 }

 </style>