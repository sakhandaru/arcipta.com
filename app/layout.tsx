import type { Metadata } from "next";
import { creatoDisplay, azeretMono } from "./fonts";
import "./globals.css";
import GSAPRegistry from "@/lib/gsap/GSAPRegistry";
import SmoothScroll from "@/components/core/SmoothScroll";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Arcipta - Direction before Technology",
  description: "Modern digital solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${creatoDisplay.variable} ${azeretMono.variable} antialiased`}
      >
        <GSAPRegistry>
          {/* <Header /> */}
          <Sidebar />
          <SmoothScroll>
            {children}
            <WhatsAppFloat />
          </SmoothScroll>
          {/* {children} */}
        </GSAPRegistry>
      </body>
    </html>
  );
}
