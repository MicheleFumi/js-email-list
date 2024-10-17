/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)
 */

const listEL = document.querySelector(".mail_list")
console.log(listEL);


    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {

            const mails = response.data.response
            console.log(mails);
           
            for (let i = 0; i <= 10; i++) {
            
                const mail = mails


            }

        })
        .catch(error => {
            console.error(error);
        })



        console.log(mail);
                listEL.innerHTML = `

                    <li class="mail">${mail}</li>
                    `
