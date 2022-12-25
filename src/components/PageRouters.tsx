import { BrowserRouter, Routes, Route, Navigate   } from "react-router-dom";

import Community from "../pages/Community";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import NoPage from "../pages/NoPage";
import NoPageNoAuth from "../pages/NoPageNoAuth";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";

import { useAuth } from "../context";

function PageRouters() {
  const { user } = useAuth() as any

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={user ? <Community /> : (<Navigate to="/login"/>)} />
                <Route path="community" element={user ? <Community /> : (<Navigate to="/login"/>)} />
                <Route path="messages" element={user ? <Messages /> : (<Navigate to="/login"/>)} />
                <Route path="profile" element={user ? <Profile /> : (<Navigate to="/login"/>)} />
            </Route>
            
            <Route path="login" element={user ? (<Navigate to="/community"/>) : <Login />} />
            <Route path="signup" element={user ? (<Navigate to="/community"/>) : <Signup />} />
            
            <Route path="*" element={user ? (<NoPage />) : <NoPageNoAuth />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default PageRouters;
