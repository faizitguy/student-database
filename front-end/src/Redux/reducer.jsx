import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAILURE,
    DELETE_STUDENTS_REQUEST,
    DELETE_STUDENTS_SUCCESS,
    DELETE_STUDENTS_FAILURE
  } from "./actionTypes";
  
  const initStore = {
    isLoading: false,
    students: []
  };
  
  const reducer = (state = initStore, {type, payload}) => { 
    switch (type) {
      case GET_STUDENTS_REQUEST:     
        return {
          ...state,
          isLoading: true         
        };
      case GET_STUDENTS_SUCCESS:
        return {
            ...state,
          isLoading: false,
          students: payload     
        };
      case GET_STUDENTS_FAILURE:      
        return {
            ...state,
          isLoading: false
        };
        case DELETE_STUDENTS_REQUEST:     
        return {
          ...state,
          isLoading: true         
        };
      case DELETE_STUDENTS_SUCCESS:
        return {
            ...state,
          isLoading: false      
        };
      case DELETE_STUDENTS_FAILURE:      
        return {
            ...state,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  