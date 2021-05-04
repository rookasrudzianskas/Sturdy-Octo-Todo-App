<template>
  <form action="">
    <div class="row q-mb-md">
  <q-banner class="bg-grey-3 col">
    <template v-slot:avatar>
      <q-icon name="account_circle" color="primary" />
    </template>
    Register to access your todo's anywhere

  </q-banner>
    </div>

    <div class="row q-mb-md">

      <q-input outlined v-model="formData.email" class="col" label="Email" stack-labels/>

    </div>

    <div class="row q-mb-md">

      <q-input outlined v-model="formData.password" class="col" type="password" label="Password" stack-labels/>

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
  }
}

</script>

<style>

</style>
