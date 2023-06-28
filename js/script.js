/*
Attraverso l'apposita API di Boolean :puntare_in_basso::carnagione-2:
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// # verifiche JS
console.log('JS OK');
console.log('Vue OK, Vue');

// # Axios
const element = document.getElementById('root');
let content = '';
axios.get('https://ﬂynn.boolean.careers/exercises/api/random/mail')
.then(result => {
  console.log(result.data);
  content = result.data.response;
  element.innerText = content;
}).catch((err) => {
  element.innerText = err.message;
})
.then(() => {
  console.log('Chiamata terminata')
});

element.innerText = content;
/*
// # inizializzo Vue JS
    const app = Vue.createApp ({
        data() {
            return {
              newMessage: '',
              currentNumber: null,
              user: data.user,
              contacts: data.contacts
            }
        },

        computed: {
          currentContact() {
            return this.contacts.find(contact => contact.id === this.currentNumber)
          },

          currentChat() {
            return this.currentContact.massages;
          },

        },

        methods: {
          renderPicture(person) {
            return `img/avatar${person.avatar}.jpg`;
          },
          setCurrentNumber(number) {
            this.currentNumber = number;
          },

          addMessage(message, status) {
            const newMessage = {
              id: new Date().getTime(),
              date: "new Date().toLocalString()",
              message,
              status
            };

            this.currentChat.message.push(newMessage);

          },

          sendMessage () {
            if(!this.newMessage) return;
           
            this.addMessage(this.newMessage, "sent");
            this.newMessage ="";
            
            setTimeout(() => {
              this.addMessage("ok!", "received");
              }, 1000 );
          }
        },
        created () {
          this.currentNumber = this.contacts[0].id;
        }
        
    });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
    */
