  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
