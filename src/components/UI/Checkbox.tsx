import { ErrorMessage, useField } from "formik"

import { FiCheck } from "react-icons/fi"

import classNames from "classnames"

export default function Checkbox({ label, ...props }: any) {
    const [field, meta, helpers] = useField(props)
    return (
        <>
            <label className="flex gap-x-2 text-sm cursor-pointer items-center">
                <button type="button" onClick={() => {
                    helpers.setValue(!field.value)
                }} className={classNames({
                    "w-5 h-5 rounded transition-all border flex items-center justify-center": true,
                    "border-gray-300 text-transparent": !field.value,
                    "border-red-600": meta.error && meta.touched,
                    "border-blue-600 bg-blue-600 text-white": field.value && (!meta.error)
                })}>
                    <FiCheck size={16}></FiCheck>
                </button>
                {label}
            </label>
            <ErrorMessage name={field.name} component="small" className="text-xs text-red-600"></ErrorMessage>
        </>
    )
}