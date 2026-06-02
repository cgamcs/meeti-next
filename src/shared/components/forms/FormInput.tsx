import clsx from "clsx"
import { InputHTMLAttributes } from "react"

type FormInputProps = InputHTMLAttributes<HTMLInputElement>

export default function FormInput(props: FormInputProps) {
  return (
    <input
        {...props}
        className={clsx("border border-slate-300 rounded-lg w-full p-2 shadow focus:outline-pink-600", props.className)}
      />
  )
}
