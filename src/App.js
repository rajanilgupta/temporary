import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import Login from "./Login";
import TeamDashboard from "./Teams/TeamDashboard";
import "./App.css";
import HackathonRegistration from "./Teams/HackathonRegistration";
import TeamMembers from "./Teams/TeamMembers";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/login" element={<Login />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
          <Route path="/register" element={<HackathonRegistration />} />
          <Route path="/teamHome" element={<TeamDashboard />} />
          <Route path="/adminHome" element={<AdminDashboard />} />
          <Route path="/login/teamHome" element={<TeamDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
