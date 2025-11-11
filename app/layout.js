import "./globals.css";
import Header from "./components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`min-h-screen bg-bg-main`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
