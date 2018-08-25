<template>
    <div>
      <p class="prompt" v-html="prompt"></p>
      <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
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
        customToolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ]
      }
    },
  watch: {
      // whenever response changes, this function will run
      content: function () {
        this.debouncedSaveResponse()
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
    this.debouncedSaveResponse = _.debounce(this.saveResponse, 2000);
    this.getQuestion();
    this.createOrAssignResponse();
    this.getResponse();
  },
  updated: function() {
        this.$watch('content', function(newVal, oldVal) {
          if(oldVal != ''){
            $('#saveStatus').removeClass('saved');
          }
        });
  },
   methods: {
     getQuestion: function() {
       axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
       axios.get("/question/" + this.qid)
      .then((response)  =>  {
        this.prompt = response.data.prompt;
      }, (error)  =>  {
        this.loading = false;
      })
     },
    createOrAssignResponse: function() {
        if(this.rid == 0) {
          axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
          axios.post("/response/create", {
            proposal_id: this.pid,
            question_id: this.qid
          })
          .then((response)  =>  {
              this.response_id = response.data.id;
          }, (error)  =>  {
              this.loading = false;
          })
        }
        else {
          this.response_id = this.rid;
        }
    },
    getResponse: function() {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        axios.get("/response/" + this.response_id)
      .then((response)  =>  {
          this.content = response.data.narrative;
        }, (error)  =>  {
          this.loading = false;
        }) 
      },
   saveResponse:  function () {
   axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post("/response/" + this.response_id, {
            narrative: this.content,
            question_id: this.qid,
            proposal_id: this.pid,
            maxLength: this.maxLength
          })
      .then((response)  =>  {
        $('#saveStatus').addClass('saved');
        if(!this.content){
        this.updateChecklist(0);  
        }
        else {
        this.updateChecklist(1);
        }
        this.saved = true;
      }).catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data.errors.narrative[0]);
            $('#saveStatus').removeClass('saved');
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
});
     },
  updateChecklist:  function (itemStatus) {
   axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post("/checklist/" + this.pid, {
            part: this.partname,
            status: itemStatus,
            index: this.page
          })
      .then((response)  =>  {
        this.saved = true;
      }, (error)  =>  {
        this.saved = false;
      })
     }
  },
   props: {
     qid: Number,
     pid: Number,
     rid: Number,
     partname: String,
     page: Number,
     maxLength:{type: Number, default:5000}
     },
}

 </script>