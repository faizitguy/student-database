import {GET_STUDENTS_REQUEST, 
    GET_STUDENTS_SUCCESS, 
    GET_STUDENTS_FAILURE,
    DELETE_STUDENTS_REQUEST,
    DELETE_STUDENTS_SUCCESS,
    DELETE_STUDENTS_FAILURE,
    ADD_STUDENTS_REQUEST,
    ADD_STUDENTS_SUCCESS,
    ADD_STUDENTS_FAILURE,
    UPDATE_STUDENTS_REQUEST,
    UPDATE_STUDENTS_SUCCESS,
    UPDATE_STUDENTS_FAILURE
} from './actionTypes'

import axios from 'axios'

export const getStudentsRequest = () => {
    return {
        type : "GET_STUDENTS_REQUEST"
    }
}

export const getStudentsSuccess = (payload) => {
    return {
        type : "GET_STUDENTS_SUCCESS",
        payload
    }       
}

export const getStudentsFailure = () => {
    return {
        type : "GET_STUDENTS_FAILURE"
    }
}

//GET STUDENTS REQUEST thunk

export const getStudents = () => (dispatch) => {
    dispatch(getStudentsRequest())
    return axios.get("http://localhost:5000/api/students")
    .then((res) => dispatch(getStudentsSuccess(res.data)))
    .catch((err) => dispatch(getStudentsFailure(err)))
}


//DELETE  STUDENTS DATA

export const deleteStudentsRequest = () => {
    return {
        type : "GET_STUDENTS_REQUEST"
    }
}

export const deleteStudentsSuccess = (payload) => {
    return {
        type : "GET_STUDENTS_SUCCESS",
        payload
    }       
}

export const deleteStudentsFailure = () => {
    return {
        type : "GET_STUDENTS_FAILURE"
    }
}

//DELETE STUDENTS REQUEST thunk

export const deleteStudents = (id) => (dispatch) => {
    dispatch(deleteStudentsRequest())
    return axios({
        method : "DELETE",
        url : `http://localhost:5000/api/students/delete/${id}`
    })
    .then((res) => dispatch(getStudents()))
    .catch((err) => dispatch(getStudentsFailure(err)))
}
//ADD STUDENT

export const addStudentsRequest = () => {
    return {
        type : "ADD_STUDENTS_REQUEST"
}

}

export const addStudentsSuccess = (payload) => {
    return {
        type : "ADD_STUDENTS_SUCCESS",
        payload
    }       
}

export const addStudentsFailure = () => {
    return {
        type : "ADD_STUDENTS_FAILURE"
    }
}

//ADD STUDENTS REQUEST thunk

export const addStudents = ({fname,lname, age, city, phone, email}) => (dispatch) => {
    dispatch(addStudentsRequest())
    return axios({
        method : "post",
        url : "http://localhost:5000/api/students",
        data : {
            fname, lname, age, city, phone, email
        }
    })
    .then((res) => dispatch(getStudents()))
    .catch((err) => dispatch(addStudentsFailure(err)))
}


//UPDATE STUDENT

export const updateStudentsRequest = () => {
    return {
        type : "UPDATE_STUDENTS_REQUEST"
}

}

export const updateStudentsSuccess = (payload) => {
    return {
        type : "UPDATE_STUDENTS_SUCCESS",
        payload
    }       
}

export const updateStudentsFailure = () => {
    return {
        type : "UPDATE_STUDENTS_FAILURE"
    }
}

//UPDATE STUDENTS REQUEST thunk

export const updateStudents = (id, {fname, lname, age, city, phone, email}) => (dispatch) => {
    dispatch(updateStudentsRequest())
    return axios({
        method : "PUT",
        url : `http://localhost:5000/api/students/update/${id}`,
        data : {
           fname, lname, age, city, phone, email
        }
    })
    .then((res) => dispatch(getStudents()))
    // .then((res) => dispatch(updateStudentsSuccess))
    .catch((err) => dispatch(updateStudentsFailure(err)))
}


