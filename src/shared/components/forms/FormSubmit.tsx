import { InputHTMLAttributes } from "react"

type FormSubmittProps = InputHTMLAttributes<HTMLInputElement>

export default function FormSubmit(props: FormSubmittProps) {
  return (
    <input
      {...props}
      type="submit"
      className="bg-pink-600 text-white font-bold p-2 w-full uppercase cursor-pointer mt-3 rounded-lg hover:bg-pink-700/80"  
    />
  )
}
