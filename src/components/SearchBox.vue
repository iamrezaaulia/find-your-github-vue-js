<template>
    <b-container> 
        <b-row class="justify-content-center">
            <b-col cols="6">
              <div class="mb-2">GitHub Username</div>
              
              <b-form v-on:submit="handleSubmit">
                <b-form-group>
                  <b-form-input
                    type="text"
                    name="username" 
                    v-model="username"  
                    placeholder="Enter GitHub Username"
                    required
                  />
                </b-form-group>
              </b-form>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: 'SearchBox',
    data() {
      return {
        username: ''
      }
    },
    methods : {
      handleSubmit(e) {
        e.preventDefault()
        this.$router.push(`/repositories/${this.username}`)
      }
    }
  }
</script>