const { createApp} = Vue

createApp({
    data(){
        return{
            description: 'Let there be light',
           bulbChanges: true,
           Switch:{
            switchOn: 'On',
            switchOff: 'Off'
           }
         }
        }

}).mount('#bulb')