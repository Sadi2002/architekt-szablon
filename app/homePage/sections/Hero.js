import Image from "next/image";
import heroImage from "../../../public/main.png";
import Button from "@/app/components/Button";

export default function Hero() {
  return (
    <section className="h-[100dvh] absolute top-0 left-0 w-full">
      <div>
        <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.55)] -z-1"></div>
        <Image
          src={heroImage}
          fill
          quality={75}
          alt="nowoczesny dom"
          placeholder="blur"
          className="object-cover -z-10 absolute"
        />
      </div>
      <div className="mx-mobile flex flex-col h-full relative">
        <div className="absolute bottom-20">
          <h1 className="text-white text-[clamp(2.2rem,10vw,5rem)] leading-[clamp(2.2rem,10vw,5rem)] font-medium mb-2.5 ">
            OSIEDLE ZACISZE W Warszawie
          </h1>
          <p className="text-white text-[12px] font-light leading-[18px] mb-[50px]">
            Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
            elegancji szczerej gościnności. Położona w romantycznym
          </p>
          <Button>Read more</Button>
        </div>
      </div>
      <span className="absolute bottom-[20px] left-0 mx-mobile font-normal text-[#C6C6C6] text-[10px]">
        (scroll down)
      </span>
    </section>
  );
}
