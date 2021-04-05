
import Students from "./Students";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux'
import { set } from "mongoose";
import {addStudents} from '../Redux/actionCreator'
import { compose } from "redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  
  },
  close: {
    marginLeft:"250px",
    margin:"0px",
    cursor:"pointer",
    padding:"0px"
  }
}));

function AddStudentModal() {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const initState = {
    fname : "",
    lname:"",
    age : "",
    city : "",
    phone : "",
    email : ""
  }
  
  const [state, setMyState] = useState(initState)
  const {fname,lname, age, city, phone, email,} = state

  const handleChange = (e) => {
    const {name, value} = e.target 
    setMyState((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }
  
 console.log(state)
 
 const dispatch = useDispatch()

 const handleAdd = (payload) => {
  
    dispatch(addStudents(payload))
    .then((res) => res.type === "GET_STUDENTS_SUCCESS"?handleClose():console.log(res.type))
    .catch(err => console.log(err, 'error occured'))

   
    
 }

  return (
    <div className="App">
        <div>
          <Button variant="contained" color="primary" onClick={handleOpen} style = {{margin:"20px"}}>
            Add Student
          </Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
            
              <div className={classes.paper} style = {{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h3  className = {classes.close} onClick = {handleClose}>X</h3>
                <h2 >Add Student</h2>
                
                  <form onSubmit = {(e) =>e.preventDefault()}>
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter First Name" variant="outlined"    name = "fname" onChange = {handleChange} required/>
                  </div>

                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Last Name" variant="outlined"    name = "lname" onChange = {handleChange} required/>
                  </div>

                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Age" variant="outlined"    name = "age" onChange = {handleChange} required/>
                  </div>

                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter City Name" variant="outlined"   name = "city" onChange = {handleChange} required/>
                  </div>
                  
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Phone" variant="outlined"   name = "phone" onChange = {handleChange} required/>         
                  </div>
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Email" variant="outlined"    name = "email" onChange = {handleChange} required/>         
                  </div>
                  <div style = {{margin:"10px"}}>
                  
                    <Button type = "submit" variant = "contained" color = "primary" onClick = {() => handleAdd({fname,lname, age, city,phone, email})}>Add Student</Button>
                  </div>
                  </form>
              </div>
            </Fade>
          </Modal>
        </div>
     
     
    </div>
  );
}

export default AddStudentModal
