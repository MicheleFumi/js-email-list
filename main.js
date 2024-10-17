/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)
 */

const listEl = document.querySelector(".mail_list")
console.log(listEl);

let mail = []

for (let i = 1; i <= 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            const mails = response.data.response
            console.log(mails);
            mail.push(mails)
            
            listEl.insertAdjacentHTML("beforeend",`
                <li class="mail">${mail}</li>
                
                
                `)
                
             
            




        })
        .catch(error => {
            console.error(error);
        })


}


