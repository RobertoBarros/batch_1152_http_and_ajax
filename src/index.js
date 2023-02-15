const results = document.getElementById('results')
const form = document.getElementById('search-form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const input = document.getElementById('search-input')

  const url = `http://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`

  fetch(url)
    .then(response => response.json())
    .then((data) => {

      results.innerHTML = ''

      data.Search.forEach((result) => {
        // console.log(result.Title)

        const movie = `<li class='list-inline-item'>
                          <img src='${result.Poster}' width='200px'>
                          <p>${result.Title} (${result.Year})</p>
                        </li>`

        results.insertAdjacentHTML('beforeend', movie)
      })
    })


})


const signUp = (event) => {
  event.preventDefault()

  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const formSignup = document.querySelector("#form")
formSignup.addEventListener("submit", signUp)
