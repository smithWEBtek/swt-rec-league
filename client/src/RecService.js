// const API_URL = 'https://swt-rec-league.herokuapp.com'
const API_URL = 'http://127.0.0.1:3001/'

const RecService = {
  fetchRecs: () => {
    return fetch(`${API_URL}`)
      .then(function (response) {
        console.log('response: ', response)
        console.log('response.ok: ', response.ok)
        console.log('status: ', response.status)
        console.log('statusText: ', response.statusText)
        return response.json()
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default RecService