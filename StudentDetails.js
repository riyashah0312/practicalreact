import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStudent } from "../redux/actions";
import { useState } from "react";

function StudentDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const student = useSelector(state =>
    state.students.find(s => s.id == id)
  );

  const [data, setData] = useState(student);

  const update = e => {
    e.preventDefault();
    dispatch(updateStudent(data));
    navigate("/students");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>

      <form onSubmit={update}>
        <input
          className="form-control mb-2"
          value={data.name}
          onChange={e =>
            setData({ ...data, name: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          value={data.roll}
          onChange={e =>
            setData({ ...data, roll: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          value={data.class}
          onChange={e =>
            setData({ ...data, class: e.target.value })
          }
        />

        <button className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default StudentDetails;