import { TextareaHTMLAttributes } from "react"

type FormTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export default function FormLabel(props: FormTextAreaProps) {
  return (
    <textarea {...props} className="block text-slate-600 font-medium" />
  )
}
