import "./App.css";
import Dashbord from "./Components/dashboard/Dashbord.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Profile from "./Components/dashboard/Profile.jsx";
import Settings from "./Components/dashboard/Settings.jsx";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashbord />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
