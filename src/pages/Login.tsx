import { useState } from "react";
import { useAuth } from "../context";

import {AuthService} from "../services";

import { Helmet } from "react-helmet"

import { useFormik, Formik, Form, Field } from "formik";

const Login = () => {
  const { user, dispatch } = useAuth() as any

  const [name, setName] = useState("mustafa");

  const login = async () => {
    const response = await AuthService.login({ username: 'ali', password: '123'}) as any

    dispatch({
      type: 'LOGIN',
      payload: response
    })
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values)
      const response = await AuthService.login({ username: values.username, password: values.password }) as any

      dispatch({
        type: 'LOGIN',
        payload: response
      })
    } 
  })

  return (
    <>
      <Helmet>
          <title>Login</title>
      </Helmet>

      <h1>Login Page</h1>

      <div>
        <Formik initialValues={{
          username: '',
          password: '',
          gender: 1,
          tags: ['Seyahat', 'Kitap'],
          avatar: ''
        }} onSubmit={async (values) => {
          console.log(values)
          const response = await AuthService.login({ username: values.username, password: values.password }) as any

          dispatch({
            type: 'LOGIN',
            payload: response
          })
        }}>
          {({ values }) => (
            <Form>
              <Field name="username"></Field> <br />
              <Field name="password" type="password"></Field> <br />
              <Field component="select" name="gender">
                <option value={1}>Erkek</option>
                <option value={2}>Kadın</option>
              </Field> <br />

              <Field component="select" name="tags" multiple={true}>
                <option value="Seyahat">Seyahat</option>
                <option value="Kitap">Kitap</option>
                <option value="Müzik">Müzik</option>
                <option value="Spor">Spor</option>
                <option value="Resim">Resim</option>
              </Field> <br />

              {/* <Field type="file" name="avatar"></Field> */}

              <div className="mt-6">
                <button className="p-3 bg-slate-600 text-white" type="submit">Giriş Yap</button>
              </div>
            </Form>
          )}
        </Formik>

        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="username">Kullanıcı adı</label>
          <input type="text" id="username" value={values.username} onChange={handleChange} /> <br />

          <label htmlFor="password">Parola</label>
          <input type="password" id="password" value={values.password} onChange={handleChange} />

          <div className="mt-6">
            <button className="p-3 bg-slate-600 text-white" type="submit">Giriş Yap</button>
          </div>
        </form> */}
      </div>

      
    </>
  );
};

export default Login;
