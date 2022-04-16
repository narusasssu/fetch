const requestURL = 'https://jsonplaceholder.typicode.com/users'



function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {


    const xhr = new XMLHttpRequest()

    xhr.open(method, url) // вместо статического "GET", мы получим динамический параметр method, также с url

    xhr.responseType = 'json' // респонс это ответ
    xhr.setRequestHeader('Content-Type', 'application/json' )    //здесь мы должны указать что мы отправляем что-либо в формате json

    xhr.onload = () => {
        console.log(xhr.response)
    }

    xhr.onerror = () => {
        if(xhr.status >= 400){
            reject(xhr.response) // reject нужен в том случае, если присутствует какая-либо ошибка при запросе
        }else {resolve(xhr.response)}  // т.е. резолв вернет нам промис, уже выполненный
    }

    xhr.send(JSON.stringify(body))
   })
}



// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'vlad',
    age: 20
}

sendRequest("POST", requestURL, {
    name: 'vlad',
    age: 20
})
    .then(data => console.log(data))
    .catch(err => console.log(err))