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
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl">404</span>

            <p>Sayfa bulunamadı!</p>

          </div>
        </Container>
      </div>
    </>
  );
};

export default NoPage;
