import type React from "react"
import type { Metadata } from "next"
import { Cairo, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/toaster"
import StructuredData from "./structured-data"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "مدينة مصر للإسكان والتعمير | شقق وفيلات فاخرة بالتقسيط في القاهرة الجديدة",
  description: "مدينة مصر للإسكان والتعمير - شقق وفيلات للبيع في القاهرة الجديدة. مشاريع أوريجامي، سراي، كافانا ليك، ذا باترفلاي، إيلان. أسعار تبدأ من 3.9 مليون جنيه مع مقدم 5% وتقسيط حتى 10 سنوات.",
  keywords: [
    "مدينة مصر",
    "مدينة مصر للإسكان والتعمير",
    "شقق للبيع القاهرة الجديدة",
    "فيلات للبيع القاهرة الجديدة",
    "أوريجامي مدينة مصر",
    "سراي القاهرة الجديدة",
    "كافانا ليك سراي",
    "ذا باترفلاي مدينة المستقبل",
    "إيلان سراي",
    "شقق بالتقسيط القاهرة الجديدة",
    "عقارات القاهرة الجديدة",
    "Madinet Masr",
    "Madinat Misr",
    "تقسيط 10 سنوات",
    "مقدم 5%",
    "كمبوند القاهرة الجديدة",
    "مدينة المستقبل",
  ],
  authors: [{ name: "مدينة مصر للإسكان والتعمير" }],
  creator: "Madinat Misr",
  publisher: "Madinat Misr",
  metadataBase: new URL("https://tatwermisr.org"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    title: "مدينة مصر للإسكان والتعمير | شقق وفيلات فاخرة بالتقسيط",
    description: "شقق وفيلات للبيع في القاهرة الجديدة - مشاريع أوريجامي، سراي، كافانا ليك، ذا باترفلاي، إيلان. مقدم 5% وتقسيط 10 سنوات.",
    siteName: "مدينة مصر للإسكان والتعمير",
    images: [{ url: "/projects/sarai.webp", width: 1200, height: 630, alt: "مدينة مصر - سراي القاهرة الجديدة" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مدينة مصر للإسكان والتعمير | شقق وفيلات فاخرة",
    description: "شقق وفيلات للبيع في القاهرة الجديدة بمقدم 5% وتقسيط 10 سنوات.",
    images: ["/projects/sarai.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <StructuredData />
      </head>
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
