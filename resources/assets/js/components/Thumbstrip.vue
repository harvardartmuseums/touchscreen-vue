<template>
    <div id="thumbstrip">
        <div class="thumbcontainer"  v-for="(object, index) in objects" v-bind:key="object.name" @click="setCurrentObject(index)">
            <img class="thumb" :src="'images/objects/thumbnails/' + object.thumbnail">
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
            var touchpoint = document.querySelector('[data-name="' + index + '"]');
            this.$store.currentObject = this.$store.currentEra.objects[index];
            this.$store.currentTouchpointName = index;
            this.$store.currentTouchpointGraphic = touchpoint.firstChild.outerHTML;
            this.$store.showObjectModal = true;
		}
	}
    };
 </script>

 <style>
#thumbstrip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position:absolute;
  top:2vw;
  width: 100vw;
}

.thumbcontainer {
  width: 6vw;
  height: 12vh;
  display: block;
  background-color: black;
  margin-left: 2vw;
  position: relative;
}

.thumbcontainer:first-child {
  margin-left: 0;
}

.thumb {
  height: 100%;
  width: auto;
}

.thumbnumber {
  position: absolute;
  top: .5vw;
  left: .5vw;
  color: white;
}

 </style>