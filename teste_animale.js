var $body = document.body;

// PAGE VARIABLES
var $img = document.querySelector('.product__image');
var $productName = document.querySelector('.productName');
var $skuBestPrice = document.querySelector('.skuBestPrice').innerText;
var $price = parseInt($skuBestPrice.split("").filter(n => (Number(n))).join(""));
var $totalDiscount = $price - (($price * 10) / 100);

// ELEMENTS
//// PRODUCT INFO
$imgProd = `<img class="image_product" src="${$img.getAttribute('src')}" alt="Imagem do produto">`;
$textTitle = `<div class="product_title">${$productName.innerText}</div>`;
$textPrice = `<p>Preço: ${$skuBestPrice}</p>`;
$textDiscount = `<p>Preço com desconto: R$ ${$totalDiscount.toFixed(2).replace('.',',')}</p>`;
//// ACTIONS
$buttonActPay = `<button class="button-pay button button--buy button--full product__add-to-cart active" href="javascript:;">Adicionar à Sacola</button>`;
$btnClose = `<button class="btn-close-act">X</button>`;

// DIV - BODY
var textDiv = document.createElement('div');
textDiv.setAttribute('class', 'product-footer');

var divFooter = `
    ${$imgProd}
    <div class="actions-prod">
        ${$btnClose}
        ${$buttonActPay}
    </div>
    <div class="info-prod">
        ${$textTitle}
        ${$textPrice}
        ${$textDiscount}
    </div>`;
textDiv.innerHTML = divFooter;

$body.appendChild(textDiv);


// DIVS - ELEMENTS
$product_footer = document.querySelector('.product-footer');
//// INFO
$image_product = document.querySelector('.image_product');
$info_product = document.querySelector('.info-prod');
$product_title = document.querySelector('.product_title');
//// ACTIONS
$actions = document.querySelector('.actions-prod');
$button_pay = document.querySelector('.button-pay');
$button_close = document.querySelector('.btn-close-act');

// STYLES
//// MAIN - DIV
$product_footer.style.display = "block";
$product_footer.style.float = "left";
$product_footer.style.background = "#fff";
$product_footer.style.width = "100%";
$product_footer.style.height = "120px";
$product_footer.style.padding = "10px";
$product_footer.style.position = "fixed";
$product_footer.style.bottom = "0";
$product_footer.style.borderTop = "1px solid #000";
$product_footer.style.zIndex = "9";

//// INFO - IMAGE
$image_product.style.width = "80px";
$image_product.style.height = "100px";
$image_product.style.margin = "0 10px 0 30px";
$image_product.style.float = "left";

//// INFO - DIV
$info_product.style.fontFamily = "sans-serif";
$info_product.style.fontWeight = "bold";
$info_product.style.background = "none";
$info_product.style.position = "left";

//// INFO - TITLE
$product_title.style.lineHeight = "1.4";
$product_title.style.margin = "10px 0 5px 0";
$product_title.style.textTransform = "uppercase";

//// ACTIONS - DIV
$actions.style.float = "right";
$actions.style.margin = "0 30px 50px 30px";
$actions.style.display = "block";
$actions.style.width = "30%";

//// ACTIONS -BUTTON PAY
$button_pay.style.width = "80%";
$button_pay.style.margin = "7% 2% 0 0";
$button_pay.style.float = "left";
$button_pay.style.textTransform = "uppercase";

//// ACTIONS - BUTTON CLOSE
$button_close.style.border = "none";
$button_close.style.background = "none";
$button_close.style.fontWeight = "bold";
$button_close.style.fontSize = "18px";
$button_close.style.float = "right";

// ACTIONS - EVENTS
$button_pay.addEventListener('click', function() {
    var balls = '...'
    buttonText(0, balls.substr(2));
    buttonText(200, balls.substr(1));
    buttonText(500, balls.substr(0));

    setTimeout(function() {
        $button_pay.innerText = "Produto adicionado!";
    }, 1000);
    setTimeout(function() {
        $button_pay.innerText = "Adicionar à Sacola";
    }, 4000)
});

$button_close.addEventListener('click', function() {
    $product_footer.style.display = "none";
});

function buttonText(time, text) {
    setTimeout(function() {
        $button_pay.style.fontSize = "12px";
        $button_pay.innerText = text;
    }, time)
}

function openPF() {
    $product_footer.style.display = "block";
}