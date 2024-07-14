import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://canim-csr.vercel.app"),
  title: "Lindo accesorio",
  description:
    "Accesorios Artesanales, hechos 100% a mano con materiales naturales",
  openGraph: {
    title: "Lindo accesorio",
    description:
      "Accesorios Artesanales, hechos 100% a mano con materiales naturales",
    url: "",
    siteName: "Lindo accesorio",
    images: "",
    locale: "en_CR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
