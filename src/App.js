// Core
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// Screens
import {
  Home,
  Login,
  NavBar,
  CarInfo,
} from "./screens";

import { AuthProvider } from 'react-auth-kit';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carinfo" element={
            <>
              <NavBar />
              <CarInfo />
            </>
          } />
          <Route
            path="/login"
            element={
              <>
                <NavBar />
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
