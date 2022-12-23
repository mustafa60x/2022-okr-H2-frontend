import Container from "../components/Container";
import Navbar from "../components/Navbar";

const NoPage = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="main">
        <Container>
          <div>
            <span className="text-6xl">404</span>

            <p>Page not found!</p>

          </div>
        </Container>
      </div>
    </>
  );
};

export default NoPage;
