import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { CartProvider } from "@/context/CartContext";
import { DataProvider } from "@/context/DataContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MobileFix - Expert Mobile Phone Repair",
  description: "Fast, reliable, and affordable mobile phone repair services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <DataProvider>
            <CartProvider>
              <Navbar />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <CookieConsent />
            </CartProvider>
          </DataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
