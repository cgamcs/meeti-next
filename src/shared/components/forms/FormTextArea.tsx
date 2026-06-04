import { TextareaHTMLAttributes } from "react"

type FormTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export default function FormLabel(props: FormTextAreaProps) {
  return (
    <textarea
      {...props}
      className="border border-slate-300 rounded-lg w-full p-2 shadow focus:outline-pink-600"
      rows={5}
    />
  )
}
