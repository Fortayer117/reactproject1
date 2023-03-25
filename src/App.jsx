import { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Cart from "./Cart";

function App() {
  return <div className="App">
  <Navbar></Navbar>
  <Login></Login>
  <Cart></Cart>
  </div>;
}

export default App;
