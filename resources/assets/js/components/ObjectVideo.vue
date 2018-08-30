<template>
  <div id="videocontainer">
    <video id="objectvideo" autoplay muted>
      <source :src="'images/' + vid" type="video/mp4">
    </video>
  </div>
  </div>
</template>

</template>
    

 <script>
  
   export default {

    props: ['vid'],
    mounted: function() {
		this.$nextTick(() => {
			document.getElementById("objectvideo").play();
		});
    }
  }

 </script>

 <style>
 #objectvideo {
   width: 100%;
   height: auto;
 }
 </style>