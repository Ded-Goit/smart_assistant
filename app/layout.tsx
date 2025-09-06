import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackathon2025-beta.vercel.app"),
  title: {
    default: "Smart Assistant",
    template: "%s — Smart Assistant",
  },
  description:
    "Smart Assistant is a productivity and learning platform that helps you manage your time, stay focused, and achieve better results through planning, Pomodoro sessions, microlearning, and analytics.",
  keywords: [
    "productivity",
    "time management",
    "Pomodoro",
    "planner",
    "focus",
    "microlearning",
    "study",
    "learning efficiency",
  ],
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Smart Assistant",
    title: "Your Time. Your Rhythm. Your Assistant.",
    description:
      "A productivity and learning app with planning tools, focus timer, microlearning, and analytics — all in one place.",
    url: "https://hackathon2025-beta.vercel.app/",
    images: [
      {
        url: "/og/hackathon.png",
        width: 1200,
        height: 630,
        alt: "Smart Assistant — productivity and learning without distractions",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Assistant",
    description:
      "Plan, focus, and learn effectively. Tools and microlearning designed for better results.",
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
