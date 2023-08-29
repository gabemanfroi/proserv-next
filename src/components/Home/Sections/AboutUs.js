export default function AboutUs() {
  return (
    <section
      className="h-screen max-h-[50vh] w-full"
      style={{ background: "url(hive-texture.png)" }}
    >
      <div className="h-full w-full p-24 grid-cols-2 inline-grid">
        <div className="flex flex-col gap-4">
          <h2>Quem Somos</h2>
          <p className="font-normal" style={{ lineHeight: "1.5" }}>
            A Proserv & Solution Informática é uma empresa situada em Pato
            Branco com foco em Tecnologia da Informação. Contamos com
            profissionais altamente capacitados para atender os mais diversos
            públicos. Seja no suprimento de equipamentos ou no fornecimento do
            suporte necessário para informatização do cliente, mantemos sempre a
            visão de realizar nossos serviços considerando a qualidade em
            primeiro lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
