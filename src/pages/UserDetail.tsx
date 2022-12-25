import { useParams } from "react-router-dom"

const UserDetail = () => {
  const { user_id } = useParams()
  console.log(user_id)

  return (
    <div>
      <h1>User Detail</h1>
    </div>
  )
};

export default UserDetail;
