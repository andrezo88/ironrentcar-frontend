import { Routes, Route } from "react-router-dom"
import { Home } from "./page/Home"
import { Login } from "./page/Login"
import './App.css';
import { Signup } from "./page/Signup";
import { Vehicles } from './components/Vehicles';
import { User } from './page/User';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </>
  );
}
// as comment

export default App;
