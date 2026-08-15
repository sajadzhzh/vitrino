import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import "./globals.css";
import Menu from "@/Components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirMatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  weight: "800",
});

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
      <body data-theme="light" className="w-full flex flex-row xl:gap-4">
        <div className="w-0 p-0 xl:w-1/5">
          <Menu />
        </div>
        <div className="w-full xl:w-4/5">{children}</div>
      </body>
    </html>
  );
}
