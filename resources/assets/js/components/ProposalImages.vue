<template>
    <div>
      <div class="images">
			<div v-for="(image, index) in images" class="image" v-bind:key="image.id" v-bind:post="image" @click="openEditModal(image)">
				<template>
          <figure class="proposalImage">
					<span class="imageCount">{{index + 1}}/10</span>
					<div class="imageContainer"><img :src="'https://s3.amazonaws.com/forms.harvardartmuseums.org/proposals/' + images.env + '/' + images.pid  + '/thumbs/' + image.filename"></div>
					</figure>
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
				images:[],
        noResults:false,
        searching:false
      }
	},
	props: ['pid', 'env'],
mounted: function () {
			this.$bus.$on('imageSaved', event => {
				  this.getImages();
        });
			this.getImages();
},
	methods:{
		getImages:function() {
			var proposal_id = this.pid;
			var url = '/images/' + proposal_id;
			console.log(url);
			fetch(url)
			.then(res => res.json())
			.then(res => {
				this.images = res;
				this.images.env = this.env;
				this.images.pid = this.pid;
				this.noResults = this.res.info.totalrecords === 0;
			});
		},
		openEditModal(image) {
			this.$store.currentImage = image;
			this.$store.showEditModal = true;
		}
	}
};
 </script>

 <style>
 .images {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
 }

 .imageCount {
	 text-align: center;
 }

	.proposalImage {
		text-align: center;
	}

 .imageContainer {
	 width: 150px;
	 background-color: black;
   margin: .5em;
	 display: flex;
	 justify-content: center;
 }
 </style>