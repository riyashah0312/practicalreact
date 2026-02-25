import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    roll: "",
    class: ""
  });

  const submit = e => {
    e.preventDefault();
    dispatch(addStudent(student));
    navigate("/students");
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>

      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={e =>
            setStudent({ ...student, name: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Roll"
          onChange={e =>
            setStudent({ ...student, roll: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Class"
          onChange={e =>
            setStudent({ ...student, class: e.target.value })
          }
        />

        <button className="btn btn-success">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;