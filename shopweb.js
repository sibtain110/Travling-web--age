const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {

    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {

    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


var cardbtn = document.getElementsByClassName('cart');

for (i = 0; i < cardbtn.length; i++) {
    let x = cardbtn[i];

    x.addEventListener('click', function (event) {


        var card_body = event.target.parentElement;
        var card_title = card_body.getElementsByClassName('card-title')[0].innerHTML;
        var card_price = card_body.getElementsByClassName('card-text')[0].innerHTML;
        var quantity = card_body.getElementsByClassName('number')[0].innerHTML;

        if (quantity <= 0 || NaN(quantity)) {
            quantity = 1;
        }

        var card_body = card_title;
        var title = sessionStorage.getItem("card_body");
        var price = card_price;
        var quantity = quantity;

        sessionStorage.setItem("card_body", card_body);
        sessionStorage.setItem("price", price);
        sessionStorage.setItem("quantity", quantity);

    })
}