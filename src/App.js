import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route,Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">


<ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Login">Login</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Profile">Profile</Link>
  </li>
</ul>

</nav>

<div className="container">
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Profile" element={<Profile/>}/>
  </Routes>
</div>
    </div>
  );
}

export default App;
