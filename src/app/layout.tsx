import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. ข้อมูลพื้นฐานของหน้าเว็บ
  title: {
    default: "Schedify", // ชื่อเริ่มต้นของหน้า
    template: "%s | Schedify", // template สำหรับหน้าอื่น ๆ ที่ปรับเปลี่ยน title ได้
  },
  description: "Generated by create next app",
  keywords: ["Next.js", "PWA", "React", "SEO", "Web App"],

  // 2. ผู้เขียนและผู้สร้างเนื้อหา
  authors: [{ name: "Supanat Sripo", url: "https://github.com/supanat00" }],
  creator: "Supanat Sripo",
  publisher: "Capslockz",

  appleWebApp: {
    capable: true, // บอกว่าเว็บแอปนี้สามารถทำงานเป็นแอปแบบ standalone บน iOS ได้
    title: "Schedify",
    statusBarStyle: "black-translucent", // รูปแบบ status bar บน iOS เมื่อเพิ่มเป็นเว็บแอป
  },

  // 4. ปรับแต่งการตรวจจับรูปแบบ (เช่น เบอร์โทร, อีเมล์)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 10. การตั้งค่าไอคอนที่ใช้ในเบราว์เซอร์
  icons: {
    icon: "/favicon.ico",
    shortcut: ["/icons/icons-192.png"],
    apple: ["/icons/icons-192.png"],
  },

  // ไฟล์ manifest สำหรับ PWA
  manifest: "/manifest.webmanifest",

};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icons-192.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
