import ServiceContainer from "@/components/ServiceContainer";
import { PiHandbag } from "react-icons/pi";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-blue-700"
      style={{
        background: "url(services-section-background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full p-16 lg:p-36 flex flex-col gap-24">
        <div>
          <h2 className="text-center font-bold text-4xl uppercase mb-2 text-white">
            Serviços
          </h2>
          <h3 className="text-center text-white">
            Confira como podemos te ajudar
          </h3>
        </div>
        <div className="lg:grid-cols-3 lg:inline-grid lg:gap-8 md:px-36  flex flex-col gap-16">
          <ServiceContainer
            icon={PiHandbag}
            description="Computadores de Alta Performance • Notebooks • Servidores • Periféricos • Acessórios para escritório • Linha Gamer"
            title="AS MELHORES MARCAS"
          />
          <ServiceContainer
            icon={AiOutlineBarChart}
            description="Revisão de Performance • Manutenção de Notebooks • Desktops • All in One • Nobreaks e Estabilizadores• Impressoras"
            title="MÃO DE OBRA ESPECIALIZADA"
          />
          <ServiceContainer
            icon={MdMonitor}
            description="Consultoria Técnica • Help Desk • Atendimento Remoto e Presencial • Configuração de Servidores"
            title="SUPORTE EFICIENTE"
          />
        </div>
      </div>
    </section>
  );
}
