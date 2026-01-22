import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Container from "./Provider/Container";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notus",
  description:
    "Notus is a template created by Nextjs , Motion and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased`}>
        {" "}
        <ThemeProvider attribute="class" disableTransitionOnChange enableSystem defaultTheme="system">
          <Container>
          {children} 
           </Container>
          </ThemeProvider>
      </body>
    </html>
  );
}
