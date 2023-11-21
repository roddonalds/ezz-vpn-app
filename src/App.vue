<template>
  <router-view />
</template>

<script>

  export default {

    name: "App",

    mounted () {
      setTimeout(() => {
        this.$router.push("/")
      }, 2500)
    }
  }

</script>