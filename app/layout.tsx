import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { AuthNav } from "@/components/auth-nav";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Big Picture Learning - Premium Education Platform",
  description: "An elite educational platform delivering comprehensive, research-backed curriculum through sophisticated learning experiences. Designed for discerning families who value excellence.",
  keywords: "premium education, elite learning platform, comprehensive curriculum, advanced learning",
};

const playfair = Playfair_Display({
  variable: "--font-playfair",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-900 dark:via-slate-800 dark:to-zinc-900 min-h-screen transition-colors duration-300`}>
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-800 via-zinc-800 to-stone-900 dark:from-slate-950 dark:via-zinc-950 dark:to-stone-950 text-white shadow-2xl backdrop-blur-lg border-b border-amber-200/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center text-2xl font-bold text-slate-900 group-hover:scale-110 transition">
                  BP
                </div>
                <div>
                  <span className="font-playfair font-bold text-2xl block tracking-tight">Big Picture Learning</span>
                  <span className="text-xs text-amber-200/80 hidden sm:block font-inter">Excellence in Education</span>
                </div>
              </Link>
              
              {/* Auth-Aware Navigation */}
              <AuthNav />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-slate-900 via-zinc-900 to-stone-900 dark:from-black dark:via-zinc-950 dark:to-slate-950 text-white mt-20 border-t border-amber-200/10">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* About */}
              <div>
                <h3 className="font-playfair font-bold text-xl mb-4 text-amber-400">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-inter">
                  Delivering world-class education through meticulously crafted curriculum and cutting-edge learning technology.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="font-playfair font-bold text-xl mb-4 text-amber-400">Platform</h3>
                <ul className="space-y-3 text-sm font-inter">
                  <li><Link href="/chapters" className="text-slate-300 hover:text-amber-400 transition">Curriculum</Link></li>
                  <li><Link href="/community" className="text-slate-300 hover:text-amber-400 transition">Community</Link></li>
                  <li><Link href="/profile" className="text-slate-300 hover:text-amber-400 transition">Dashboard</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-playfair font-bold text-xl mb-4 text-amber-400">Company</h3>
                <ul className="space-y-3 text-sm font-inter">
                  <li><Link href="/about" className="text-slate-300 hover:text-amber-400 transition">About</Link></li>
                  <li><Link href="/contact" className="text-slate-300 hover:text-amber-400 transition">Contact</Link></li>
                  <li><Link href="/privacy" className="text-slate-300 hover:text-amber-400 transition">Privacy</Link></li>
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h3 className="font-playfair font-bold text-xl mb-4 text-amber-400">Connect</h3>
                <p className="text-sm text-slate-300 mb-4 font-inter">
                  Stay informed about our latest developments and educational insights.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-lg flex items-center justify-center transition" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-lg flex items-center justify-center transition" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-lg flex items-center justify-center transition" aria-label="YouTube">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-sm text-slate-400 font-inter">
                © 2025 Big Picture Learning. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
