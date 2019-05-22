<template>
 <transition name="modal">
        <div class="modal-mask" @click="close" v-if="show">
            <div class="modal-container" @click.stop>
              <slot></slot>
            </div>
        </div>
  </transition>
</template>

 <script>
   export default {

  props: ['show'],
  methods: {
    close: function () {
      this.$emit('close');
    }
  },
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  }
}
 </script>
 <style>
 * {
    box-sizing: border-box;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    display: inline-block;
    margin: auto;
    transition: all .3s ease;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    display: flex;
    justify-content: center;
    padding: 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
    margin-top: 1em;
}

.form-label > .form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    line-height: 1.5;
    border: 1px solid #ddd;
}

.imagedescription {
    box-sizing: border-box;
    padding-bottom: 1em;
    height: 100%;
}

.hamimage {
    height: auto;
    width: 300px;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 0;
    padding-top: 1em;
    display: flex;
    flex-direction: column;
}



</style>