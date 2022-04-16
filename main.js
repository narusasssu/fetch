// let xhttp = new XMLHttpRequest()
//
// xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         myFunction(this.responseText)
//     }
// } // здесь создается запрос
//
// // CORS - cross-origin resource sharing - является некоторой ошибкой, когда мы пытаемся послать запрос на чужой сайт
// // со своего сайта
//
// xhttp.open("GET", "http://localhost:63342/getpost_fetch/index.html?_ijt=stlakb5k1g3hpphtmlge3phkpu", true) //для отправки запроса
//
// xhttp.onload = () => {
//     console.log(xhttp)
// }
//
// xhttp.send()
// open принимает два параметра
// get для способа отправки
// указывается куда отправляется запрос
// третий параметр не обязателен, но он часто прописывается в документации. данный параметр нужен для некого
// распознания того посылается запрос синхронно или асинхронно

// open помогает запустить сам запрос

//
// function myFunction(data) {
//     console.log(data)
// }