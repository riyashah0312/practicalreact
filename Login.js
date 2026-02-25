import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleLogin = e => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "123") {
      dispatch({ type: LOGIN });
      navigate("/students");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          className="form-control mb-2"
          placeholder="Username"
          onChange={e => setUser({ ...user, username: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Password"
          type="password"
          onChange={e => setUser({ ...user, password: e.target.value })}
        />

        <button className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;