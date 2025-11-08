import Image from "next/image";
import arrow from "../../public/arrow.png";

export default function Button({ children }) {
  return (
    <button className="bg-main-white rounded-buttonWithArrow-rounded px-buttonWithArrow-padding-x py-buttonWithArrow-padding-y  text-buttonWithArrow-text ml-buttonWithArrow-margin-left-mobile mr-buttonWithArrow-margin-right-mobile font-medium flex items-center md:ml-buttonWithArrow-margin-left-tablet ">
      {children}
      <Image
        src={arrow}
        alt="strzałka"
        className="w-buttonWithArrow-icon-width h-buttonWithArrow-icon-height relative"
      />
    </button>
  );
}
