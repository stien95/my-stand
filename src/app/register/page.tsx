"use client"
import Input, { inputClasses, InputError } from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaApple, FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registerSchema";
import { z } from "zod";
import Link from "next/link";
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = () => {

  }
  return (
    <main className="flex flex-col justify-center items-center">
      <h2 className="text-slate-800 font-bold text-2xl">
        Crea una cuenta en My Stand
      </h2>
      <form className="flex flex-col gap-2 w-96 py-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Nombres y apellidos"
          {...register("realName")}
          errors={errors.realName?.message}
          minLength={3}
          maxLength={120}
          required
        />
        <div className="flex flex-col">
        <label className="relative flex items-center group">
          <span className="absolute text-slate-400 font-medium ml-2 mb-0.5  opacity-0 group-focus-within:opacity-100 transition pointer-events-none">
            @
          </span>
          <input
            type="text"
            placeholder="Usuario"
            className={`${inputClasses} group-focus-within:pl-6 transition-all`}
            {...register("username")}
            minLength={3}
            maxLength={30}
            required
          />
        </label>
        <InputError errors={errors.username?.message} />
        </div>
        
        <Input
          type="email"
          placeholder="Correo electrónico"
          {...register("email")}
          errors={errors.email?.message}
          minLength={5}
          maxLength={120}
          required
        />
        <Input
          type="password"
          placeholder="Contraseña"
          className="placeholder-shown:font-medium font-black"
          {...register("password")}
          errors={errors.password?.message}
          minLength={7}
          maxLength={45}
          required
        />
        <button className="bg-green-400 hover:bg-green-500  text-white py-2 font-bold text-lg">
          Finalizar
        </button>
      </form>
      <Link href="/login" className="text-sm text-sky-500 hover:underline">Ya tengo una cuenta</Link>
      <Link href="/start" className="text-sm text-sky-500 hover:underline">Crear un negocio adicionalmente</Link>
      <div className="relative w-96 flex items-center justify-center my-2">
        <span className="border border-slate-300 w-full h-px" />
        <span className="absolute bg-white px-1 text-slate-400">o</span>
      </div>

      <div className="flex text-slate-400 gap-2 py-2 text-2xl">
        <button className="p-2 border border-slate-300 rounded-md hover:bg-black/5 transition-colors">
          <FaApple />
        </button>
        <button className="p-2 border border-slate-300 rounded-md hover:bg-black/5 transition-colors">
          <FaGoogle />
        </button>
      </div>
    </main>
  );
}
