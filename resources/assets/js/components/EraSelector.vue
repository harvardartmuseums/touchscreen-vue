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
  font-size: 1.1em;
 }
 
#erastrip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  position: absolute;
  bottom:2vw;
}

.eracontainer {
  height: 4vw;
  width: 19vw;
  background-color: #C7C8CA;
  border: 1px black;
  color: white;
}

.agecontainer {
  text-align: center;
  vertical-align: center;
  line-height: normal;
  height: 100%;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size:1.5em;
}

.dates {
  font-size: .75em;
}

.active {
  background-color: #E6E7E8;
  color: #231F20;
}

 </style>