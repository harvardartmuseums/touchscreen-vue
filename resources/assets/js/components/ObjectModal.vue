<template>
    <transition name="modal">
                <div id="modalwrapper"v-show="show">
                <div id="modal">
                    <div id="content">
                        
                            <div id="minicontainer">
                                <div id="minimap" @click="close">
                                    <div id="minioverlay" v-html="selectedGraphic"></div>
                                </div> 
                            </div>
                            
                            <div id="tombstone">
                              <span id="objectname">{{currentObject.name}}</span><br />
                              {{currentObject.tombstone}}
                            </div>
                              
                              <template v-if="currentObject.media['1'].type == 'image'"> 
                                <div id="mediacontainer">
                                  <div id="imagewrapper">
                                    <img :src="'images/objects/' + currentObject.media['1'].file"></img>
                                  </div>
                                </div>
                              </template>
                              
                              <template v-if="currentObject.media['1'].type == 'spin'">
                                <div id="spincontainer">
                                  <object-spin :options="currentObject.media['1'].config"></object-spin>
                                </div>
                              </template>
                      
                              <template v-if="currentObject.media['1'].type == 'video'"> 
                                  <object-video :vid="currentObject.media['1'].file"></object-video>
                              </template>

                            <div id="closerow">
                              <div id="closebuttoncontainer" @click="close">
                              <svg id="X" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs></defs><title>Artboard 1</title><polyline class="closeButton" points="95 95 50 50 95 5"/><polyline class="closeButton" points="5 95 50 50 5 5"/></svg>
                              </div>
                            </div>
                        
                      </div>
                  </div>
                </div>
    </transition>
</template>
    

 <script>
  
   export default {

  computed: {
      selectedGraphic () {
        var graphic = '<svg id=\"minioverlay" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 3840 2160\"><defs><style>.cls-1{fill:#fff;}<\/style><\/defs><title>iron<\/title><g id=\"selected\">' + this.$store.currentTouchpointGraphic.replace("radius=\"36.25\"", "radius=\"75\"") + "<\/g><\/svg>";
        return graphic
      },
      currentObject () {
        return this.$store.currentObject
      }
  },
  methods: {
    close: function () {
      this.$emit('close');
    }   
  },
  watch: {
    show: function () {
      var video = document.getElementById("modalvideo");
      video.play();
    }
  },
  props: ['show'],
  mounted: function () {
    this.$nextTick(function () {
      if(this.currentObject.media['1'].type == 'video'){
      console.log("inside video tick");
      var video = document.getElementById("modalvideo");
      video.play();
      }
    })
}
}
 </script>

 <style>

 .modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

#spincontainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 1vw);
  height: auto;
  box-sizing: border-box;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}


#videocontainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 1vw);
  height: auto;
  box-sizing: border-box;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

#spinwrapper {
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
}

.spritespin, .spritespin-instance {
  width:100% !important;
  height:100% !important;
}

 </style>