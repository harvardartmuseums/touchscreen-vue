<template>
        <div id="erastrip">
            <div v-for="era in eras" v-bind:key="era.id" :class="{eracontainer : true, active : current == era.id}"  @click="setCurrentEra(era)">
                <div  class="agecontainer">
                    <span class="epoch"><h2>{{era.name}}</h2></span>
                    <span class="dates"><h3>({{era.dates}})</h3></span>
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
 }

 </style>