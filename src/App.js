import logo from "./logo.svg";
import "./App.css";
import User from "./Component/User";
import NodeStaking from "./Component/NodeStaking";
import NodeIncome from "./Component/NodeIncome";
// import Chart1 from "./Component/Graph/Graph1/Chart1";
// import Graph1 from "./Component/Graph/Graph1";
import Graph1 from "./Component/Graph/Graph1";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
