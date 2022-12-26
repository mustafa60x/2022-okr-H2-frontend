import { useField } from "formik"

export default function Textarea({ label, ...props }: any) {
    const [field, meta, helpers] = useField(props)
    return (
        <label className="block w-full">
            <div className="text-sm text-gray-600 block mb-1.5">{label}</div>
            <textarea className="w-full border-b resize-none outline-none focus:border-black" {...field} {...props} />
        </label>
    )
}