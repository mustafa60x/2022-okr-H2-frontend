import { BrowserRouter, Routes, Route, Navigate   } from "react-router-dom";

import Community from "../pages/Community";
import Layout from "../pages/Layout";
import Messages from "../pages/Messages";
import NoPage from "../pages/NoPage";
import NoPageNoAuth from "../pages/NoPageNoAuth";
import Profile from "../pages/Profile";
import ProfileDetail from "../pages/ProfileDetail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import { useAuth } from "../context";

function PageRouters() {
  const { isAuth } = useAuth() as any

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={isAuth ? <Community /> : (<Navigate to="/login"/>)} />
                <Route path="community" element={isAuth ? <Community /> : (<Navigate to="/login"/>)} />
                <Route path="messages" element={isAuth ? <Messages /> : (<Navigate to="/login"/>)} />
                <Route path="profile" element={isAuth ? <Profile /> : (<Navigate to="/login"/>)} />
                <Route path="profile/:id" element={isAuth ? <ProfileDetail /> : (<Navigate to="/login"/>)} />
            </Route>
            
            <Route path="login" element={isAuth ? (<Navigate to="/community"/>) : <Login />} />
            <Route path="signup" element={isAuth ? (<Navigate to="/community"/>) : <Signup />} />
            
            <Route path="*" element={isAuth ? (<NoPage />) : <NoPageNoAuth />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default PageRouters;
