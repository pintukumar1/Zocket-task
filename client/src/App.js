import React from "react"
import {BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import VerificationPage from "./components/VerificationPage/VerificationPage";
import Table from './components/Table/Table';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/verification" exact component={VerificationPage}/>
          <Route path="/AllEmails" exact component={Table} />
      </BrowserRouter>
    </div>
  );
}

export default App;
