let $body = document.body;

function newElement(tagName, className = '', href = null, src = null, text = null) {
    const element = document.createElement(tagName)
    if (className != '') element.className = className
    element.href = href
    element.src = src
    element.innerText = text
    return element
}

function createFooterElement() {
    // PAGE VARIABLES
    let $img = document.querySelector('.product__image');
    let $productName = document.querySelector('.productName');
    let $skuBestPrice = document.querySelector('.skuBestPrice').innerText;
    let $price = parseFloat($skuBestPrice.split('').filter(n => (Number(n))).join(''));
    let $totalDiscount = $price - (($price * 10) / 100);
    console.log($totalDiscount)

    // ELEMENTS
    //// PRODUCT INFO
    let $imgProd = newElement('img', 'image_product', '', `${$img.getAttribute('src')}`, '')
    let $textTitle = newElement('div', 'product_title', null, null, `${$productName.innerText}`)
    let $textPrice = newElement('p', '', null, null, `Preço: ${$skuBestPrice}`)
    let $textDiscount = newElement('p', '', null, null, `Preço com desconto: R$ ${$totalDiscount.toFixed(2).replace('.',',')}`)
    //// ACTIONS
    let $buttonActPay = newElement('button', 'button-pay button button--buy button--full product__add-to-cart active', 'javascript:;', '', 'Adicionar à Sacola')
    let $btnClose = newElement('button', 'btn-close-act', null, null, 'X')

    // DIV - BODY
    this.element = newElement('div', 'product-footer')

    let actionsProd = newElement('div', 'actions-prod')
    let infoProd = newElement('div', 'info-prod')

    actionsProd.appendChild($btnClose)
    actionsProd.appendChild($buttonActPay)

    infoProd.appendChild($textTitle)
    infoProd.appendChild($textPrice)
    infoProd.appendChild($textDiscount)

    this.element.appendChild($imgProd)
    this.element.appendChild(actionsProd)
    this.element.appendChild(infoProd)

    $body.appendChild(this.element);
}

createFooterElement()

function addStyles() {
    // DIVS - ELEMENTS
    let $product_footer = document.querySelector('.product-footer');
    //// INFO
    let $image_product = document.querySelector('.image_product');
    let $info_product = document.querySelector('.info-prod');
    $product_title = document.querySelector('.product_title');
    //// ACTIONS
    let $actions = document.querySelector('.actions-prod');
    let $button_pay = document.querySelector('.button-pay');
    let $button_close = document.querySelector('.btn-close-act');


    function addStyle(element, properties) {
        element.setAttribute('style', properties)
    }
    // STYLES
    //// MAIN - DIV
    addStyle($product_footer, 'display: block; float: left; background: #fff; width: 100%; height: 120px; padding: 10px; position: fixed; bottom: 0; border-top: 1px solid #000; z-index: 9;')

    //// INFO - IMAGE
    addStyle($image_product, 'width: 80px; height: 100px; margin: 0 10px 0 30px; float: left;')

    //// INFO - DIV
    addStyle($info_product, 'font-family: sans-serif; font-weight: bold; background: none; position: left;')

    //// INFO - TITLE
    addStyle($product_title, 'line-height: 1.4; margin: 10px 0 5px 0; text-transform: uppercase;')

    //// ACTIONS - DIV
    addStyle($actions, 'float: right; margin: 0 30px 50px 30px; display: block; width: 30%;')

    //// ACTIONS -BUTTON PAY
    addStyle($button_pay, 'width: 80%; margin: 7% 2% 0 0; float: left; text-transform: uppercase;')

    //// ACTIONS - BUTTON CLOSE
    addStyle($button_close, 'border: none; background: none; font-weight: bold; font-size: 18px; float: right;')

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
}

addStyles()
