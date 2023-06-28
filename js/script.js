/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// # Axios
const endpoint = 'https://ﬂynn.boolean.careers/exercises/api/random/mail';
// # inizializzo Vue JS
    const app = Vue.createApp ({
        data() {
            return {
              mail: null,
              mailList: null,
            }
        },
        computed: {
        },
        methods: {
          //createListemail() {

          }
        },
        created () {
          // # Axios
          axios.get(endpoint)
          .then(res => {
          console.log(res.data.response);
          this.mail = res.data;
          //content = result.data.response;
          //element.innerText = content;
          }).catch((err) => {
          body.innerText = err.message;
          })
          .then(() => {
          console.log('Chiamata terminata')
        
          });
        }
    });
    //Monto nell'elemento HTML "radice"
    app.mount('#root');
