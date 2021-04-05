import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {deleteStudents, updateStudents, getStudents} from '../Redux/actionCreator'
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from '@material-ui/core/TextField';
import StudentCard from './StudentCard'


const useStyles = makeStyles((theme) =>({
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px"
    },
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
  }))

const Students = (props) => {
  const [open, setOpen] = useState(false);
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>;
    const dispatch = useDispatch()
   const {student} = props
  const {fname,lname, age, city,phone,email} = student
  
  const initState = {
    fname : fname,
    lname, lname,
    age : age,
    city : city,
    phone : phone,
    email : email
    
  }

  const [image, setImage] = useState("")

  useEffect(() => {
    fetch('https://api.randomuser.me/')
    .then(data => data.json())
    .then(res => setImage(res.results[0].picture.medium))
  },[])

  const [state, setMyState] = useState(initState)
  console.log(state)

   const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const handleDelete = (id) => {
    dispatch(deleteStudents(id))

   }

  const handleChange = (e) => {
    const {name, value} = e.target
   
    setMyState((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }
 const handleEdit = (id, payload) => {
  console.log(id)
  dispatch(updateStudents(id, payload))
  .then(() => handleClose())
  .catch((err) => console.log(err))

}

    return(
        <React.Fragment>

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
                <h2 className = "text-center">Edit Student</h2>
                <form>
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter First Name" variant="outlined" value = {state.fname}  name = "fname" onChange = {handleChange} />
                  </div>

                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Last Name" variant="outlined" value = {state.lname}  name = "lname" onChange = {handleChange} />
                  </div>

                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter City Name" variant="outlined" value = {state.city} name = "city" onChange = {handleChange} />
                  </div>
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Age" variant="outlined" value = {state.age}  name = "age" onChange = {handleChange} />         
                  </div>
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter Phone" variant="outlined" value = {state.phone}  name = "phone" onChange = {handleChange} />
                  </div>
                  <div style = {{margin:"10px"}}>
                  <TextField  label="Enter email" variant="outlined" value = {state.email}  name = "email" onChange = {handleChange} />
                  </div>
                  <div style = {{margin:"10px"}}>
                    <Button variant = "contained" color = "primary" onClick = {() => handleEdit(student._id, {fname, lname, age, city,phone, email})}>Edit Student</Button>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>

      <Grid item xs={12} sm={6} md={4}  spacing = {2}>

      {/* <Card className={classes.root} variant="outlined">
      <CardContent>
       
        <Typography variant="h5" component="h2">
          {state.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {state.city}
        </Typography>
        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
      {state.age} years old
      <CardActions>
        <Button size="small" onClick = {handleOpen}>EDIT</Button>
        <Button size="small" onClick = {() =>handleDelete(student._id)}>DELETE</Button>
      </CardActions>
    </Card> */}
     <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            class="avatar"
            src={image}
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {state.fname} <b>{state.lname}</b>
              <span className="badge">pro</span>
            </span>
            <span className="username">@{state.fname}{state.lname}</span>
          </div>
          <div className="student-infos">
            <table>
              <tr>
                <td className = "col">Name </td>
                <td>{state.fname} { state.lname}</td>
              </tr>
              <tr>
                <td className = "col">Age</td>
                <td>{state.age}</td>
              </tr>
              <tr>
                <td className = "col">Phone</td>
                <td>{state.phone}</td>
              </tr>
              <tr>
                <td className = "col">email</td>
                <td>{state.email}</td>
              </tr>
              <tr>
                <td className = "col">City</td>
                <td>{state.city}</td>
              </tr>
            </table>
           
          </div>
          <div className = "buttons">

         <Button onClick = {handleOpen}>Edit</Button>
         <Button onClick = {() =>handleDelete(student._id)}>Delete</Button>
          </div>
        </div>
      </div>
    </div>

      </Grid>
      
      
            {/* <p>{student.name}</p> */}
        </React.Fragment>
    )
}   

export default Students