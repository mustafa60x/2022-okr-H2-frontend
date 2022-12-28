import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UserService } from "../services";

import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

import man from "../assets/man.png"
import woman from "../assets/woman.png"

const ProfileDetail = () => {
  const { id } = useParams()

  const [user, setUser] = useState() as any;

  useEffect(() => {
    UserService.getUserDetail(id).then((data: any) => setUser(data))
  }, [])

  return (
    <div>
      <Helmet>
          <title>{user?._id}</title>
      </Helmet>
      <PageTitle title="Profile Detail" bgColor="#e0e0e0"></PageTitle>


      { user && 
      <div className="border-[#584b85] border p-2 h-20 my-2 flex justify-between items-center rounded-lg">
        <div className="flex justify-start items-center">
          <img
            src={user?.gender === 1 ? woman : man}
            className="h-10 w-10"
            alt="profile"
          />
          <span className="ml-2 mr-3">{user.username}</span>
          <span className="ml-1 mr-5">
            {user.gender === 1 ? (
              <AiOutlineWoman className="text-pink-500 h-5 w-5"></AiOutlineWoman>
            ) : (
              <AiOutlineMan className="text-blue-500 h-5 w-5"></AiOutlineMan>
            )}
          </span>
          <span>
            {user.tags &&
              user.tags.map((tag: any, index: any) => (
                <span
                  className="bg-blue-600 text-white px-2 mr-1 rounded-lg"
                  key={tag._id}
                >
                  {tag.name}
                </span>
              ))}
          </span>
        </div>
        <div className="text-gray-500 p-2 italic">{user.about}</div>
      </div>}
    </div>
  )
};

export default ProfileDetail;
