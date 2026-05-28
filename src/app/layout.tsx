import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'HVAC Solutions | Heating, Ventilation, Air Conditioning Services',
  description: 'Expert HVAC services for residential and commercial properties. We offer installation, repair, and maintenance for optimal comfort and air quality.',
  keywords: ["HVAC, heating, ventilation, air conditioning, AC repair, furnace installation, duct cleaning, thermostat, residential, commercial"],
  openGraph: {
    "title": "HVAC Solutions | Heating, Ventilation, Air Conditioning Services",
    "description": "Expert HVAC services for residential and commercial properties. We offer installation, repair, and maintenance for optimal comfort and air quality.",
    "url": "https://www.hvacsolutions.com",
    "siteName": "HVAC Solutions",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-helmet_23-2149366663.jpg",
        "alt": "HVAC technician servicing outdoor unit"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "HVAC Solutions | Heating, Ventilation, Air Conditioning Services",
    "description": "Expert HVAC services for residential and commercial properties. We offer installation, repair, and maintenance for optimal comfort and air quality.",
    "images": [
      "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-helmet_23-2149366663.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
