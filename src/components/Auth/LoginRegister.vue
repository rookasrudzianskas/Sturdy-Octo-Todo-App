<template>
  <form action="" @submit.prevent="submitForm">
    <div class="row q-mb-md">
  <q-banner class="bg-grey-3 col">
    <template v-slot:avatar>
      <q-icon name="account_circle" color="primary" />
    </template>
    {{ tab | titleCase }} to access your todo's anywhere

  </q-banner>
    </div>

    <div class="row q-mb-md">

      <q-input ref="email" outlined v-model="formData.email" class="col" label="Email" stack-labels :rules="[ val => isValidEmailAddress(val) || 'Please use the valid email address']" lazy-rules/>

    </div>

    <div class="row q-mb-md">

      <q-input ref="password" outlined v-model="formData.password" class="col" type="password" label="Password" stack-labels :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']" lazy-rules/>

    </div>

    <div class="row">
      <q-space />
      <q-btn type="submit" color="primary" :label="tab" />

    </div>

  </form>

</template>
<script>
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()

      if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if(this.tab === 'login') {
          console.log('log in')
        } else {
          console.log('register')
        }
      }
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}

</script>

<style>

</style>
