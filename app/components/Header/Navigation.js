import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between mx-mobile pt-mobile-navigation-top md:mx-tablet xl:mx-desktop xl:pt-desktop-navigation-top ">
      {/* LOGO PO LEWEJ */}
      <span className="md:text-[22px]">Sadowski Studio</span>

      {/* MOBILE BURGER */}
      <div className="md:hidden flex flex-col gap-1.5 items-end">
        <span className="h-[1px] w-[17px] bg-black"></span>
        <span className="h-[1px] w-[24px] bg-black"></span>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-[30px] items-center xl:gap-[50px]">
        <li>
          <Link href={"/about"} className="text-[14px] xl:text-[16px]">
            About us
          </Link>
        </li>
        <li>
          <Link href={"/portfolio"} className="text-[14px] xl:text-[16px]">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href={"/blog"} className="text-[14px] xl:text-[16px]">
            Blog
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="text-[14px] xl:text-[16px]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
