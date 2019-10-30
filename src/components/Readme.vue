<template>
  <div class="container">
    <b-card>
      <div v-html="readme"> {{readme}} </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
    name: 'Readme',
    data() {
			return {
				readme: '',
				name: this.$route.params.repo
			}
		},
    mounted() {
      axios.get(`https://api.github.com/repos/${this.$route.params.username}/${this.$route.params.repo}/readme`)
      .then(res => this.readme = marked(atob(res.data.content)))
      .catch(err => this.console.log(err))
    }
}
</script>