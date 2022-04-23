import logo from "./logo.svg";
import "./App.css";
import User from "./Component/User";
import NodeStaking from "./Component/NodeStaking";
import NodeIncome from "./Component/NodeIncome";
// import Chart1 from "./Component/Graph/Graph1/Chart1";
// import Graph1 from "./Component/Graph/Graph1";
import Graph1 from "./Component/Graph/Graph1";
import Dashboard from "./Component/Dashboard";

import Header from "./Component/Header/Header";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const[leftPadding,setLeftPadding]=useState(false)

  return (
    <div className="App">

      {/* <Dashboard leftPadding={leftPadding}/> */}
      {/* <User leftPadding={leftPadding}/> */}
      {/* <NodeStaking leftPadding={leftPadding}/> */}
      {/* <NodeIncome leftPadding={leftPadding}/> */}

      <BrowserRouter>
      <Header setLeftPadding={setLeftPadding} leftPadding={leftPadding}/>
    <Routes>
      <Route exact path="/" element={<Dashboard leftPadding={leftPadding}/>} />
      <Route exact path="/User" element={<User leftPadding={leftPadding}/>} />
      <Route exact path="/NodeStaking" element={<NodeStaking leftPadding={leftPadding}/>} />
      <Route exact path="/NodeIncome" element={<NodeIncome leftPadding={leftPadding}/>} />
      
    </Routes>
  </BrowserRouter>,
      
    </div>
  );
}

export default App;
