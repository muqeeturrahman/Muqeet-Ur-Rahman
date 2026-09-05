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
    "Muqeet Ur Rahman | Senior Backend & AI Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer with 5+ years architecting scalable distributed systems and end-to-end applications for fintech, blockchain and AI. Node.js, NestJS, Python, Golang, PostgreSQL, MongoDB, Kafka, LangChain, LangGraph, RAG, AI Agents, AWS and Kubernetes.",
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
