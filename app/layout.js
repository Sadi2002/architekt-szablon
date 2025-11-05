import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pierwsza strona",
  description: "Opis pierwszej strony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased h-[10000px]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
