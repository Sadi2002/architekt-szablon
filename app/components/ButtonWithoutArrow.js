export default function ButtonWithoutArrow({ children }) {
  return (
    <button className="font-semibold-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ">
      {children}
    </button>
  );
}
