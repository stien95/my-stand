import Link from "next/link";

export default function Home() {
  return (
      <main className="h-full flex-grow from-black to-slate-900 bg-gradient-to-t flex flex-col items-center justify-center gap-10">
        <section className="flex w-full justify-around text-white">
        <h2 className="font-bold text-6xl">My Stand</h2>
        <h3 className="text-white text-4xl animate-fade-up">
          Tu negocio universitario 
          <br />
          <span className="animate-fade-up animate-delay-1000">en un solo lugar</span>
          </h3>
        </section>
        
        <Link href={"/start"} className="text-white p-2 bg-emerald-500">Comenzar</Link>
      </main>
  );
}
