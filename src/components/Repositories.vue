<template>
    <b-container> 
        <b-row class="justify-content-center">
            <b-col cols="6">
                <div class="h3 mb-2">Projects {{ username }}</div>
              
                <div v-bind:key='repo.id' v-for='repo in repos'>
                    <b-list-group>
                        <router-link :to='`/repositories/${username}/${repo.name}`'>
                            <b-list-group-item> {{ repo.name }} </b-list-group-item>
                        </router-link>
                    </b-list-group>
                </div>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Repositories',
    data() {
        return {
            repos: [],
            username: this.$route.params.username
        }
    },
    mounted() {
        axios.get(`https://api.github.com/users/${this.username}/repos`)
        .then(response => this.repos = response.data)
        .catch(error => this.console.log(error))
    }

}
</script>