<template>
  <v-app-bar flat id="appbar">
    <v-app-bar-title>
      <v-icon size="small" icon="mdi-circle-slice-4" />
      ezzvpn
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="logout">
      <v-icon color="white">mdi-star-plus</v-icon>
    </v-btn>
    <v-btn icon @click="logout">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-btn icon @click="toggleDrawer">
      <v-icon>mdi-account
      </v-icon>
    </v-btn>
    <v-menu offset-y></v-menu>
  </v-app-bar>
</template>

<style>

  #appbar { 
    background-color: black; 
    color: whitesmoke;
  }

</style>
