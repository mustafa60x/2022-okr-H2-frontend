import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";

const Messages = () => {
  return (
    <>
      <Helmet>
          <title>Messages</title>
      </Helmet>

      <PageTitle title="Messages" bgColor="#e0e0e0"></PageTitle>
    </>
  );
};

export default Messages;
