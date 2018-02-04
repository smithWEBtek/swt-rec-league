import * as actionTypes from './RecActionTypes'
import RecService from './RecService'

//-----FETCH RECS ACTIONS-----------------------------
export const fetchRecsStart = () => {
  return { type: actionTypes.FETCH_RECS_START }
}
export const fetchRecsSuccess = (recs) => {
  return { type: actionTypes.FETCH_RECS_SUCCESS, recsList: recs }
}
export const fetchRecsFail = (error) => {
  return { type: actionTypes.FETCH_RECS_FAIL, error: error }
}
export const fetchRecs = () => {
  return dispatch => {
    dispatch(fetchRecsStart())
    RecService.fetchRecs()
      .then(response => {

        console.log('[RecActions] response: ', response)

        dispatch({ type: actionTypes.FETCH_RECS, recordsList: response })
        dispatch(fetchRecsSuccess())
      })
      .catch(error => {
        dispatch(fetchRecsFail(error))
      })
  }
}