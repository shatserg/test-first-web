import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile.js";

function App() {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
      </header>
    </div>
  );
}

export default App;
