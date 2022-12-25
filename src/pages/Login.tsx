import { useState } from "react";
import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";
import { useAuth } from "../context";

import {AuthService} from "../services";

const Login = () => {
  const { user, dispatch } = useAuth() as any

  const [name, setName] = useState("mustafa");


  const login = async () => {

    const response = await AuthService.login({ username: 'ali', password: '123'}) as any
    /* const newUser = {
      name: 'Mustafa',
      id: 1
    } */

    dispatch({
      type: 'LOGIN',
      payload: response.accessToken
    })
  }

  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>

      <div className="main">
        <Container>
          <h1>Login Page</h1>

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            {name}
            <br />
          </div>

          <div className="mt-6">
            <button className="p-3 bg-slate-600 text-white" onClick={login}>Giriş Yap</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
