"use client";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineFacebook,
  MdOutlineWhatsapp,
  MdPhone,
} from "react-icons/md";
import { ContactItem } from "@/components/Home/Sections/Contact/Contact.item";
import { ContactForm } from "@/components/Home/Sections/Contact/Contact.form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactItemDescription } from "@/components/Home/Sections/Contact/Contact.item.description";

const CompanyInfo = () => {
  const router = useRouter();

  return (
    <div className="flex-col flex gap-4 pl-24">
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
      <div className="flex mt-2">
        <Link href={"https://www.facebook.com/proservpb"} target={"_blank"}>
          <ContactItem.Root>
            <ContactItem.Icon icon={MdOutlineFacebook} color={"white"} />
          </ContactItem.Root>
        </Link>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <section className="w-full bg-black flex justify-center ">
      <div className="h-full w-full p-36 flex flex-col gap-24">
        <div>
          <h2 className="text-center font-bold text-4xl uppercase mb-2">
            Contato
          </h2>
          <h3 className="text-center">Entre em contato conosco agora mesmo!</h3>
        </div>
        <div className="grid-cols-2 inline-grid gap-8 justify-center px-80">
          <CompanyInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
