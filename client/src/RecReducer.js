import * as actionTypes from './RecActionTypes';

const initialState = {
  recs: [],
  loading: false,
  error: false,
  message: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    //-----CREATE REC-----------------------------
    // case actionTypes.CREATE_REC_START:
    //   return Object.assign({}, state, { loading: true })

    // case actionTypes.CREATE_REC_SUCCESS:
    //   return Object.assign({}, state, { loading: false })

    // case actionTypes.CREATE_REC_FAIL:
    //   return Object.assign({}, state, {
    //     error: action.error,
    //     loading: false,
    //     message: action.type
    //   })

    // case actionTypes.CREATE_REC:
    //   const newStudent = action.recData
    //   return Object.assign({}, state, {
    //     recs: state.recs.concat(newStudent)
    //   })


    //-----FETCH RECS-----------------------------
    case actionTypes.FETCH_RECS_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.FETCH_RECS_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.FETCH_RECS_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.FETCH_RECS:
      const recs = action.recsList
      return Object.assign({}, state, {
        recs: recs
      })


    //-----UPDATE REC-----------------------------
    // case actionTypes.UPDATE_REC_START:
    //   return Object.assign({}, state, { loading: true })

    // case actionTypes.UPDATE_REC_SUCCESS:
    //   return Object.assign({}, state, { loading: false })

    // case actionTypes.UPDATE_REC_FAIL:
    //   return Object.assign({}, state, {
    //     error: action.error,
    //     loading: false,
    //     message: action.type
    //   })

    // case actionTypes.UPDATE_REC:
    //   const recData = action.updatedStudentData
    //   const recIndex = state.recs.findIndex(rec => rec.id === recData.id);
    //   const stateTemp = {
    //     ...state,
    //     recs: [
    //       ...state.recs.slice(0, recIndex),
    //       ...state.recs.slice(recIndex + 1, state.recs.length)
    //     ]
    //   };
    //   return Object.assign({}, { ...stateTemp }, { recs: stateTemp.recs.concat(recData) })


    //-----DELETE REC-----------------------------
    // case actionTypes.DELETE_REC_START:
    //   return Object.assign({}, state, { loading: true })

    // case actionTypes.DELETE_REC_SUCCESS:
    //   return Object.assign({}, state, { loading: false })

    // case actionTypes.DELETE_REC_FAIL:
    //   return Object.assign({}, state, {
    //     error: action.error,
    //     loading: false,
    //     message: action.type
    //   })

    // case actionTypes.DELETE_REC:
    //   const updatedStudents = state.recs.filter(rec => rec.id !== action.id);
    //   return Object.assign({}, state, {
    //     recs: updatedStudents
    //   })

    //----- DEFAULT --------------------------------
    default:
      return state;
  }
}

export default reducer;
