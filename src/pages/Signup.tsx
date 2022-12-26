import { useAuth } from "../context";

import {AuthService} from "../services";

import { Helmet } from "react-helmet"

import { useFormik, Formik, Form, Field } from "formik";

import Input from "../components/UI/Input";
import PageTitle from "../components/PageTitle";
import Checkbox from "../components/UI/Checkbox";
import Textarea from "../components/UI/Textarea";
import Select from "../components/UI/Select";
import Radio from "../components/UI/Radio";
import classNames from "classnames";

const Signup = () => {
  const { user, dispatch } = useAuth() as any

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
          <title>Kayıt</title>
      </Helmet>

      <PageTitle title="Kayıt" bgColor="#ccccff"></PageTitle>

      <div>
        <Formik initialValues={{
          username: '',
          password: '',
          gender: 1,
          tags: ['html', 'css'],
          avatar: '',
          accept: false,
          level: 'sr'
        }} onSubmit={async (values) => {
          console.log(values)
          const response = await AuthService.signup({ ...values }) as any

          alert('Kayıt başarılı!')

          /* dispatch({
            type: 'LOGIN',
            payload: response
          }) */
        }}>
          {({ values }) => (
            <Form className="p-6 m-4 shadow-lg grid gap-y-4 border rounded">
              <Input name="username" label="Username"></Input> <br />
              <Input name="password" label="Password" type="password"></Input> <br />

              <Select label="Cinsiyet" name="gender" options={[
                { key: 1, value: 'Kadın' },
                { key: 2, value: 'Erkek' }
              ]}>
                <option value={1}>Erkek</option>
                <option value={2}>Kadın</option>
              </Select> <br />

              <Radio label="Seviyenizi Seçin" name="level" options={[
                { key: 'jr', value: 'Jr. Developer' },
                { key: 'sr', value: 'Sr. Developer' },
                { key: 'ninja', value: 'Ninja' },
              ]}></Radio>

              <Field component="select" name="tags" multiple={true}>
                <option value="Seyahat">Seyahat</option>
                <option value="Kitap">Kitap</option>
                <option value="Müzik">Müzik</option>
                <option value="Spor">Spor</option>
                <option value="Resim">Resim</option>
              </Field> <br />

              <Textarea label="Hakkımda" rows={6} name="about"></Textarea>

              {/* <Field type="file" name="avatar"></Field> */}

              <Checkbox label="Kuralları kabul ediyorum!" name="accept"></Checkbox>

              <div className="mt-6">
                <button disabled={!values.accept} className={classNames({
                  "p-3 text-white": true,
                  "bg-slate-600": values.accept,
                  "bg-slate-300": !values.accept,
                })} type="submit">Kayıt Ol</button>
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

export default Signup;
