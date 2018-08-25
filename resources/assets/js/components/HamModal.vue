<template>
 <modal :show="show" @close="close">
        <div class="modal-body">
                    <img :src="imgurl" class="hamimgpreview">
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
    }
  },
  computed: {
      objectid () {
      return this.$store.currentObject.objectid
      },
      imgurl () {
      if(Object.keys(this.$store.currentObject).length) {
        return this.$store.currentObject['images'][0]['iiifbaseuri'] + '/full/,500/0/native.jpg'
      }
      else {
          return "empty";
      }
      },
      tombstone () {
        if(this.$store.currentObject.peoplecount){
        var label = this.$store.currentObject.people[0]['name'] + "\n" + this.$store.currentObject.title + ", " + this.$store.currentObject.dated + "\n" +  this.$store.currentObject.objectnumber;
        }
        else {
        var label = this.$store.currentObject.title + ", " + this.$store.currentObject.dated + "\n" +  this.$store.currentObject.objectnumber;
        }
        return label
      }
  },
  
  watch: {
      tombstone: function () {
          this.setDescription();
      }
  },
  methods: {
    close: function () {
      this.$emit('close');
      this.description = '';
    },
    saveImage: function () {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post("/attachimage/" + this.pid, {
            description: this.description,
            objectid: this.objectid,
            imageurl: this.imgurl
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
    setDescription: function () {
    if(this.description == ''){
        this.description = this.description + this.tombstone;
     }
    }
    
  },
  props: ['show', 'pid']
}
 </script>
 <style>


.hamimgpreview {
    height: 500px;
}
 
</style>