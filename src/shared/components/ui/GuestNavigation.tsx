import Link from "next/link";

export default function GuestNavigation() {
  return (
    <nav className="flex justify-center items-center gap-2 mt-5 md:mt-0">
      <Link className="font-bold text-sm p-2 rounded hover:bg-gray-300/80 transition-colors 3s" href="/auth/login">
        Iniciar Sesión
      </Link>
      <Link
        className=" font-bold text-sm bg-pink-600 p-2 text-white rounded hover:bg-pink-700/80 transition-colors 3s"
        href="/auth/create-account"
      >
        Registrarse
      </Link>
    </nav>
  );
}
