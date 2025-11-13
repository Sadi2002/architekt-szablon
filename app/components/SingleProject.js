import Image from "next/image";

export default function SingleProject({ src, dataBlur }) {
  return (
    <Image
      src={src}
      alt="pokój"
      className="object-cover absolute top-0 left-0 w-full h-full"
      placeholder="blur"
      blurDataURL={dataBlur}
      loading="lazy"
    />
  );
}
