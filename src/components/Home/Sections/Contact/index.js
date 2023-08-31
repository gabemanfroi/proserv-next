"use client";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineWhatsapp,
  MdPhone,
} from "react-icons/md";
import { ContactItem } from "@/components/Home/Sections/Contact/Contact.item";
import { ContactForm } from "@/components/Home/Sections/Contact/Contact.form";
import { useRouter } from "next/navigation";
import { ContactItemDescription } from "@/components/Home/Sections/Contact/Contact.item.description";

const CompanyInfo = () => {
  const router = useRouter();

  return (
    <div className="flex-col flex gap-4 lg:pl-24 content-center">
      <ContactItem.Root>
        <ContactItem.Icon icon={MdLocationOn} />
        <ContactItemDescription>
          <p>Rua Itabira 1522</p>
          <p>Pato Branco, Paraná</p>
        </ContactItemDescription>
      </ContactItem.Root>
      <ContactItem.Root>
        <ContactItem.Icon icon={MdEmail} />
        <ContactItem.Description>
          <p>proservinfo@gmail.com</p>
        </ContactItem.Description>
      </ContactItem.Root>
      <ContactItem.Root>
        <ContactItem.Icon icon={MdPhone} />
        <ContactItemDescription>
          <p>+55 (46) 3225-3314</p>
        </ContactItemDescription>
      </ContactItem.Root>
      <ContactItem.Root>
        <ContactItem.Icon icon={MdOutlineWhatsapp} />
        <ContactItem.Description>
          <p>+55 (46) 3225-3314</p>
        </ContactItem.Description>
      </ContactItem.Root>
    </div>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="w-full bg-blue-950 flex justify-center">
      <div className="h-full w-full lg:p-36 p-8 flex flex-col gap-24">
        <div>
          <h2 className="text-center font-bold text-4xl uppercase mb-2 text-white">
            Contato
          </h2>
          <h3 className="text-center text-white">
            Entre em contato conosco agora mesmo!
          </h3>
        </div>
        <div className="lg:grid-cols-2 lg:inline-grid flex flex-col md:px-56 gap-8 justify-center lg:px-80">
          <CompanyInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
