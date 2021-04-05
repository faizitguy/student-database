import React from "react";
import "./StudentCard.css";
import Button from "@material-ui/core/Button";

function StudentCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            class="avatar"
            src="https://lh3.googleusercontent.com/ogw/ADGmqu_y5lgH0RHq93Xx3pcMb0cPbbMVLZ3gssoGhvOK6g=s83-c-mo"
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
             Faiz <b>Khan</b>
              <span className="badge">pro</span>
            </span>
            <span className="username">@FaizKhan</span>
          </div>
          <div className="student-infos">
           
            <table>
              <tr>
                <td className = "col">Name </td>
                <td>Faiz</td>
              </tr>
              <tr>
                <td className = "col">Age</td>
                <td>23</td>
              </tr>
              <tr>
                <td className = "col">Phone</td>
                <td>94921685</td>
              </tr>
              <tr>
                <td className = "col">email</td>
                <td>something@gmail.com</td>
              </tr>
              <tr>
                <td className = "col">City</td>
                <td>Kadapa</td>
              </tr>
            </table>
           
          </div>
          <div className = "buttons">

         <Button>Edit</Button>
         <Button>Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentCard;
