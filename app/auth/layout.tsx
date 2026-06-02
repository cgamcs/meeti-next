import Link from "next/link"
import Logo from "@/components/ui/Logo"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="block md:grid grid-cols-2 h-screen items-center">
        <div className="hidden md:flex justify-center">
          <Link href="/" className="w-48">
            <Logo />
          </Link>
        </div>
        <main className="w-full h-full flex flex-col justify-center items-center bg-pink-600">
          <div className="bg-white rounded-xl shadow-xl m-16 py-10 px-5 min-w-md max-w-xl">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
