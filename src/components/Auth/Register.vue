<template>
  <form action="" @submit.prevent="submitForm">
    <div class="row q-mb-md">
  <q-banner class="bg-grey-3 col">
    <template v-slot:avatar>
      <q-icon name="account_circle" color="primary" />
    </template>
    Register to access your todo's anywhere

  </q-banner>
    </div>

    <div class="row q-mb-md">

      <q-input outlined v-model="formData.email" class="col" label="Email" stack-labels :rules="[ val => isValidEmailAddress(val) || 'Please use the valid email address']" lazy-rules/>

    </div>

    <div class="row q-mb-md">

      <q-input outlined v-model="formData.password" class="col" type="password" label="Password" stack-labels :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']" lazy-rules/>

    </div>

    <div class="row">
      <q-space />
      <q-btn type="submit" color="primary" label="Register" />

    </div>

  </form>

</template>
<script>
export default {
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

    }
  }
}

</script>

<style>

</style>
