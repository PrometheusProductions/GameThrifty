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

const showGame= (game) => {
  const option = document.createElement('option')
  option.setAttribute('value', game.cheapestDealID)
  option.innerHTML=`<img src="${game.thumb}">${game.external}`
  // const gameDiv = document.createElement('div')
  // gameDiv.classList.add('titleResults')
  // const title = document.createElement('h2')
  // gameDiv.appendChild(title)
  // title.innerHTML = game.external
  dropDown.appendChild(option)
}

const removeLastsearch = () => {
  const titleResults = document.querySelector('#dropDown')
  titleResults.childNodes.forEach(result => {
    console.log(result)
    titleResults.removeChild(result)
  }) 
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
    // console.log(game.external)
  });
}



const form = document.querySelector('.searchResults')
form.addEventListener('submit', formsubmit)
   
const getCheapestdeal= async (e) => {
  console.log(e.target.value)
  const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?id=' + e.target.value)
  console.log(result)
}



const dropDown=document.querySelector('#dropDown')
dropDown.addEventListener('change', getCheapestdeal)
// document.getElementById(".searchResults").value;
// Movie Database homework for clues on how to remove search results