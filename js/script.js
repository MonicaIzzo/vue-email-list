/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

console.log('Vue OK', Vue);

// # Axios
const endpoint = 'https://ﬂynn.boolean.careers/exercises/api/random/mail';
// # inizializzo Vue JS
    const app = Vue.createApp ({
        data() {
            return {
              emails: [],
              errorMessage: ''
            }
        },
        computed: {
        },

        methods: {
          },

        created () {
          for (let i = 1; i <= 10; i++) {
           // # Axios
          axios.get(endpoint)
          .then(res => {
          console.log(res.data.response);
          const email = res.data.response;
          this.emails.push(email);
          this.errorMessage = '';
          
          }).catch((err) => {
          this.errorMessage = 'Si è verificato un errore';
          console.log('Si è verificato un errore')
          })
          
          .then(() => {
          console.log('Chiamata terminata')
          }); 
          }
        }
    });
    //Monto nell'elemento HTML "radice"
    app.mount('#root');
