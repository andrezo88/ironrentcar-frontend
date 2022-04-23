import { Routes, Route } from "react-router-dom"
import { Home } from "./page/Home"
import { Login } from "./page/Login"
import './App.css';

import Vehicles from './components/Vehicles';
import Rent from './page/Rent';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
// as comment

export default App;
