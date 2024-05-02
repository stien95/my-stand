import Link from "next/link";
import FormStart from "./FormStart";

export default function StartPage() {

  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl text-slate-800">Establece tu negocio gratis</h2>
      <FormStart/>
      <Link href="/login" className="text-sky-500 text-sm hover:underline">Ya tengo un negocio</Link>
      <Link href="/register" className="text-sky-500 text-sm hover:underline">Solo crear una cuenta</Link>
    </main>
  )
}
