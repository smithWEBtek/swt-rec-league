import * as actionTypes from './RecActionTypes';

const initialState = {
  records: [],
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
    //     records: state.records.concat(newStudent)
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
      const records = action.recordsList

      console.log('[RecsReducer] records', records)

      return Object.assign({}, state, {
        records: records
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
    //   const recIndex = state.records.findIndex(rec => rec.id === recData.id);
    //   const stateTemp = {
    //     ...state,
    //     records: [
    //       ...state.records.slice(0, recIndex),
    //       ...state.records.slice(recIndex + 1, state.records.length)
    //     ]
    //   };
    //   return Object.assign({}, { ...stateTemp }, { records: stateTemp.records.concat(recData) })


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
    //   const updatedStudents = state.records.filter(rec => rec.id !== action.id);
    //   return Object.assign({}, state, {
    //     records: updatedStudents
    //   })

    //----- DEFAULT --------------------------------
    default:
      return state;
  }
}

export default reducer;
