<template>
    <!-- Using v-if for this modal instead of v-show in order to reset spin animation by destroying child components !-->
    <transition name="modal">
                <div id="modalwrapper" v-if="show">
                <div id="modal">
                    <div id="content">
                        
                            <div id="minicontainer">
                                <div id="minimap" @click="close">
                                      <img id="basemap" src="images/base.png">
                                      <svg id="minioverlay" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 3840 2160" v-html="selectedGraphic"></svg>
                                </div>
                            </div> 
                            
                            <div id="tombstone">
                              <span id="objectname">{{currentObject.name}}</span>
                              {{currentObject.tombstone}}
                            </div>
                              
                              <template v-if="currentObject.media['1'].type == 'image'"> 
                                <div id="mediacontainer">
                                  <div id="imagewrapper">
                                    <img :src="'images/objects/' + currentObject.media['1'].file">
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
        var graphic = '<defs><style>.cls-1{fill:#fff;}<\/style><\/defs><title>iron<\/title><g id=\"selected\">' + this.$store.currentObject.location + "<\/g><\/svg>";
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
      var video = document.getElementById("modalvideo");
      video.play();
      }
    })
}
}
 </script>

<style>

/* Modal Container */

#modal {
  position: absolute;
  display: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top:0;
  background-color: rgba(0, 0, 0, 0.3);
  font-size:1.5em;
}

#content {
  width: 95vw;
  position: absolute;
  top: 2vw;
  height: calc(100% - 9vw);
  display: block;
  box-sizing: border-box;
  padding: 1vw;
  background-color: #E6E7E8;
  display: grid;
  grid-template-columns: 21% 79%; 
  grid-template-rows: 20.25vw 20.25vw auto;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;


}

/* Modal Transition */
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

/* MiniMap */

#minicontainer {
  grid-column-start: 1;
  grid-column-end: 2;
  width: 100%;
}

#minimap {
  display: inline-block;
  width: 100%;
  height: auto;
  position: relative;
}

#basemap {
  display: block;
  width: 100%;
  height: auto;
}

#minioverlay {
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
}

/* Object Information */

#objectname {
  text-decoration: underline;
}

#tombstone {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  white-space: pre-line;
}

/* Content Types */
#mediacontainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 1vw);
  box-sizing: border-box;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}  

/* Image media type */

#imagewrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: auto;
}

#imagewrapper img {
  height: 100%;
  width: auto;
}

/* SpriteSpin for object rotatiosn */

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

#spinwrapper {
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
}

.spritespin, .spritespin-instance {
  width:100% !important;
  height:100% !important;
}

/* Video media type */

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

/* Closeout Row */

#closerow {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 3vw;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-gap: 3;
}

#closebuttoncontainer {
  display: block;
  width: 3vw;
  height: 3vw;
  margin-right: 1vw;
  margin-bottom: 1vw;
}

.closeButton {
  fill:none;stroke:#58595b;stroke-miterlimit:10;stroke-width:3px;
}



 </style>