import type { Metadata } from "next";
import { creatoDisplay, azeretMono } from "./fonts";
import "./globals.css";
import GSAPRegistry from "@/lib/gsap/GSAPRegistry";

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
    <html lang="en">
      <body
        className={`${creatoDisplay.variable} ${azeretMono.variable} antialiased`}
      >
        <GSAPRegistry>{children}</GSAPRegistry>
      </body>
    </html>
  );
}
