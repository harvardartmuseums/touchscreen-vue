<template>
    <div>
			<input v-model="term" type="search">
			<button @click="search">Search Collection</button>
			<button @click="openUploadModal()">Upload Image</button>
			<p/>
      <div class="results">
			<div v-for="record in records" class="record" v-bind:key="record.id"
  v-bind:post="record" @click="openHamModal(record)">
				<template v-if="record.imagecount">
        <img :src="record['images'][0]['iiifbaseuri'] + '/full/,100/0/native.jpg'">
        </template>
      </div>
			</div>

			<div v-if="noResults">
				Sorry, but no results were found. I blame Apple.
			</div>

			<div v-if="searching">
				<i>Searching...</i>
			</div>

		</div>
</template>

 <script>
   export default {

   data() {
      return {
        term:'',
        records:[],
        noResults:false,
        searching:false
      }
	},
	methods:{
		search:function() {
			this.searching = true;
			fetch(`/browse?q=${encodeURIComponent(this.term)}`)
			.then(res => res.json())
			.then(res => {
        this.searching = false;
				this.records = res.records;
				this.noResults = this.res.info.totalrecords === 0;
			});
		},
		openHamModal(record) {
			this.$store.currentObject = record;
			this.$store.showHamModal = true;
		},
	  openUploadModal() {
			this.$store.showUploadModal = true;
		}
	}
};
 </script>

 <style>
 .results {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
 }

 .record {
   margin: .5em;
 }
 </style>