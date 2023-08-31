"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactForm } from "@/zodSchema/contactForm";

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactForm),
  });

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://strapi.gabrielmanfroi.dev/api/proserv-contact-forms",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}`,
        },
        body: JSON.stringify({ data }),
      },
    );
    console.log(response);
  };

  return (
    <form
      className="flex flex-col gap-4"
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative rounded-md shadow-sm">
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          className="block w-full rounded-md border-0 py-1.5 px-1.5  pr-20 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
          placeholder="Nome Completo"
        />
        {errors?.name && (
          <p className="text-red-600 text-sm mt-2">
            Por favor digite como podemos te ajudar
          </p>
        )}
      </div>
      <div className="relative rounded-md shadow-sm">
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          className="block w-full rounded-md border-0 py-1.5 px-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Endereço de Email"
        />
        {errors?.email && (
          <p className="text-red-600 text-sm mt-2">E-mail inválido</p>
        )}
      </div>
      <div className="relative rounded-md shadow-sm">
        <input
          {...register("subject", { required: true })}
          type="text"
          name="subject"
          className="block w-full rounded-md border-0 py-1.5 px-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Como podemos te ajudar?"
        />
        {errors?.subject && (
          <p className="text-red-600 text-sm mt-2">
            Por favor digite como podemos te ajudar
          </p>
        )}
      </div>
      <div className="relative rounded-md shadow-sm">
        <textarea
          {...register("message", { required: true })}
          rows="6"
          name="message"
          className="block w-full resize-none rounded-md border-0 py-1.5 px-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Digite sua mensagem"
        />
        {errors?.message && (
          <p className="text-red-600 text-sm mt-2">
            Digite uma breve mensagem de como podemos te ajudar
          </p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black hover:text-white bg-amber-400 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enviar
      </button>
    </form>
  );
};
