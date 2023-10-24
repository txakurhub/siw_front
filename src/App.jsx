import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      {/* --- PUBLIC ROUTES --- */}
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* --- PRIVATE ROUTES */}
      <Route element={<RequireAuth />}>
        <Route
          path="/dash/*"
          element={
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
