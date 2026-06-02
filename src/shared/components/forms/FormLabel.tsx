import { LabelHTMLAttributes } from "react"

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>

export default function FormLabel(props: FormLabelProps) {
  return (
    <label {...props} className="block text-slate-600 font-medium">
      {props.children}
    </label>
  )
}
