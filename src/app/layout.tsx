import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist_Mono } from "next/font/google";
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  adjustFontFallback: false,
});
export const metadata: Metadata = {
  title: "Inci's Portfolio",
  description:
    "Showcasing my journey as a passionate developer, exploring innovative projects, creative solutions, and a love for clean, efficient code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {/* Background Wrapper */}
          <Header />
          {children}
          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
