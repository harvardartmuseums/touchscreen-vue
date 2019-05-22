<template>
    <div id="title">
        <span>{{title}}</span>
    </div>
</template>
    

 <script>
   export default {

   data() {
      return {
      }
    },
    computed: {
      title () {
      return this.$store.title;
      }
    },
	methods:{
	}
    };
 </script>

 <style>

 #title {
     font-size: 2.2em;
     width: 90vw;
     margin: 0 auto;
     margin-top: 24vh;
 }
 </style>