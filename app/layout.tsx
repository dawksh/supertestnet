import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TanstackProvider from "@/components/tanstack-provider";


const geistSans = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "supertestnet",
  description: "nft explorer for testnets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      ><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <TanstackProvider>

            {children}
          </TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
