class PurchaseElements{
    productPage = () => {return '#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name'}
    btnAddToCar = () => {return '.exclusive > span'}
    btnToCheckout = () => {return '.button-medium > span'}
    btnContinueCheckout = () =>{return '.cart_navigation > .button > span'}
    aceptTerms = () => {return '#cgv'}
    cardPayment = () => {return '.bankwire > span'}
    CheckPayment = () => {return '.cheque > span'}
    btnConfirm = () => {return '#cart_navigation > .button > span'}
    boxInformation = () => {return '.box'}
}

export default PurchaseElements