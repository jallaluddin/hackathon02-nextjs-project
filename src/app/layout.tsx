import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Bottom from "./components/bottom";
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: '400', // Specify the font weight if needed
  subsets: ['latin'], // Load specific subsets (e.g., Latin, Cyrillic)
});


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
  href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
  rel="stylesheet"
/>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Bottom />
        </body>
    </html>
  );
}
