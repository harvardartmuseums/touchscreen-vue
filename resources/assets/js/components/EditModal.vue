<template>
 <modal :show="show" @close="close">
        <div class="modal-body">
                    <img :src="imgurl" class="hamimgpreview">
                    <div class="form-group hamimage">
                    <confirmation-button></confirmation-button>
                        <textarea v-model="description" class="form-control imagedescription">
                        </textarea>                   
                    <button class="form-label" @click="saveImage()">Save Description</button>
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
    }
  },
  computed: {
      imageid () {
      return this.$store.currentImage.id
      },
      imgurl () {
        var url = "https://s3.amazonaws.com/forms.harvardartmuseums.org/proposals/" + this.env + "/" + this.pid + "/" + this.$store.currentImage.filename;
    
        return url
      }
  },
  
  watch: {
      imageid: function () {
          this.getImage();
      }
  },
  methods: {
    close: function () {
      this.$emit('close');
      this.description = '';
    },
    getImage: function() {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        axios.get("/image/" + this.imageid)
      .then((response)  =>  {
          this.description = response.data.description;
        }, (error)  =>  {
          this.loading = false;
        }) 
      },
    saveImage: function () {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post("/image/" + this.imageid, {
            description: this.description,
          })
      .then((response)  =>  {
        this.saved = true;
        this.$bus.$emit('imageSaved', {
                msg: 'Image added to proposal.'
            });
      }, (error)  =>  {
        this.saved = false;
      })
     this.close();
     },

    deleteImage: function () {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.delete("/image/" + this.imageid, {
          proposal_id : this.pid
          })
      .then((response)  =>  {
        this.saved = true;
        this.$bus.$emit('imageSaved', {
                msg: 'Image removed from proposal.'
            });
      }, (error)  =>  {
        this.saved = false;
      })
     this.close();
     },
  },
  updated () {
      this.$bus.$on('confirmation-success', event => {
				  this.deleteImage();
        });
  },
  props: ['show', 'pid', 'env']
}
 </script>
 <style>

.hamimgpreview {
    height: 500px;
}
 
</style>