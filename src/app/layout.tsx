import Layout from "@/layout/Layout";
import { Montserrat } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "My stand",
  description: "Tu negocio universitario en un solo lugar",
};
const font = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${font.className} min-h-screen`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
