<template>

    <div id="Splash">
        <small>
            <v-icon size="small" icon="mdi-circle-slice-4" />
            ezzvpn
            <v-progress-linear
                indeterminate
                color="cyan" 
                v-progress-linear />
        </small>
    </div>
  
</template>
  
<script>

    export default {
        
        mounted() {

            setTimeout(() => {

                if (window.cordova) {

                    window.addEventListener("deviceready", () => {
                        this.$router.push("/home")
                    }, false)
                    
                } else {
                    this.$router.push("/home")
                }

            }, 6666)
        }
    }

</script>

<style>
  
    #Splash {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 1);
      z-index: 999999;
    }
  
    #Splash small {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
      color: #dddddd;
    }
  
  </style>;