import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;