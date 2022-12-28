import Yup from "./validation"

export const SignupSchema = Yup.object().shape({
    username: Yup.string().min(3).max(10).required(),
    password: Yup.string().min(3).max(15).required(),
    accept: Yup.boolean().oneOf([true]),
    gender: Yup.string().required(),
    level: Yup.string().required("Bir seviye belirleyin")
})