<template>
    <div v-if="initialized">
       <snippetts-modal :show="show" @close="close">
          <div class="modal-body">
                      
          </div>
        </snpippets-modal>
        <div id="textBar">
          <button class="categoryButton"  v-for="(category, index) in snippets" v-bind:key="category.key" @click="loadSnippets(index)">
              {{approvedNames[index]}}
          </button>
        </div>
      <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
      <span class="wordTally" v-bind:class="{'text-danger': overLimit, 'd-none':hideMax }">Words remaining: {{wordsRemaining}}</span>
      <span id="savestatus">Saved</span>
    </div>
</template>

 <script>
   import { VueEditor } from 'vue2-editor'
   import axios from 'axios';

   export default {

   components: {
      VueEditor
   },

   data() {
      return {
        content: '',
        prompt: '',
        response_id: '',
        saved: true,
        loading: false,
        initialized: true,
        words: 0,
        overLimit: false,
        customToolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ]
      }
    },
  computed: {
    wordsRemaining: function () {
      var tally =  this.maxWords - this.words;
      if(tally < 0) {
        this.overLimit = true;
      }
      else {
        this.overLimit = false;
      }
      return tally;
    },
    hideMax: function () {
      if(this.maxWords == 0) {
        return true;                                                                    
      }
      else {
        return false;
      }
    },
    snippets () {
      return this.$store.snippets;
      },
    approvedNames () {
      return this.$store.approvedNames;
    }
  },
  watch: {
      // whenever response changes, this function will run
      content: function () {

    }
    },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce

  },
  updated: function() {
        this.$watch('content', function(newVal, oldVal) {
          console.log(newVal);
          this.words = this.wordCount(newVal);
          if(oldVal != ''){
          }
        });
  },
   methods: {
  wordCount: function (text) {
    if(text === null){
      return 0;
    }
    if(text === '') {
      return 0;
    }
    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");
    text = text.replace(/\n /,"\n");
    var words = text.split(' ').length;
    return words;
      },
  loadSnippets: function (index){
    

  },
   props: {

     }
}

 </script>

 <style>
   [v-cloak] {
    display: block;
  }

  .wordTally {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  </style>