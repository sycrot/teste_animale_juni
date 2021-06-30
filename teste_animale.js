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
    let $body = document.body;
    let $img = document.querySelector('.product__image');
    let $productName = document.querySelector('.productName');
    let $skuBestPrice = document.querySelector('.skuBestPrice').innerText;
    let $price = parseFloat($skuBestPrice.split('').filter(n => (Number(n))).join(''));
    let $totalDiscount = ($price - (($price * 10) / 100)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    // ELEMENTS
    //// PRODUCT INFO
    let $imgProd = newElement('img', 'image_product', '', `${$img.getAttribute('src')}`, '')
    let $textTitle = newElement('div', 'product_title', null, null, `${$productName.innerText}`)
    let $textPrice = newElement('p', '', null, null, `Preço: ${$skuBestPrice}`)
    let $textDiscount = newElement('p', '', null, null, `Preço com desconto: ${$totalDiscount}`)
    //// ACTIONS
    let $buttonActPay = newElement('button', 'button-pay button button--buy button--full product__add-to-cart active', 'javascript:;', '', 'Adicionar à Sacola')
    let $btnClose = newElement('button', 'btn-close-act', null, null, 'X')

    // DIV - BODY
    let $divFooter = newElement('div', 'product-footer')
    let actionsProd = newElement('div', 'actions-prod')
    let infoProd = newElement('div', 'info-prod')

    actionsProd.appendChild($btnClose)
    actionsProd.appendChild($buttonActPay)

    infoProd.appendChild($textTitle)
    infoProd.appendChild($textPrice)
    infoProd.appendChild($textDiscount)

    $divFooter.appendChild($imgProd)
    $divFooter.appendChild(actionsProd)
    $divFooter.appendChild(infoProd)

    $body.appendChild($divFooter);

    addStyles($divFooter, $imgProd, infoProd, $textTitle, actionsProd, $buttonActPay, $btnClose)
}

createFooterElement()

function addStyleEl(element, properties) {
    element.setAttribute('style', properties)
}

function addStyles(divFooter, imageProd, divInfo, textTitle, actionsProd, buttonActPay, btnClose) {
    // STYLES
    //// MAIN - DIV
    addStyleEl(divFooter, 'display: block; float: left; background: #fff; width: 100%; height: 120px; padding: 10px; position: fixed; bottom: 0; border-top: 1px solid #000; z-index: 9;')

    //// INFO - IMAGE
    addStyleEl(imageProd, 'width: 80px; height: 100px; margin: 0 10px 0 30px; float: left;')

    //// INFO - DIV
    addStyleEl(divInfo, 'font-family: sans-serif; font-weight: bold; background: none; position: left;')

    //// INFO - TITLE
    addStyleEl(textTitle, 'line-height: 1.4; margin: 10px 0 5px 0; text-transform: uppercase;')

    //// ACTIONS - DIV
    addStyleEl(actionsProd, 'float: right; margin: 0 30px 50px 30px; display: block; width: 30%;')

    //// ACTIONS -BUTTON PAY
    addStyleEl(buttonActPay, 'width: 80%; margin: 7% 2% 0 0; float: left; text-transform: uppercase;')

    //// ACTIONS - BUTTON CLOSE
    addStyleEl(btnClose, 'border: none; background: none; font-weight: bold; font-size: 18px; float: right;')

    // ACTIONS - EVENTS
    buttonActPay.addEventListener('click', function() {
        var balls = '...'
        buttonText(0, balls.substr(2));
        buttonText(200, balls.substr(1));
        buttonText(500, balls.substr(0));

        setTimeout(function() {
            buttonActPay.innerText = "Produto adicionado!";
        }, 1000);
        setTimeout(function() {
            buttonActPay.innerText = "Adicionar à Sacola";
        }, 4000)
    });

    btnClose.addEventListener('click', function() {
        divFooter.style.display = "none";
    });

    function buttonText(time, text) {
        setTimeout(function() {
            buttonActPay.style.fontSize = "12px";
            buttonActPay.innerText = text;
        }, time)
    }
}