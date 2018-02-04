// const API_URL = 'https://swt-rec-league.herokuapp.com'
const API_URL = 'http://127.0.0.1:3001/'
// const API_URL = 'http://localhost:3000'
// const API_URL = 'localhost:3000/api/'

const RecService = {
  fetchRecs: () => {
    return fetch(`${API_URL}`)
      .then(res => res.json())
      .catch(error => {
        console.log(error)
      })
  }
}

export default RecService