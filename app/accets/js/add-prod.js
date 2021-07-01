
let skuInput = null;
let nameInput = null;
let priceInput = null;
let productType = null;
let btnSave = null;
let fieldSet = []; // fields, that participate in the formation of product 

document.addEventListener("DOMContentLoaded", () => {
    init();
});


function init() {
    skuInput = document.querySelector('input[name=productSKU]');
    nameInput = document.querySelector('input[name=productName]');
    priceInput = document.querySelector('input[name=productPrice]');
    btnSave = document.querySelector('.product__save');



    /*work with selector fo Product Type */
    productType = document.querySelector('select[name=productType]');
    const featureGroup = document.querySelectorAll('.feature-wrap');
    //setup curent type of product and items to save as new product
    fieldSet.push(skuInput);
    fieldSet.push(nameInput);
    fieldSet.push(priceInput);
    setProductFeatures(featureGroup, productType.value);

    productType.addEventListener('change', function (e) {

        //add in fieldset common fields;
        fieldSet.forEach(item => item.removeEventListener('change', clearValidation));  // working w/o owerflow
        fieldSet = []; // create new array because in old array may contain fields for other product
        fieldSet.push(skuInput);
        fieldSet.push(nameInput);
        fieldSet.push(priceInput);
        //display feature fields

        switch (this.value) {
            case 'book':
                setProductFeatures(featureGroup, 'book');
                break;
            case 'dvd':
                setProductFeatures(featureGroup, 'dvd');
                break;
            case 'furniture':
                setProductFeatures(featureGroup, 'furniture');
                break;
        }


    })

    fieldSet.forEach(item => {
        item.addEventListener('input', clearValidation)
    });

    //save product in DB

    btnSave.addEventListener('click', () => {
       
        if (validateProductInfo() === true) {
            saveProduct();
            setTimeout(homeRedirect, 300);
           
        }
    })
}
function homeRedirect(){
    document.location.href = "/";
}
function clearValidation(e) {
    
    if (e.target.value != '') {
        this.classList.remove('input_error');
        this.nextSibling.nextSibling.style.opacity = 0;
    }
}

function setProductFeatures(featureGroup, type) {
    featureGroup.forEach(item => {
        if (item.getAttribute('data-product-features') == type) {
            item.classList.add('feature__active');
            const featuresInputs = item.querySelectorAll('input');
            for (const input of featuresInputs) {
                fieldSet.push(input);
            }


        } else {
            item.classList.remove('feature__active')
        }
    })
}

function validateProductInfo() {
    let flag = true;

    fieldSet.forEach(item => {

        switch (item.getAttribute('type')) {
            case 'number':

                if (item.value <= 0) {
                    item.className = 'input_error';
                    item.nextSibling.nextSibling.style.opacity = 1; //first next extSibling is textNode
                    flag = false;
                } else {
                    item.classList.remove('input_error');
                    item.nextSibling.nextSibling.style.opacity = 0; //first next extSibling is textNode
                   
                }
                
                break;
            case 'text':
                if (item.value == '') {
                    item.className = 'input_error';
                    item.nextSibling.nextSibling.style.opacity = 1; //first next extSibling is textNode
                    flag = false; 
                } else {
                    item.classList.remove('input_error');
                    item.nextSibling.nextSibling.style.opacity = 0; //first next extSibling is textNode
                }
                
                break;
        }
    })



    return flag;
}

async function saveProduct(){
    let data = fieldSet.map(item =>{
        return `${item.getAttribute('name')}=${item.value}`;
    }).join('&');
    data += `&productType=${productType.value}`; //write info about type of product
    
    const res = await fetch('/product/save', {
        method: 'POST',
        headers: {      
           'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      }).then(data => {
       
        return data.text();
      });

      
    
}

async function sendInfo(url, data){
    const res = await fetch(url, {
      method: 'POST',
      headers: {      
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    }).then(data => {
     
      return data.text();
    });
  
    
  }