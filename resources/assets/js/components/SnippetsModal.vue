<template>
 <modal :show="show" @close="close">
        <div class="modal-body">
                
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
      }
  },
  
  watch: {
      objectid: function () {
          this.imgurl();
          this.setDescription();
      },
  },
  methods: {
    tombstone: function () {  
        if(Object.keys(this.$store.currentObject).length) {
            if(this.$store.currentObject.peoplecount){
            var label = this.$store.currentObject.people[0]['name'] + "\n" + this.$store.currentObject.title + ", " + this.$store.currentObject.dated + "\n" +  this.$store.currentObject.objectnumber;
            }
            else {
            var label = this.$store.currentObject.title + ", " + this.$store.currentObject.dated + "\n" +  this.$store.currentObject.objectnumber;
            }
        }
        else {
            label = "No object."
        }
        return label
      },
    imgurl: function () {
      if(Object.keys(this.$store.currentObject).length) {
        if(Object.keys(this.$store.currentObject['images']).length) {
            return this.$store.currentObject['images'][0]['iiifbaseuri'] + '/full/,500/0/native.jpg'
        }
        else {
            return "empty";
        }
      }
      else {
          return "empty";
      }
      },
    close: function () {
      this.$emit('close');
      this.description = '';
    },
    saveImage: function () {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post("/attachimage/" + this.pid, {
            description: this.description,
            objectid: this.objectid,
            imageurl: this.imgurl()
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
        this.description = this.description + this.tombstone();
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