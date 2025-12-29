import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Big Picture Learning - Learn with Joy!",
  description: "An engaging educational platform for kids worldwide. Explore 16 chapters of science, math, and life skills through games, stories, and visual learning.",
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
      <body className={`${geistSans.className} antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen`}>
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="text-3xl">🌟</div>
                <span className="font-bold text-xl">Big Picture Learning</span>
              </Link>
              
              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="hover:bg-white/20 px-3 py-2 rounded-lg transition">
                  Home
                </Link>
                <Link href="/friends" className="hover:bg-white/20 px-3 py-2 rounded-lg transition">
                  Friends
                </Link>
                <Link href="/chapters" className="hover:bg-white/20 px-3 py-2 rounded-lg transition">
                  Chapters
                </Link>
                <Link href="/games" className="hover:bg-white/20 px-3 py-2 rounded-lg transition">
                  Games
                </Link>
                <Link href="/profile" className="hover:bg-white/20 px-3 py-2 rounded-lg transition">
                  Profile
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="text-white p-2">☰</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div>
                <h3 className="font-bold text-lg mb-3">Our Mission</h3>
                <p className="text-sm opacity-90">
                  Making learning accessible, engaging, and joyful for every child worldwide.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:underline">About Us</Link></li>
                  <li><Link href="/chapters" className="hover:underline">All Chapters</Link></li>
                  <li><Link href="/games" className="hover:underline">Learning Games</Link></li>
                  <li><Link href="/community" className="hover:underline">Community</Link></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
                <p className="text-sm opacity-90">
                  Join our learning community and help us reach more kids!
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
              <p>© 2025 Big Picture Learning. Learning with joy, for every child. 🌟</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
