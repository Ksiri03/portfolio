import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sirivennelakammariportfolio.netlify.app"),
  title: {
    default: "Siri Vennela Kammari — AI Engineer",
    template: "%s | Siri Vennela Kammari",
  },
  description:
    "Portfolio of Siri Vennela Kammari, an AI Engineer and Machine Learning enthusiast building intelligent systems through AI, ML, and scalable software solutions.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
    "Siri Vennela Kammari",
    "Python",
    "Deep Learning",
    "NLP",
    "Hyderabad",
  ],
  authors: [{ name: "Siri Vennela Kammari" }],
  creator: "Siri Vennela Kammari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sirivennelakammariportfolio.netlify.app",
    siteName: "Siri Vennela Kammari",
    title: "Siri Vennela Kammari — AI Engineer",
    description:
      "Portfolio of Siri Vennela Kammari, an AI Engineer and Machine Learning enthusiast.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Siri Vennela Kammari — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siri Vennela Kammari — AI Engineer",
    description:
      "Portfolio of Siri Vennela Kammari, an AI Engineer and Machine Learning enthusiast.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
