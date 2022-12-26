import SwitchTheme from "../components/SwitchTheme";
import { useAuth } from "../context";

import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";
import { UserService } from "../services";

const Profile = () => {
  const { isAuth, user, dispatch } = useAuth() as any

  const [userInfo, setUserInfo] = useState() as any;

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }

  useEffect(() => {
    UserService.getUserDetail(user._id).then((data: any) => setUserInfo(data))
  }, [])

  return (
    <div>
      <Helmet>
          <title>Profile</title>
      </Helmet>

      <PageTitle title="Profile" bgColor="#e0e0e0"></PageTitle>

      <SwitchTheme></SwitchTheme>

      <div className="my-4 p-3 bg-slate-500">
        {JSON.stringify(userInfo)}
      </div>

      <div className="mt-6">
        {isAuth ? <button className="p-3 bg-slate-600 text-white" onClick={logout}>Çıkış Yap</button> : null}
      </div>
    </div>
  )
};

export default Profile;
