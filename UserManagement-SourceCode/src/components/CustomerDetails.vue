<template>
  <div class="CustomerDetails container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h2 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="`/edit/${customer.id}`">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h2>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone-alt">&nbsp;<b>phone:</b> {{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope">&nbsp;<b>email:</b> {{customer.email}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-education">&nbsp;<b>education:</b> {{customer.education}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-star">&nbsp;<b>school:</b> {{customer.school}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-briefcase">&nbsp;<b>career:</b> {{customer.career}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-pencil">&nbsp;<b>introduction:</b> {{customer.introduction}}</span></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CustomerDetails',
  data () {
    return {
      customer: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then(data => {
        this.customer = data.data
      })
  },
  methods: {
    deleteCustomer (id) {
      axios.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          // console.log('success')
          this.$router.push({path: '/', query: {alert: '删除成功'}})
        })
    }
  }
}
</script>

<style scoped>

</style>
