import Yup from "./validation"

export const LoginSchema = Yup.object().shape({
    username: Yup.string().min(3).max(10).required(),
    password: Yup.string().min(3).max(15).required(),
})