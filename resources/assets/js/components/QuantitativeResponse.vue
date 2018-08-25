<template>
    <div>
      <div class="form-group">
        <div class="label">{{label}}</div>
        <input v-model.number="content" type="number" min="0"></input>
      </div>
    </div>
</template>

 <script>
   export default {

   data() {
      return {
        content: 0,
        label: '',
        response_id: '',
        saved: true,
        loading: false,
      }
    },
  watch: {
      // whenever response changes, this function will run
      content: function (newVal, oldVal) {
        this.$store.objectCount = this.$store
        .objectCount + (newVal - oldVal);
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
   methods: {
     getQuestion: function() {
       axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
       axios.get("/question/" + this.qid)
      .then((response)  =>  {
        this.label = response.data.label;
        $('#questionGroup').text(response.data.group);
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
        if(response.data.quantitative == null){
        this.content = 0;
        }
        else {
          this.content = response.data.quantitative;
        }
        this.$watch('content', function() {
	        $('#saveStatus').removeClass('saved');
        });
      }, (error)  =>  {
        this.loading = false;
      })
      },
      saveResponse:  function () {
   axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post("/response/" + this.response_id, {
            quantity: this.content,
            question_id: this.qid,
            proposal_id: this.pid
          })
      .then((response)  =>  {
        $('#saveStatus').addClass('saved');
        this.saved = true;
      }, (error)  =>  {
        this.saved = false;
      })
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
     page: Number
     },
}
 </script>