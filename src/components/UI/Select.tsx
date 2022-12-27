import { ErrorMessage, useField } from "formik"

export default function Select({ label, options, original = false, ...props }: any) {
    const [field, meta, helpers] = useField(props)

    const changeHandle = e => {
        let selected = options.find(option => option.key === +e.target.value)
        helpers.setValue(original ? selected : e.target.value)
    }

    return (
        <label className="block w-full">
            <div className="text-sm text-gray-600">{label}</div>
            <select className="w-full h-10 border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props}>
                <option value="">Seçin</option>
                {options.map((option: any, key: any) => (
                    <option value={option.key} key={key}>{option.value}</option>
                ))}
            </select>
            <ErrorMessage name={field.name} component="small" className="text-xs mt-2 text-red-600"></ErrorMessage>
        </label>
    )
}