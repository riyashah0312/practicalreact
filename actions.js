import axios from "axios";

const URL = "http://localhost:5000/students";

export const fetchStudents = () => async dispatch => {
  const res = await axios.get(URL);
  dispatch({ type: "SET_STUDENTS", payload: res.data });
};

export const addStudent = student => async dispatch => {
  const res = await axios.post(URL, student);
  dispatch({ type: "ADD", payload: res.data });
};

export const deleteStudent = id => async dispatch => {
  await axios.delete(URL + "/" + id);
  dispatch({ type: "DELETE", payload: id });
};

export const updateStudent = student => async dispatch => {
  const res = await axios.put(URL + "/" + student.id, student);
  dispatch({ type: "UPDATE", payload: res.data });
};