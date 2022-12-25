import SwitchTheme from "../components/SwitchTheme";
import { useAuth } from "../context";

const Profile = () => {
  const { user, setUser } = useAuth()

  const logout = () => {
    setUser(false)
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
