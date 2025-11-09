import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.className} antialiased h-[10000px] bg-bg-main`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
