"use client"

import Input, { inputClasses, Textarea } from "@/components/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function FormStart() {
  const [finalizing, setFinalizing] = useState(false);
  const [dataBusiness, setData] = useState({
    businessName: "",
    tags: "",
    universityId: "",
    description: "",
  });
  const onSubmit: SubmitHandler<FieldValues> = () => {
    if (!finalizing) {

      setFinalizing(true);
    }
  }
  return (
    <form 
      onSubmit={onSubmit}
      className="flex flex-col gap-2 items-center w-96 max-w-[95vw]">
        <Input type="text" placeholder="Nombre del negocio" />
        <input type="text" placeholder="Centro educativo" className={`${inputClasses}`}/>
        <input type="text" placeholder="¿Qué vendes?"  className={`${inputClasses}`}/>
        <Textarea placeholder="Descripción (opcional)" className="w-96" />
        <button className="bg-green-400 text-white font-bold px-4 py-2 rounded-md">Continuar</button>
      </form>
  )
}
