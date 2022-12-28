import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";

const NoPageNoAuth = () => {
  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>
      <div className="main">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl">404</span>

            <p>Sayfa bulunamadı! (Oturum açmadınız)</p>

          </div>
        </Container>
      </div>
    </>
  );
};

export default NoPageNoAuth;
