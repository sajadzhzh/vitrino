import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirMatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  weight: "800"
})

export const metadata: Metadata = {
  title: "ویترینو",
  description: "فروشگاه اینترنتی ویترینو",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirMatn.variable} ${geistSans.variable}`}
    >
      <body data-theme="light">{children}</body>
    </html>
  );
}
