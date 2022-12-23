import Container from "../components/Container";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
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
