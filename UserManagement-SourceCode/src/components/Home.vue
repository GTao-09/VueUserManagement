<template>
  <div class="Home container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 v-if="!customers.length">没有用户</h1>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索姓名" v-model="filterInput">
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in filterBy(customers, filterInput)" :key="index">
        <!-- <tr v-for="(customer, index) in customers" :key="index"> -->
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link class="btn btn-default" :to="`/customerdetail/${customer.id}`">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'

export default {
  name: 'Home',
  data () {
    return {
      customers: [],
      alert: '',
      filterInput: ''
    }
  },
  methods: {
    fetchCustomer () {
      axios.get('http://localhost:3000/posts')
        .then(data => {
          this.customers = data.data
          // console.log(data)
        })
    },
    filterBy (customers, value) {
      return customers.filter(function (customer) {
        return customer.name.match(value)
      })
    }
  },
  created () {
    this.fetchCustomer()
  },
  updated () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchCustomer()
  },
  components: {
    Alert
  }
}
</script>

<style scoped>

</style>
