import React from "react";
import IndexComponent from "./components/home/IndexComponent";
import LoginExpandContent from "./components/login/LoginExpandContent";
import LoginExpandedStep1 from "./components/login/LoginExpandedStep1";
import LoginExpandedStep2 from "./components/login/LoginExpandedStep2";
import LoginExpandedStep3 from "./components/login/LoginExpandedStep3";
import LoginExpandedStep4 from "./components/login/LoginExpandedStep4";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import MainDashboard from "./components/analytics/MainDashboard";
import Privacy from "./components/home/Privacy";
import {RequireAuth} from "react-auth-kit";
import Settings from "./components/Settings/Settings";
import Leads from "./components/leads/Leads";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexComponent />} />
        <Route path="/login" element={<LoginExpandContent />}/>
        <Route path="/loginstep1" element={<LoginExpandedStep1 />} />
        <Route path="/loginstep2" element={<LoginExpandedStep2 />} />
        <Route path="/loginstep3" element={<LoginExpandedStep3 />} />
        <Route path="/loginstep4" element={<LoginExpandedStep4 />} />
        <Route path="/analytics" element={<RequireAuth loginPath="/login"><MainDashboard /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth loginPath="/login"><Dashboard /></RequireAuth>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/settings" element={<RequireAuth loginPath={"/login"}><Settings /></RequireAuth>} />
        <Route path="/leads" element={<RequireAuth loginPath={"/login"}><Leads/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
