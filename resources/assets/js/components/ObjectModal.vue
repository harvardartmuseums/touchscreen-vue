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
watch: { currentObject: function () {
    if(this.currentObject.media['1'].type == "spin"){
      var spin = $('#imagewrapper').spin360({
    imgClass: 'spin-image',
    datas: ["/images/objects/spins/cup_animation_0001.png","/images/objects/spins/cup_animation_0002.png","/images/objects/spins/cup_animation_0003.png","/images/objects/spins/cup_animation_0004.png","/images/objects/spins/cup_animation_0005.png","/images/objects/spins/cup_animation_0006.png","/images/objects/spins/cup_animation_0007.png","/images/objects/spins/cup_animation_0008.png","/images/objects/spins/cup_animation_0009.png","/images/objects/spins/cup_animation_0010.png","/images/objects/spins/cup_animation_0011.png","/images/objects/spins/cup_animation_0012.png","/images/objects/spins/cup_animation_0013.png","/images/objects/spins/cup_animation_0014.png","/images/objects/spins/cup_animation_0015.png","/images/objects/spins/cup_animation_0016.png","/images/objects/spins/cup_animation_0017.png","/images/objects/spins/cup_animation_0018.png","/images/objects/spins/cup_animation_0019.png","/images/objects/spins/cup_animation_0020.png","/images/objects/spins/cup_animation_0021.png","/images/objects/spins/cup_animation_0022.png","/images/objects/spins/cup_animation_0023.png","/images/objects/spins/cup_animation_0024.png","/images/objects/spins/cup_animation_0025.png","/images/objects/spins/cup_animation_0026.png","/images/objects/spins/cup_animation_0027.png","/images/objects/spins/cup_animation_0028.png","/images/objects/spins/cup_animation_0029.png","/images/objects/spins/cup_animation_0030.png","/images/objects/spins/cup_animation_0031.png","/images/objects/spins/cup_animation_0032.png","/images/objects/spins/cup_animation_0033.png","/images/objects/spins/cup_animation_0034.png","/images/objects/spins/cup_animation_0035.png","/images/objects/spins/cup_animation_0036.png","/images/objects/spins/cup_animation_0037.png","/images/objects/spins/cup_animation_0038.png","/images/objects/spins/cup_animation_0039.png","/images/objects/spins/cup_animation_0040.png","/images/objects/spins/cup_animation_0041.png","/images/objects/spins/cup_animation_0042.png","/images/objects/spins/cup_animation_0043.png","/images/objects/spins/cup_animation_0044.png","/images/objects/spins/cup_animation_0045.png","/images/objects/spins/cup_animation_0046.png","/images/objects/spins/cup_animation_0047.png","/images/objects/spins/cup_animation_0048.png","/images/objects/spins/cup_animation_0049.png","/images/objects/spins/cup_animation_0050.png","/images/objects/spins/cup_animation_0051.png","/images/objects/spins/cup_animation_0052.png","/images/objects/spins/cup_animation_0053.png","/images/objects/spins/cup_animation_0054.png","/images/objects/spins/cup_animation_0055.png","/images/objects/spins/cup_animation_0056.png","/images/objects/spins/cup_animation_0057.png","/images/objects/spins/cup_animation_0058.png","/images/objects/spins/cup_animation_0059.png","/images/objects/spins/cup_animation_0060.png","/images/objects/spins/cup_animation_0061.png","/images/objects/spins/cup_animation_0062.png","/images/objects/spins/cup_animation_0063.png","/images/objects/spins/cup_animation_0064.png","/images/objects/spins/cup_animation_0065.png","/images/objects/spins/cup_animation_0066.png","/images/objects/spins/cup_animation_0067.png","/images/objects/spins/cup_animation_0068.png","/images/objects/spins/cup_animation_0069.png","/images/objects/spins/cup_animation_0070.png","/images/objects/spins/cup_animation_0071.png","/images/objects/spins/cup_animation_0072.png","/images/objects/spins/cup_animation_0073.png","/images/objects/spins/cup_animation_0074.png","/images/objects/spins/cup_animation_0075.png","/images/objects/spins/cup_animation_0076.png","/images/objects/spins/cup_animation_0077.png","/images/objects/spins/cup_animation_0078.png","/images/objects/spins/cup_animation_0079.png","/images/objects/spins/cup_animation_0080.png","/images/objects/spins/cup_animation_0081.png","/images/objects/spins/cup_animation_0082.png","/images/objects/spins/cup_animation_0083.png","/images/objects/spins/cup_animation_0084.png","/images/objects/spins/cup_animation_0085.png","/images/objects/spins/cup_animation_0086.png","/images/objects/spins/cup_animation_0087.png","/images/objects/spins/cup_animation_0088.png","/images/objects/spins/cup_animation_0089.png","/images/objects/spins/cup_animation_0090.png","/images/objects/spins/cup_animation_0091.png","/images/objects/spins/cup_animation_0092.png","/images/objects/spins/cup_animation_0093.png","/images/objects/spins/cup_animation_0094.png","/images/objects/spins/cup_animation_0095.png","/images/objects/spins/cup_animation_0096.png","/images/objects/spins/cup_animation_0097.png","/images/objects/spins/cup_animation_0098.png","/images/objects/spins/cup_animation_0099.png","/images/objects/spins/cup_animation_0100.png","/images/objects/spins/cup_animation_0101.png","/images/objects/spins/cup_animation_0102.png","/images/objects/spins/cup_animation_0103.png","/images/objects/spins/cup_animation_0104.png","/images/objects/spins/cup_animation_0105.png","/images/objects/spins/cup_animation_0106.png","/images/objects/spins/cup_animation_0107.png","/images/objects/spins/cup_animation_0108.png","/images/objects/spins/cup_animation_0109.png","/images/objects/spins/cup_animation_0110.png","/images/objects/spins/cup_animation_0111.png","/images/objects/spins/cup_animation_0112.png","/images/objects/spins/cup_animation_0113.png","/images/objects/spins/cup_animation_0114.png","/images/objects/spins/cup_animation_0115.png","/images/objects/spins/cup_animation_0116.png","/images/objects/spins/cup_animation_0117.png","/images/objects/spins/cup_animation_0118.png","/images/objects/spins/cup_animation_0119.png","/images/objects/spins/cup_animation_0120.png","/images/objects/spins/cup_animation_0121.png","/images/objects/spins/cup_animation_0122.png","/images/objects/spins/cup_animation_0123.png","/images/objects/spins/cup_animation_0124.png","/images/objects/spins/cup_animation_0125.png","/images/objects/spins/cup_animation_0126.png","/images/objects/spins/cup_animation_0127.png","/images/objects/spins/cup_animation_0128.png","/images/objects/spins/cup_animation_0129.png","/images/objects/spins/cup_animation_0130.png","/images/objects/spins/cup_animation_0131.png","/images/objects/spins/cup_animation_0132.png","/images/objects/spins/cup_animation_0133.png","/images/objects/spins/cup_animation_0134.png","/images/objects/spins/cup_animation_0135.png","/images/objects/spins/cup_animation_0136.png","/images/objects/spins/cup_animation_0137.png","/images/objects/spins/cup_animation_0138.png","/images/objects/spins/cup_animation_0139.png","/images/objects/spins/cup_animation_0140.png","/images/objects/spins/cup_animation_0141.png","/images/objects/spins/cup_animation_0142.png","/images/objects/spins/cup_animation_0143.png","/images/objects/spins/cup_animation_0144.png","/images/objects/spins/cup_animation_0145.png"],
    lazyLoad: false
});
}}},
  props: ['show']
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