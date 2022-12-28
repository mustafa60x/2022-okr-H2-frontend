import * as Yup from "yup"

Yup.setLocale({
    mixed: {
        required: 'Bu alan doldurulması zorunlu alandır!',
        oneOf: 'Bu alanı işaretlemek zorundasınız!'
    },
    string: {
        min: 'Bu alan min ${min} karakter olmalıdır',
        max: 'Bu alan max ${max} karakter olmalıdır',
    }
})

export default Yup