import type { Metadata } from "next";
import "./globals.css";
import { Overpass, Cairo_Play } from "next/font/google";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "YH",
  description: "A porfolio by yh using nextJs app",
};

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cairoPlay = Cairo_Play({
  variable: "--font-cairo-play",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass.variable} ${cairoPlay.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
