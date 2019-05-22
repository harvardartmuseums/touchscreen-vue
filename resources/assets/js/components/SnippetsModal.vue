<template>
 <modal :show="show" @close="close">
  <div class="modal-body">
    <h2> {{ this.$store.approvedNames[this.category] }} </h2>
    <div class="buttons"><button class="snippet-button" v-for="(snippet, index) in snippets" v-bind:key="snippet.name" @click="addText(index)">{{ snippet.name }}</button></div>
  </div>
  </modal>
</template>

 <script>

   export default {

  computed: {
      snippets () {
        return this.$store.snippets[this.category]
      }
  },
  
  watch: {

  },
  methods: {
    addText: function (index) {
      this.$emit('update-description', this.$store.snippets[this.category][index]['snippet'])
      this.close();
    },
    close: function () {
      this.$emit('close');
    },
  },
  props: ['show', 'category']
   }
 </script>
 <style>
  .modal-body {
    padding: 1em;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .modal-body h2 {
    margin-left: .5em;
  }
  .snippet-button {
    margin-right: 1em;
  }
  .snippet-button:first-child {
    margin-left: 1em;
  }
 
</style>