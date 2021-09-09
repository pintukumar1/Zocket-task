import React from "react"
import {BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/Home/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
          <Route path="/" exact component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
