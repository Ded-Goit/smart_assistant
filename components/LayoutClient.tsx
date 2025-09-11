"use client";

import { usePathname } from "next/navigation";
import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const hiddenHeaderRoutes = [
  // no component header
  "/login",
  "/register",
  "/aiassistant",
  "/profile",
  "/calendar",
  "/resourcesnew",
  "/setting",
];
const hiddenFooterRoutes = [
  // no component footer
  "/login",
  "/register",
  "/profile",
  "/calendar",
  "/resourcesnew",
  "/setting",
  "/aiassistant",
];

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeader = hiddenHeaderRoutes.includes(pathname);
  const hideFooter = hiddenFooterRoutes.includes(pathname);

  return (
    <ThemeProvider>
      {!hideHeader && <Header />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </ThemeProvider>
  );
}
