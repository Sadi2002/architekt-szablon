import Image from "next/image";
import arrow from "../../public/arrow.png";

export default function Button({ children }) {
  return (
    <button className="bg-white rounded-[500px] px-3.5 py-1.5 text-[10px] ml-auto mr-0 font-medium flex items-center">
      {children}
      <Image
        src={arrow}
        alt="strzałka"
        className="w-[14px] h-[14px] relative top-[1px]"
      />
    </button>
  );
}
