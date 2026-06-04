import { Metadata } from "next"
import Hero from "@/components/ui/Hero"
import { generatePageTitle } from "@/utils/metadata"
import { auth } from "@/src/lib/auth"
import { headers } from "next/headers"

export const metadata : Metadata = {
  title: generatePageTitle("Inicio")
}

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <>
      <Hero />
    </>
  )
}
