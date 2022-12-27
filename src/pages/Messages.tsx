import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";

const Messages = () => {
  return (
    <>
      <Helmet>
          <title>Messages</title>
      </Helmet>

      <PageTitle title="Messages" bgColor="#b5dc5f" color="#191500"></PageTitle>
    </>
  );
};

export default Messages;
