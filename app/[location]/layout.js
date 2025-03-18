import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco information",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        width={700}
        height={1200}
        className="bg-img"
        alt="background-img"
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {temperature}
            {aqi}
            {weather}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
