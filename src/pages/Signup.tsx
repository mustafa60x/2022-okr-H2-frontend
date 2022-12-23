import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";

const Signup = () => {
  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>
      <div className="main">
        <Container>
          <h1>Signup Page</h1>
        </Container>
      </div>
    </>
  );
};

export default Signup;
