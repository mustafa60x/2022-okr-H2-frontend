import SwitchTheme from "../components/SwitchTheme";
import { useAuth } from "../context";

import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";
import { UserService } from "../services";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

import man from "../assets/man.png"
import woman from "../assets/woman.png"

const Profile = () => {
  const { isAuth, user, dispatch } = useAuth() as any;

  const [userInfo, setUserInfo] = useState() as any;

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    UserService.getUserDetail(user._id).then((data: any) => setUserInfo(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <PageTitle title="Profile" bgColor="#89b3f6" color="#191500"></PageTitle>

      <SwitchTheme></SwitchTheme>


      { userInfo && 
      <div className="border-[#584b85] border p-2 h-20 my-2 flex justify-between items-center rounded-lg">
        <div className="flex justify-start items-center">
          <img
            src={userInfo?.gender === 1 ? woman : man}
            className="h-10 w-10"
            alt="profile"
          />
          <span className="ml-2 mr-3">{userInfo.username}</span>
          <span className="ml-1 mr-5">
            {userInfo.gender === 1 ? (
              <AiOutlineWoman className="text-pink-500 h-5 w-5"></AiOutlineWoman>
            ) : (
              <AiOutlineMan className="text-blue-500 h-5 w-5"></AiOutlineMan>
            )}
          </span>
          <span>
            {userInfo.tags &&
              userInfo.tags.map((tag: any, index: any) => (
                <span
                  className="bg-blue-600 text-white px-2 mr-1 rounded-lg"
                  key={tag._id}
                >
                  {tag.name}
                </span>
              ))}
          </span>
        </div>
        <div className="text-gray-500 p-2 italic">{userInfo.about}</div>
      </div>}

      <div className="mt-6">
        {isAuth ? (
          <button className="bg-slate-600 h-10 p-2 text-white rounded" onClick={logout}>
            Çıkış Yap
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
