<template>

  <v-container class="fill-height" id="kontainer">
    <v-responsive class="align-center text-center fill-height">

      <div class="text-body-2 font-weight-light mb-n1">Status</div>

        <h1 class="text-h4 font-weight-bold" v-if="$store.state.isConnected">Conectado</h1>
        <h1 class="text-h4 font-weight-bold" v-else>Desconectado</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          
          <v-btn
            v-if="$store.state.isConnected"
            color="primary"
            size="large"
            icon="mdi-close"
            @click="disconnect">
          </v-btn>

          <v-btn
            v-else
            color="green"
            size="large"
            icon="mdi-connection"
            :loading="loading"
            @click="connect">
          </v-btn>

        </v-col>

      </v-row>
    </v-responsive>
  </v-container>

</template>

<script>

  export default {

    data: () => ({
      loading: false,
    }),

    methods : {

      connect () {

        this.loading = true;

        setTimeout(() =>{
          this.$store.commit('setConnected')
          this.loading = false;
        }, 2500)

      },

      disconnect () {
        this.$store.commit('setDisconnected')
      }
    }
  }

</script>

<style>

  #kontainer {
    padding: 5px;
    border : 1px solid black;
  }

</style>