import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hashem General Contracting Est. | Engineering Excellence Built to Last | Saudi Arabia",
  description: "Hashem General Contracting Est. is a leading Saudi contractor specializing in Aluminium & Glass Fabrication, Unitized Curtain Walls, Structural Steel, Civil Infrastructure, Mechanical HVAC, and Industrial Engineering across KSA.",
  keywords: [
    "Hashem General Contracting Est",
    "Aluminium Fabrication Saudi Arabia",
    "Curtain Wall Glazing KSA",
    "Structural Steel Fabrication Dammam",
    "Civil Construction Riyadh",
    "HVAC Contractors Saudi Arabia",
    "Industrial Piping Jubail",
    "Schüco Reynaers Aluminium Saudi Arabia",
    "Saudi Building Code Contractor"
  ],
  authors: [{ name: "Hashem General Contracting Est." }],
  openGraph: {
    title: "Hashem General Contracting Est. | Where Engineering Meets Craftsmanship",
    description: "World-class aluminium fabrication, structural steel, civil construction, and mechanical engineering solutions across Saudi Arabia.",
    url: "https://hashemcontracting.com",
    siteName: "Hashem General Contracting Est.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hashem General Contracting Facade Engineering",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#1b1918] text-[#f7f7f7]">
        {children}
      </body>
    </html>
  );
}
