import { useAuth } from "../context";
import {AuthService} from "../services";
import { Helmet } from "react-helmet"
import { Formik, Form } from "formik";

import Input from "../components/UI/Input";
import PageTitle from "../components/PageTitle";
import { LoginSchema } from "../validations/LoginSchema";
import classNames from "classnames";

import useSiteStore from "../store/site"

const Login = () => {
  const { user, dispatch } = useAuth() as any

  const { counter, increaseCounter } = useSiteStore(state => state)

  /* const { handleSubmit, handleChange, values } = useFormik({
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
  }) */

  return (
    <>
      <Helmet>
          <title>Giriş</title>
      </Helmet>

      <PageTitle title="Giriş" bgColor="#ccccff"></PageTitle>

      <div>
        <Formik initialValues={{
          username: '',
          password: '',
          gender: 1,
          tags: ['html', 'css'],
          avatar: '',
          accept: false,
          level: 'sr'
        }} onSubmit={(values, { setSubmitting, resetForm }) => {
          async function sendAsyncRequest() {
            try {
              // Giriş butonunun pasifliğini açar
              // NOTE: isSubmitting async fonksiyonlarda sıkıntı yapabiliyor.
              const response = await AuthService.login({ username: values.username, password: values.password }) as any

              setSubmitting(false)
              resetForm()

              dispatch({
                type: 'LOGIN',
                payload: response
              })
            } catch (error) {
              setSubmitting(false)
            }
          }
          sendAsyncRequest();
        }} validationSchema={LoginSchema}>
          {({ values, isSubmitting }) => (
            <Form className="p-6 m-4 shadow-lg grid gap-y-4 border rounded">
              <Input name="username" label="Kullanıcı adı"></Input>
              <Input name="password" label="Parola" type="password"></Input>

              <button type="reset">Formu Resetle</button>
              <button
                  className={classNames({
                    "h-10 text-white rounded": true,
                    "bg-slate-600": !isSubmitting,
                    "bg-slate-300": isSubmitting,
                  })}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Giriş Yap
                </button>
              {/* <button disabled={isSubmitting} className="bg-slate-600 h-10 text-white rounded" type="submit">Giriş Yap</button> */}
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
