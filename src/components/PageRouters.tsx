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
import AuthLayout from "../pages/AuthLayout";
import { isEmpty } from "../utils/İndex";

function PageRouters() {
  const accessToken = !isEmpty(localStorage.getItem('accessToken')) ? JSON.parse(localStorage.getItem('accessToken')) : false

  const { isAuth, user } = useAuth() as any

  const isLoggedIn = !isEmpty(isAuth) && !isEmpty(user) && !isEmpty(accessToken)

  if (!isLoggedIn) {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isAuth");
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={isLoggedIn ? <Community /> : (<Navigate to="/auth/login"/>)} />
                <Route path="community" element={isLoggedIn ? <Community /> : (<Navigate to="/auth/login"/>)} />
                <Route path="messages" element={isLoggedIn ? <Messages /> : (<Navigate to="/auth/login"/>)} />
                <Route path="profile" element={isLoggedIn ? <Profile /> : (<Navigate to="/auth/login"/>)} />
                <Route path="profile/:id" element={isLoggedIn ? <ProfileDetail /> : (<Navigate to="/auth/login"/>)} />
            </Route>
            
            <Route path="/auth" element={isLoggedIn ? (<Navigate to="/community"/>) : <AuthLayout />}>
              <Route index element={isLoggedIn ? (<Navigate to="/community"/>) : <Login />} />
              <Route path="login" element={isLoggedIn ? (<Navigate to="/community"/>) : <Login />} />
              <Route path="signup" element={isLoggedIn ? (<Navigate to="/community"/>) : <Signup />} />
            </Route>
            
            <Route path="*" element={isLoggedIn ? (<NoPage />) : <NoPageNoAuth />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default PageRouters;
