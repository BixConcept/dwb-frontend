import { GET_ASSIGNMENTS, CREATE_ASSIGNMENT, DELETE_ASSIGNMENT } from "./types";
import axios from "axios";

// GET_ASSIGNMENTS
export const getAssignments = () => dispatch => {
  fetch("http://localhost:8000/assignment/")
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: GET_ASSIGNMENTS,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

// CREATE_ASSIGNMENTS
export const createAssignment = assignment => dispatch => {
  axios
    .post("http://localhost:8000/assignment/", JSON.stringify(assignment))
    .then(res => {
      dispatch({
        type: CREATE_ASSIGNMENT,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

// delete ASSIGNMENT

export const deleteAssignment = assignment => dispatch => {
  //console.log(assignment)
  axios
    .delete(`http://localhost:8000/assignment/${assignment.id}/`)
    .then(res => {
      console.log(assignment);
      dispatch({
        type: DELETE_ASSIGNMENT,
        payload: assignment.id
      });
    })
    .catch(err => console.log(err));
};
