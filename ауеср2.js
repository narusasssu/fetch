const requestURL = 'https://jsonplaceholder.typicode.com/users'



// function sendRequest(method, url, body = null) {
//     return fetch(url).then(response => {
//         // return response.text() // когда мы выводим в консоль подобное, мы видим объект тип которого равен обычной строчке
//         //поэтому чтобы получить массив с объектами мы вызываем метод json у response
//         return response.json()
//     }) //fetch грубо говоря выполняет функции get
// }
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    } // метод headers по умолчанию является пустой функцией, но ему также можно задать параметры
    return fetch(url, {
            method: method,
            body: JSON.stringify(body),
        headers: headers
        }// вторым параметром fetch у post передается некоторая функция

        ).then(response => {

        return response.json()
    }) //fetch грубо говоря выполняет функции get
}

// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


sendRequest("POST", requestURL, {
    name: 'vlad',
    age: 20
})
    .then(data => console.log(data))
    .catch(err => console.log(err))