import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Big Picture Learning - Quality Education for Every Child",
  description: "A comprehensive educational platform bringing world-class learning to children ages 6-14 through engaging chapters, interactive games, and community-driven growth.",
  keywords: "education, kids learning, science education, interactive learning, educational games",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      <body className={`${geistSans.className} antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 min-h-screen transition-colors duration-300`}>
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-700 dark:via-purple-700 dark:to-pink-700 text-white shadow-lg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition">
                <div className="text-3xl">🌟</div>
                <div>
                  <span className="font-bold text-xl block">Big Picture Learning</span>
                  <span className="text-xs opacity-80 hidden sm:block">Education for Every Child</span>
                </div>
              </Link>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  Home
                </Link>
                <Link href="/friends" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  Friends
                </Link>
                <Link href="/chapters" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  Chapters
                </Link>
                <Link href="/games" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  Games
                </Link>
                <Link href="/profile" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  Profile
                </Link>
                <Link href="/community" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  Community
                </Link>
                <Link href="/about" className="hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium">
                  About
                </Link>
                <div className="ml-2">
                  <DarkModeToggle />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <DarkModeToggle />
                <button className="text-white p-2 hover:bg-white/20 rounded-lg transition" aria-label="Open menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-900 dark:to-pink-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🌟</span> Our Mission
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Making quality education accessible, engaging, and transformative for every child, everywhere.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-3">Learning</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/chapters" className="hover:underline opacity-90 hover:opacity-100">Browse Chapters</Link></li>
                  <li><Link href="/games" className="hover:underline opacity-90 hover:opacity-100">Play Games</Link></li>
                  <li><Link href="/profile" className="hover:underline opacity-90 hover:opacity-100">Track Progress</Link></li>
                  <li><Link href="/community" className="hover:underline opacity-90 hover:opacity-100">Join Community</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-lg mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:underline opacity-90 hover:opacity-100">About Us</Link></li>
                  <li><Link href="/contact" className="hover:underline opacity-90 hover:opacity-100">Contact</Link></li>
                  <li><Link href="/faq" className="hover:underline opacity-90 hover:opacity-100">FAQ</Link></li>
                  <li><Link href="/privacy" className="hover:underline opacity-90 hover:opacity-100">Privacy Policy</Link></li>
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h3 className="font-bold text-lg mb-3">Connect</h3>
                <p className="text-sm opacity-90 mb-3">
                  Join our growing community of learners worldwide!
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-2xl hover:scale-110 transition" aria-label="Facebook">📘</a>
                  <a href="#" className="text-2xl hover:scale-110 transition" aria-label="Twitter">🐦</a>
                  <a href="#" className="text-2xl hover:scale-110 transition" aria-label="Instagram">📷</a>
                  <a href="#" className="text-2xl hover:scale-110 transition" aria-label="YouTube">📺</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
              <p className="opacity-90">
                © 2025 Big Picture Learning. Empowering young minds worldwide. Built with 💜 for every child's future.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
