import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackathon2025-beta.vercel.app"),
  title: {
    default: "Smart Assistant",
    template: "%s — Ши Помічник",
  },
  description:
    "Платформа продуктивності: планувальник, фокус-таймер, мікроуроки, аналітика та спільнота.",
  keywords: [
    "продуктивність",
    "тайм-менеджмент",
    "Pomodoro",
    "планувальник",
    "focus",
    "мікроуроки",
  ],
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Ши Помічник",
    title: "Твій час. Твій ритм. Твій асистент.",
    description:
      "Платформа продуктивності з інструментами та навчанням без зайвого шуму.",
    url: "https://hackathon2025-beta.vercel.app/",
    images: [
      {
        url: "/og/hackathon.png", // поклади файл у public/og/hackathon.png
        width: 1200,
        height: 630,
        alt: "Ши Помічник — продуктивність без шуму",
      },
    ],
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ши Помічник",
    description:
      "Плануй, фокусуйся, навчайся. Інструменти та мікроуроки для результатів.",
    images: ["/og/hackathon.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://hackathon2025-beta.vercel.app/",
    languages: {
      "uk-UA": "https://hackathon2025-beta.vercel.app/uk",
      "en-US": "https://hackathon2025-beta.vercel.app/en",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
