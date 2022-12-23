import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";

const Login = () => {
  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>
      <div className="main">
        <Container>
          <h1>Login Page</h1>
        </Container>
      </div>
    </>
  );
};

export default Login;
