const API_URL = 'https://swt-rec-league.herokuapp.com/'

const RecService = {
  fetchRecs: () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => {
        console.log(error)
      })
  }
}

export default RecService