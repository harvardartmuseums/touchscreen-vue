<template>
    <div id="thumbstrip">
        <div class="thumbcontainer"  v-for="(video, index) in videos" v-bind:key="index" @click="showModal = true">
            <img class="thumb" src="https://picsum.photos/1180/663">
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
      videos () {
      return this.$store.videos;
      }
    },
	methods:{
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


 </style>