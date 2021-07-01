


document.addEventListener('DOMContentLoaded', () => {

  init();

})

function init() { // setup

  let btnDel = document.querySelector('#delete-product-btn');


  btnDel.addEventListener('click', DeleteProductsClick);

}

function DeleteProductsClick() {
  const itemsToDel = []; //array with id for deleted items
  const products = document.querySelectorAll('.product ');
  for (const product of products) {
    const delChbx = product.querySelector('.delete-checkbox');

    if (delChbx.checked) {
      itemsToDel.push(parseFloat(product.dataset.productId)); //remembering product to delete
      product.remove(); //remove node from DOM 
    }
  }
  //  we send to the server array with Numbers of deteted products

  let body = '';
  itemsToDel.forEach((item, i) => {
    body = body + `${i}=${item}&`;
  });
  body = body.substr(0, body.length -1); // body w/o last &
  console.log(body);
  const requestURL = '/products/delete';
  sendInfo(requestURL, body);  
    
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

//to delete
async function postData(url = '', data = {}) {
  
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  return await response.json(); // parses JSON response into native JavaScript objects
}

// postData('https://example.com/answer', { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });

// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)

//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-Type', 'application/json')

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response)
//       } else {
//         resolve(xhr.response)
//       }
//     }

//     xhr.onerror = () => {
//       reject(xhr.response)
//     }

//     xhr.send(JSON.stringify(body))
//   })
// }

// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }

//   return fetch(url, {
//     method: method,
//     body: {some: 15, all: 'alex'},
//     headers: headers
//   }).then(response => {
//     if (response.ok) {
//       return response.json()
//     }

//     return response.json().then(error => {
//       const e = new Error('Что-то пошло не так')
//       e.data = error
//       throw e
//     })
//   })
// }


