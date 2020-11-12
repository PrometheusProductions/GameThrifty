// fetch('https://www.cheapshark.com/api/1.0/games?id=612',
//   method: 'POST',
//   body: {'
//   }

// }).then(res => {
//   return res.json()
// })
//   .then(data => console.log(data))
//   .catch(error => console.log('oops! data cannot be found.'))

const formsubmit = async (e) => {
  e.preventDefault()
  const searchString = document.querySelector('#SearchInput').value
  console.log(searchString)
  const result = await axios.get('https://www.cheapshark.com/api/1.0/games?title=' + searchString)
  console.log(result.data)
}

const form = document.querySelector('.searchResults')
form.addEventListener('submit', formsubmit)

