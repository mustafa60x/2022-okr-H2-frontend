import { AuthService } from "../services";
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";

import Input from "../components/UI/Input";
import PageTitle from "../components/PageTitle";
import Checkbox from "../components/UI/Checkbox";
import Textarea from "../components/UI/Textarea";
import Select from "../components/UI/Select";
import Radio from "../components/UI/Radio";
import classNames from "classnames";

import { SignupSchema } from "../validations";

import useSiteStore from "../store/site"
import { v4 as uuidv4 } from 'uuid';


const Signup = () => {
  const { successes, addSuccess } = useSiteStore(state => state)
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
        <Formik
          initialValues={{
            username: "",
            password: "",
            about: "",
            gender: 1,
            // tags: ["html", "css"],
            avatar: "",
            accept: false,
            level: "sr",
          }}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            async function sendAsyncRequest() {
              try {
                // Giriş butonunun pasifliğini açar
                // NOTE: isSubmitting async fonksiyonlarda sıkıntı yapabiliyor.
                const response = (await AuthService.signup({ ...values })) as any;
                setSubmitting(false)
                resetForm()
                addSuccess({id: uuidv4(), message: "Kayıt işlemi başarılı"})
              } catch (error) {
                setSubmitting(false)
              }
            }
            sendAsyncRequest();
            

            /* dispatch({
            type: 'LOGIN',
            payload: response
          }) */
          }}
          validationSchema={SignupSchema}
        >
          {({ values, isSubmitting }) => (
            <Form className="p-6 m-4 shadow-lg grid gap-y-4 border rounded">
              <Input name="username" label="Kullanıcı adı"></Input>
              <Input name="password" label="Parola" type="password"></Input>

              <Select
                label="Cinsiyet"
                name="gender"
                options={[
                  { key: 1, value: "Kadın" },
                  { key: 2, value: "Erkek" },
                ]}
              ></Select>

              <Radio
                label="Seviyenizi Seçin"
                name="level"
                options={[
                  { key: "jr", value: "Jr. Developer" },
                  { key: "sr", value: "Sr. Developer" },
                  { key: "ninja", value: "Ninja" },
                ]}
              ></Radio>

              {/* <div>
                <div className="text-sm text-gray-600 block mb-1.5">Kategori Seçin</div>
                <Field component="select" name="tags" multiple={true}>
                  <option value="html">Kitap</option>
                  <option value="css">Müzik</option>
                  <option value="java">Spor</option>
                  <option value="react">Resim</option>
                </Field>
              </div> */}

              <Textarea label="Hakkımda" rows={3} name="about"></Textarea>

              {/* <Field type="file" name="avatar"></Field> */}

              <Checkbox
                label="Kuralları kabul ediyorum!"
                name="accept"
              ></Checkbox>

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
                Kayıt Ol
              </button>

              {/* <button
                  disabled={!values.accept}
                  className={classNames({
                    "p-3 text-white": true,
                    "bg-slate-600": values.accept,
                    "bg-slate-300": !values.accept,
                  })}
                  type="submit"
                >
                  Kayıt Ol
                </button> */}
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
