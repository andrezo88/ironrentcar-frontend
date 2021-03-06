import { Routes, Route } from "react-router-dom"
import { Home } from "./page/Home"
import { Login } from "./page/Login"
import { Signup } from "./page/Signup";
import { Vehicles } from './page/Vehicles';
import { User } from './page/User';
import { Rented } from "./page/Rented";
import { Rent } from './page/Rent';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User />} />
        <Route path="rented/:rentId" element={<Rented />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/rent/:carId" element={<Rent />} />
      </Routes>
    </>
  );
}

export default App;
