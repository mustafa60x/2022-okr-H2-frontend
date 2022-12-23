import { BrowserRouter, Routes, Route, Navigate   } from "react-router-dom";

import Layout from "./pages/Layout";
import Community from "./pages/Community";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPageNoAuth from "./pages/NoPageNoAuth";

function App() {
  const isAuth = true

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={isAuth ? <Community /> : (<Navigate to="/login"/>)} />
            <Route path="community" element={isAuth ? <Community /> : (<Navigate to="/login"/>)} />
            <Route path="messages" element={isAuth ? <Messages /> : (<Navigate to="/login"/>)} />
            <Route path="profile" element={isAuth ? <Profile /> : (<Navigate to="/login"/>)} />
          </Route>
          
          <Route path="login" element={isAuth ? (<Navigate to="/"/>) : <Login />} />
          <Route path="signup" element={isAuth ? (<Navigate to="/"/>) : <Signup />} />
          
          <Route path="*" element={isAuth ? (<NoPage />) : <NoPageNoAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
