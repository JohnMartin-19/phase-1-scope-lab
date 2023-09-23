// Write your solution in this file!
var customerName = 'John';

function upper(){
    caps = customerName.toLocaleUpperCase();
    console.log(caps)
}
upper()


bestCustomer = 'bob';
function setBestCustomer(){
    let bestCustomer = 'not bob';
    console.log(bestCustomer);
}
setBestCustomer();

function overrideBest(){
    const bestCustomer = 'John';
    console.log(bestCustomer);
}
overrideBest();

const leastFav = 'Peter';
function change(){
    leastFav = 'Mburuu';
    console.log(leastFav);
}
change();