import Image from "next/image";
import arrow from "../../public/arrow.png";

export default function ButtonWithArrow({ children, bg, color, source }) {
  return (
    <button
      className={`bg-${bg} rounded-buttonWithArrow-rounded px-buttonWithArrow-padding-x py-buttonWithArrow-padding-y  text-${color} ml-buttonWithArrow-margin-left-mobile mr-buttonWithArrow-margin-right-mobile font-medium flex items-center md:ml-buttonWithArrow-margin-left-tablet text-hero-text-size-mobile`}
    >
      {children}
      <Image
        src={source}
        alt="strzałka"
        className="w-buttonWithArrow-icon-width h-buttonWithArrow-icon-height top-[0.5px] relative"
      />
    </button>
  );
}
