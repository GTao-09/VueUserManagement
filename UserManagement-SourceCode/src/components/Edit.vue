<template>
  <div class="add container">
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit.prevent="editCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="name" v-model="customer.name">
        </div>
         <div class="form-group">
          <label for="phone">电话</label>
          <input type="tel" name="phone" id="phone" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
         <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" name="email" id="email" class="form-control" placeholder="email" v-model="customer.email">
        </div>
         <div class="form-group">
          <label for="education">学历</label>
          <input type="text" name="education" id="education" class="form-control" placeholder="education" v-model="customer.education">
        </div>
         <div class="form-group">
          <label for="school">毕业学校</label>
          <input type="text" name="school" id="school" class="form-control" placeholder="graduated school" v-model="customer.school">
        </div>
        <div class="form-group">
          <label for="career">职业</label>
          <input type="text" name="career" id="career" class="form-control" placeholder="career" v-model="customer.career">
        </div>
        <div class="form-group">
          <label for="introduction">简介</label>
          <textarea name="introduction" id="introduction" class="form-control" rows="10" v-model="customer.introduction"></textarea>
        </div>
        <input type="submit" value="提交" class="btn btn-primary">
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Add',
  data () {
    return {
      customer: []
    }
  },
  methods: {
    editCustomer () {
      let updataCustomer = {
        name: this.customer.name,
        phone: this.customer.phone,
        email: this.customer.email,
        education: this.customer.education,
        school: this.customer.school,
        career: this.customer.career,
        introduction: this.customer.introduction
      }
      axios.put(`http://localhost:3000/posts/${this.$route.params.id}`, updataCustomer)
        .then(data => {
          // console.log(data)
          this.$router.push({path: '/', query: {alert: '修改成功！'}})
        })
      this.customer.name = ''
      this.customer.phone = ''
      this.customer.email = ''
      this.customer.education = ''
      this.customer.school = ''
      this.customer.career = ''
      this.customer.introduction = ''
    }
  },
  created () {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then(data => {
        this.customer = data.data
      })
  }
}
</script>
