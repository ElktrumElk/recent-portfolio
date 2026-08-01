import type { Metadata } from "next";
import { Caveat, Fraunces, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import HeaderComponet from "./component/HeaderComponent";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elkanah Cole — UI & Software Developer",
  description:
    "Portfolio of Elkanah Cole, a fullstack developer crafting sophisticated, accessible interfaces.",
};

const themeInitScript = `(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t !== "dark" && t !== "light") t = "light";
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${caveat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <HeaderComponet />
        {children}
      </body>
    </html>
  );
}
