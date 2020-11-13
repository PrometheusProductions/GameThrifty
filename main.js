// fetch('https://www.cheapshark.com/api/1.0/games?id=612',
//   method: 'POST',
//   body: {'
//   }

// }).then(res => {
//   return res.json()
// })
//   .then(data => console.log(data))
//   .catch(error => console.log('oops! data cannot be found.'))
const showGame= (game) => {
  const gameDiv = document.createElement('div')
  gameDiv.classList.add('titleResults')
  const title = document.createElement('h2')
  gameDiv.appendChild(title)
  title.innerHTML = game.external
  releventResults.appendChild(gameDiv)
}

const removeLastsearch = () => {
  const oldResults = document.querySelectorAll('.titleResults')
  oldResults.forEach(result => result.remove())
}

const formsubmit = async (e) => {
  e.preventDefault()
  const searchString = document.querySelector('#SearchInput').value
  console.log(searchString)
  const result = await axios.get('https://www.cheapshark.com/api/1.0/games?title=' + searchString)
  console.log(result.data)
  removeLastsearch()
  const sortedTitles = result.data.sort((a, b) => a.external > b.external ? 1 : -1 ) 
  sortedTitles.forEach(game => {
    showGame(game)
    console.log(game.external)
  });
}

const form = document.querySelector('.titleResults')
form.addEventListener('submit', formsubmit)

const releventResults=document.querySelector('.releventResults')

document.getElementById(".titleResults").value;
