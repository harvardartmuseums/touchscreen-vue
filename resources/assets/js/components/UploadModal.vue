<template>
 <modal :show="show" @close="close">
        <div class="modal-body">
                    <div class="hamimgpreview">
                            <div id="fileInput">
                                    <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
                            </div>
                    </div>
                    <div class="form-group hamimage">
                        <textarea v-model="description" class="form-control imagedescription">
                        </textarea>
                        <button class="form-label" @click="saveImage()">Save Image</button>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

 <script>

   export default {

   data() {
      return {
      description: '',
      saved: false,
      file: ''
    }
  },
  computed: {

  },
  
  watch: {

  },
  methods: {
    close: function () {
      this.$emit('close');
      this.description = '';
      this.file = '';
      document.getElementById('file').value = '';
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    saveImage: function () {
    let formData = new FormData();
    formData.append('file', this.file);
    formData.append('description', this.description);
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');  
    axios.post("/attachimage/" + this.pid, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    ).then((response)  =>  {
        this.saved = true;
        this.$bus.$emit('imageSaved', {
                msg: 'Image added to proposal.'
            });
        this.close();
      }).catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data.errors.file[0]);
            this.close();
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

     }
  },
  props: ['show', 'pid']
}
 </script>
 <style>

.hamimgpreview {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#fileInput {
    display: flex;
    justify-content: center;
    padding-left: 2em;
}

#file {
    display: block;
}

</style>