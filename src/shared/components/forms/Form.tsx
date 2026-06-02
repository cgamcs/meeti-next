import clsx from "clsx"
import { FormHTMLAttributes } from "react"

type FormProps = FormHTMLAttributes<HTMLFormElement>

export default function Form(props: FormProps) {
  return (
    <form
      {...props}
      className={clsx("mt-10 space-y-3", props.className)}
    >
      {props.children}
    </form>
  )
}
