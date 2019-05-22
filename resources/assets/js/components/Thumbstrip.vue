<template>
    <div id="thumbstrip">
        <div class="thumbcontainer"  v-for="(video, index) in videos" v-bind:key="index" @click="loadVideo(index)">
              <img class="thumb" :src="'images/' + video.thumbnail">
              <span class="caption">{{video.title}} <span class="runtime">({{video.runtime}})</span></span>
        </div>
        <video-modal :index="index" :show="show" @close="show = false"></video-modal>
    </div>
</template>
    

 <script>
   export default {

   data() {
      return {
        index: 0,
        show: false
      }
    },
    computed: {
      videos () {
      return this.$store.videos;
      }
    },
	methods:{
    loadVideo: function(index){
        this.index = index;
        this.show = true;
    }
	}
    };
 </script>

 <style>
#thumbstrip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  height: 11.5vw;
  margin: 0 auto;
  margin-top: 5vh;
}

.thumbcontainer {
  display: block;
  height: 100%;
  width: auto;
  position: relative;
}

.thumb {
  height: 100%;
  width: auto;
}

.caption {
  font-size: 1.4em;
  margin-top: 1em;
  display: block;
}

.runtime {
  display: none;
}


 </style>