import Input from "@/components/Input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="text-slate-800 font-bold text-2xl">Iniciar sesión</h2>
      <form className="flex flex-col justify-center items-center gap-2 w-96 max-w-[95vw]">
        <Input type="text" placeholder="Nombre de usuario"/>
        <Input type="password" placeholder="Contraseña" />
        <button className="font-bold text-xl bg-blue-400 w-full rounded-md text-white py-2">Entrar</button>
      </form>
      <Link href="/register" className="text-sm text-sky-500 hover:underline">Crear una cuenta</Link>
      <Link href="/start" className="text-sm text-sky-500 hover:underline">Empezar un negocio</Link>
    </main>
  )
}
