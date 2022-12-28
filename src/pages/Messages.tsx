import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";

const Messages = () => {
  return (
    <>
      <Helmet>
          <title>Messages</title>
      </Helmet>

      <PageTitle title="Messages" bgColor="#b5dc5f" color="#584b85"></PageTitle>
    </>
  );
};

export default Messages;
