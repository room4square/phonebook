<template>
	<div class="modal" :class='openmodal'>
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">Update {{list.name}}'s Details</p>
	      <button class="delete" @click='close' aria-label="close"></button>
	    </header>
	    <section class="modal-card-body">
	      <!-- Content ... -->
	      	
	      	<div class="field">
			  <label class="label">Name</label>
			  <div class="control">
			    <input class="input" :class="{'is-danger':errors.name}" type="text" placeholder="Name" v-model="list.name">
			  </div>
			  <small class="has-text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
			</div>

			<div class="field">
			  <label class="label">Phone</label>
			  <div class="control">
			    <input class="input" :class="{'is-danger':errors.phone}" type="number" placeholder="Phone" v-model="list.phone">
			  </div>
			  <small class="has-text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>
			</div>

			<div class="field">
			  <label class="label">Email</label>
			  <div class="control">
			    <input class="input" :class="{'is-danger':errors.email}" type="Email" placeholder="Email" v-model="list.email">
			  </div>
			  <small class="has-text-danger" v-if="errors.name">{{ errors.email[0] }}</small>
			</div>
			
		<!-- Content ... -->
	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success" @click='update'>Update</button>
	      <button class="button" @click='close'>Cancel</button>
	    </footer>
	  </div>
	</div>
</template>

<script  >
	export default{
		props:['openmodal'],
		data(){
			return{
				list:{},
				errors:{}
			}
		},
		methods:{
			close(){
				this.$emit('closeRequest')
			},
			update(){
				axios.patch(`/phonebook/${this.list.id}`, this.$data.list).then((response) => this.close()).catch((error) => this.errors = error.response.data.errors);
			}
		}
	}
</script>