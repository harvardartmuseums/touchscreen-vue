<template>
  <modal :show="show" @close="close">
    <video id="objectvideo" @ended="close" width="2880" autoplay>
      <source :src="'videos/' + video.filename" type="video/mp4">
    </video>
    <div id="closerow">
      <div id="closebuttoncontainer" @click="close">
        <span>close X</span>
      </div>
    </div>
  </modal>
</template>

 <script>

  export default {

  computed: {
      video () {
        return this.$store.videos[this.index]
      }
  },
  
  watch: {

  },
  methods: {
    close: function () {
      this.$emit('close');
    },
  },
  props: ['show', 'index']
   }
 </script>
 <style>

 #closerow {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 3vw;
}

#closebuttoncontainer {
  display: block;
  width: 3vw;
  text-align: right;
  height: 3vw;
  margin-top: .1vw;
  color: #58595b;
  font-size: 1.5em;
}
.closeButton {
  fill:none;stroke:#58595b;stroke-miterlimit:10;stroke-width:3px;
}

</style>