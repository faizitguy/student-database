import logo from "./logo.svg";
import "./App.css";
import Students from "./Components/Students";
import AddStudentModal from "./Components/AddStudentModal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { getStudents } from "./Redux/actionCreator";
import { useSelector, useDispatch } from "react-redux";
import BasicPagination from "./Components/Pagination";
import StudentCard from "./Components/StudentCard";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
}));

function App() {
  const classes = useStyles();
  // const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  console.log(students, "students");

  useEffect(() => {
    dispatch(getStudents()).then((res) => setLoading(false));
  }, []);

  console.log(students);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Container style={{ marginTop: "50px" }}>
        <AddStudentModal />
        <Grid container spacing={4}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            students.map((item) => <Students student={item} />)
          )}
        </Grid>
        <BasicPagination />
      </Container>
    </div>
  );
}

export default App;
