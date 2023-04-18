// creaimo array con delle mail (arrEmails)

const arrEmails = [
    'qwer@qwer.com',
    'asdf@asdf.com',
    'zxv@zxcv.com',
    'ìfghj@fghj.com',
];
// chiedere mail e metterla in emailUser 

const emailUser = prompt('Qual è la tua mail?');

// RIPETI finchè è vero che i < arrEmails.lenght
    // SE emailUser == arrEmails [i]
    // stampo che ho trovato la mail
    // FINE SE
    // incrementare i 
// FINE CICLO


let isFound = false;
for (let i = 0; i < arrEmails.length; i++) {
    if (emailUser == arrEmails[i]) {
    isFound = true;
    } 

    if (isFound) {
        console.log('email trovata')
        } else {
        console.log('Email non trovata')
        }
    }



