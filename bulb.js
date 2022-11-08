const { createApp} = Vue

createApp({
    data(){
        return{
            description: 'Let there be light',
           bulbChanges: true
         }
        }

}).mount('#bulb')