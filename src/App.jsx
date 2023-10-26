import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import Recovery from "./pages/Recovery";

function App() {
  return (
    <Routes>
      {/* --- PUBLIC ROUTES --- */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recovery" element={<Recovery />} />

      {/* --- PRIVATE ROUTES */}
      <Route element={<RequireAuth />}>
        <Route
          path="/dash/*"
          element={
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
