import { HeaderItem } from "@/components/Header/Header.item";
import { HeaderMenu } from "@/components/Header/Header.menu";

export function Header() {
  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 absolute w-screen flex"
      style={{ zIndex: 2, height: "80px" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-1">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <HeaderMenu />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <HeaderItem href="/" text="Início" />
            <HeaderItem href="/about" text="Quem Somos" />
            <HeaderItem href="/contact" text="Serviços" />
            <HeaderItem href="/blog" text="Contato" />
            <HeaderItem href="/suporte" text="Suporte" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
