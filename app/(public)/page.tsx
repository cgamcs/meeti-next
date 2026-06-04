import { Metadata } from "next"
import Hero from "@/components/ui/Hero"
import { generatePageTitle } from "@/utils/metadata"

export const metadata : Metadata = {
  title: generatePageTitle("Inicio")
}

export default async function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
