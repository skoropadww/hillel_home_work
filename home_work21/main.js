// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// oReq.send();


// First example------------------------

// try {
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//   oReq.send();

// } catch (error) {
//   console.error(error);
// } 

// --------------------------------------



// Second example -------------------

// try {
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   oReq.send();

// } catch (error) {
//   console.error(error);
// }

// ----------------------------------


// Example third ------------------------

// try {
//   oReq.addEventListener("load", reqListener);
//   oReq.open("POST", "https://jsonplaceholder.typicode.com/posts");
//   oReq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//   oReq.send(JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,  
//   }))
// } catch (error) {
//   console.error(error);
// }

// ----------------------------------

// Example fourth-------------------------------------

// try {
//   oReq.addEventListener("load", reqListener);
//   oReq.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
//   oReq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//   oReq.send(JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }))
// } catch (error) {
//   console.error(error);
// }