import IndexComponent from "./components/home/IndexComponent";
import LoginExpandedStep1 from "./components/login/LoginExpandedStep1";
import LoginExpandedStep2 from "./components/login/LoginExpandedStep2";
import LoginExpandedStep3 from "./components/login/LoginExpandedStep3";
import LoginExpandedStep4 from "./components/login/LoginExpandedStep4";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import MainDashboard from "./components/MainDashboard/MainDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexComponent />} />
        <Route path="/loginstep1" element={<LoginExpandedStep1 />} />
        <Route path="/loginstep2" element={<LoginExpandedStep2 />} />
        <Route path="/loginstep3" element={<LoginExpandedStep3 />} />
        <Route path="/loginstep4" element={<LoginExpandedStep4 />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/analytics" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
