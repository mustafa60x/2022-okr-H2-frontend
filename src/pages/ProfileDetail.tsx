import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UserService } from "../services";

import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";

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


      <div className="bg-gray-300 my-4 p-3 flex flex-col items-start">
        <p><b>USER_ID:</b> {user?._id}</p>
        <p><b>username:</b> {user?.username}</p>
      </div>
    </div>
  )
};

export default ProfileDetail;
