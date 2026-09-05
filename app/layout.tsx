import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Myqeet Ur Rahman | Full-Stack Engineer & AI Automation Architect",
  description:
    "Full-Stack Engineer & AI Automation Architect. Building production SaaS platforms, AI agents, and workflow automation with Next.js, NestJS, Claude AI, and n8n.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
