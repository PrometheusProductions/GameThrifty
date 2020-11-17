// codepen.io template
// JS for content editable trick from Chris Coyier
// var span = document.querySelector("span");

// span.addEventListener("input", function () {
//   var text = this.innerText;
//   this.setAttribute("data-heading", text);
//   this.parentElement.setAttribute("data-heading", text);
// });


// fetch('https://www.cheapshark.com/api/1.0/games?id=612',
//   method: 'POST',
//   body: {'
//   }

// }).then(res => {
//   return res.json()
// })
//   .then(data => console.log(data))
//   .catch(error => console.log('oops! data cannot be found.'))

//<option value=".titleResults">${titleResults}</option>
const dropDown = document.querySelector('#dropDown')
const showGame = (game) => {
  const option = document.createElement('option')
  option.setAttribute('value', game.cheapestDealID)
  // option.innerHTML = `<img src="${game.thumb}">${game.external}`
  option.innerHTML = game.external
  // const gameDiv = document.createElement('div')
  // gameDiv.classList.add('titleResults')
  // const title = document.createElement('h2')
  // gameDiv.appendChild(title)
  // title.innerHTML = game.external
  dropDown.appendChild(option)

}

// const removeLastsearch = () => {
//   const titleResults = document.querySelector('#dropDown')
//   titleResults.childNodes.forEach(result => {
//     console.log(result)
//     titleResults.removeChild(result)
//   }) 
// }


// Clears last search results 
const removeLastsearch = () => {
  const titleResults = document.querySelector('#dropDown')
  while (titleResults.childNodes.length) {
    titleResults.firstChild.remove()
  }
}


const formsubmit = async (e) => {
  e.preventDefault()
  const searchString = document.querySelector('#SearchInput').value
  console.log(searchString)
  const result = await axios.get('https://www.cheapshark.com/api/1.0/games?title=' + searchString)
  console.log(result.data)
  removeLastsearch()
  const sortedTitles = result.data.sort((a, b) => a.external > b.external ? 1 : -1)

  const option = document.createElement('option')
  option.setAttribute("value", "default")
  option.innerHTML = "Results"
  dropDown.appendChild(option)

  sortedTitles.forEach(game => {
    showGame(game)
    // console.log(game.external)
  });
}



const form = document.querySelector('.searchResults')
form.addEventListener('submit', formsubmit)

const getCheapestdeal = async (e) => {
  console.log(e.target.value)
  // clear out the top deal div
  const topDeal = document.querySelector('.topDeal')
  topDeal.innerHTML = null
  // go get the new game data
  const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?id=' + e.target.value)
  console.log(result.data)
  const gameInfo = result.data.gameInfo
  console.log("gameInfo", gameInfo)
  // this creates the image 
  const gameImage = document.createElement('img')
  // gameImage.setAttribute('src', gameInfo.thumb)
  // this creates the game title
  const gameTitle = document.createElement('h2')
  gameTitle.innerText = gameInfo.name
  // this creates the deal price
  const gamePrice = document.createElement('h3')
  gamePrice.innerHTML = "Best Available Sale Price :  <br>" + gameInfo.salePrice
  // this creates the retail price
  const gameRetail = document.createElement('h3')
  gameRetail.innerHTML = "Regular Asking Price :  <br>" + gameInfo.retailPrice

  // And now we plug them in 
  topDeal.append(gameImage)
  topDeal.append(gameTitle)
  topDeal.append(gamePrice)
  topDeal.append(gameRetail)

}




dropDown.addEventListener('change', getCheapestdeal)


