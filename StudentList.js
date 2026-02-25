import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/actions";
import { Link } from "react-router-dom";

function StudentList() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  let data = [...students];

  if (filter) {
    data = data.filter(s => s.class === filter);
  }

  if (sort === "name") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "roll") {
    data.sort((a, b) => a.roll - b.roll);
  }

  return (
    <div className="container mt-4">
      <h2>Students</h2>

      <select onChange={e => setSort(e.target.value)}>
        <option>Sort</option>
        <option value="name">Name</option>
        <option value="roll">Roll</option>
      </select>

      <select onChange={e => setFilter(e.target.value)}>
        <option value="">Filter</option>
        <option value="MCA">MCA</option>
        <option value="BCA">BCA</option>
      </select>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.class}</td>

              <td>
                <Link
                  to={"/edit/" + s.id}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteStudent(s.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;