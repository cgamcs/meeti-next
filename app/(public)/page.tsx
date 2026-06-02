import { Metadata } from "next"
import Hero from "@/components/ui/Hero"

export const metadata : Metadata = {
  title: "Meeti - Inicio"
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
