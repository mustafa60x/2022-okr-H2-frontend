import SwitchTheme from "../components/SwitchTheme";
import { useAuth } from "../context";

const Profile = () => {
  const { user, dispatch } = useAuth() as any

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <div>
      <h1>Profile</h1>

      <SwitchTheme></SwitchTheme>

      <div className="mt-6">
        {user ? <button className="p-3 bg-slate-600 text-white" onClick={logout}>Çıkış Yap</button> : null}
      </div>
    </div>
  )
};

export default Profile;
