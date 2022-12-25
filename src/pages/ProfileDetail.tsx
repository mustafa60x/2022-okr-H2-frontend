import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UserService } from "../services";

const ProfileDetail = () => {
  const { id } = useParams()
  console.log(id)

  const [user, setUser] = useState() as any;

  useEffect(() => {
    UserService.getUserDetail(id).then((data: any) => setUser(data))
  }, [])

  return (
    <div>
      <h1>Profile Detail</h1>


      <div className="bg-gray-300 my-4 p-3 flex flex-col items-start">
        <p><b>USER_ID:</b> {user?._id}</p>
        <p><b>username:</b> {user?.username}</p>
      </div>
    </div>
  )
};

export default ProfileDetail;
