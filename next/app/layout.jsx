import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "breakfirst store managment system",
  description: "breakfirst store managment system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body
        className={inter.className}
      >
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}