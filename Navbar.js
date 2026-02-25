import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuth);

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand" to="/">
        Student System
      </Link>

      {isAuth && (
        <div>
          <Link className="btn btn-primary me-2" to="/students">
            Students
          </Link>

          <Link className="btn btn-success me-2" to="/add">
            Add
          </Link>

          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;