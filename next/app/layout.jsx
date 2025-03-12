import { Inter } from "next/font/google";
import "./globals.css";

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

function Sidebar() {
  return (
    <nav className="w-64 bg-stone-100 p-4 border-r">
      <h2 className="text-xl font-bold mb-6">breakfirst store managment</h2>
      <div className="space-y-2">
        <NavLink href="/overview" >Overview</NavLink>
        <NavLink href="/menu" >Menu</NavLink>
        <NavLink href="/order" >Order</NavLink>
        <NavLink href="/inventory" >Inventory</NavLink>
        <NavLink href="/" >Next.js template</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children}) {
  return (
    <a href={href} className="block px-4 py-2 rounded-md hover:bg-stone-200 transition-colors">
      {children}
    </a>
  );
}