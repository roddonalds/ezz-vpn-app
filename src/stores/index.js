export default {

    state () {
      
        return {
            isConnected: false,
        }
    },
    
    mutations: {
      
      setConnected (state) {
        state.isConnected = true
      },

      setDisconnected (state) {
        state.isConnected = false
      }
    
    }
  }