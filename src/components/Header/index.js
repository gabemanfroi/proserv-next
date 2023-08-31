import { HeaderItem } from "@/components/Header/Header.item";
import { HeaderMenu } from "@/components/Header/Header.menu";

export function Header() {
  return (
    <nav
      className="bg-blue-950 border-gray-200  absolute w-screen flex"
      style={{ zIndex: 2, height: "80px" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-1">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-amber-400">
            Proserv & Solution Informática
          </span>
        </a>
        <HeaderMenu />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
            <HeaderItem href="/" text="Início" />
            <HeaderItem href="#about-us" text="Quem Somos" />
            <HeaderItem href="#services" text="Serviços" />
            <HeaderItem href="#contact" text="Contato" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
