import { HeroSectionContainer } from "@/components/Home/styles";

export default function Hero() {
  return (
    <HeroSectionContainer className="grid h-screen place-items-center">
      <div>
        <h1 className="text-5xl font-bold text-center uppercase">
          Proserv & Solution <br /> Informática
        </h1>
        <h2 className="text-center text-2xl font-normal ">
          Há mais de 30 anos trazendo tecnologia para perto de você!
        </h2>
      </div>
    </HeroSectionContainer>
  );
}
