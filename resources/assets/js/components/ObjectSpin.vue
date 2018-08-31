<template>
<div></div>
</template>
    

 <script>
  
   export default {

    props: ['options'],
    data: function () {
      return {
        api: null,
        data: null,
      }
    },
    mounted: function() {
      // create spritespin
      $(this.$el).spritespin(this.options)
      // access api object
      this.api = $(this.$el).spritespin('api')
      // access data object
      this.data = $(this.$el).spritespin('data')
      // watch changes and update spritespin
      this.$watch('options', (newVal, oldVal) => {
        $(this.$el).spritespin(newVal)
      })
    },
    updated: function() {
      // $(this.$el).spritespin(this.options)
    },
    beforeDestroy: function() {
      // destroy spritespin before Vue node is destroyed
      $(this.$el).spritespin('destroy')
    }
  }

 </script>

 <style>

.spritespin-progress {
  position: absolute;
  width: 80%;
  left: 10%;
  top: 45%;
}
.spritespin-progress-label {
  color: grey;
}
.spritespin-progress-bar {
  background-color: grey;
  height: 1px;
}
 </style>