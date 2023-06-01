import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "AirBnB",
  description: "Air BnB clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
