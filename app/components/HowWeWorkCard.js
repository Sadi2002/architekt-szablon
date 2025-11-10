import Image from "next/image";
import howWeWorkImage from "../../public/1.webp";

export default function HowWeWorkCard({ cardNum }) {
  return (
    <div className="flex flex-col">
      <span className="text-[8px] font-light">
        Understanding your vision and expectations
      </span>
      <h3
        className={`text-[clamp(16px,4.5vw,26px)] font-normal relative after:content-['(${cardNum})'] after:absolute after:top-[0px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px]`}
      >
        Initial Consultation Meeting
      </h3>
      <div className="relative w-full aspect-5/3 mb-5">
        <Image
          src={howWeWorkImage}
          alt="testowe"
          className="object-cover"
          fill
          placeholder="blur"
        />
      </div>
      <p className="font-light text-[clamp(12px,3.35vw,1rem)]">
        Every great project begins with a conversation. During our first
        meeting, we learn about your needs, lifestyle, and ideas for your future
        home. We analyze the site, discuss functional requirements, and explore
        aesthetic directions. This is where your vision starts to take shape and
        becomes the foundation of the design process.
      </p>
    </div>
  );
}
