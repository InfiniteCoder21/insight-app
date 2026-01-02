"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // More helpful error messages
        if (error.message.includes("Invalid login credentials")) {
          setError("Invalid email or password. Please check your credentials or sign up if you don't have an account.");
        } else if (error.message.includes("Email not confirmed")) {
          setError("Please verify your email address before signing in. Check your inbox for the confirmation link.");
        } else {
          setError(error.message || "An error occurred during sign in");
        }
        return;
      }

      if (data?.user) {
        router.push("/chapters");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 dark:bg-slate-900">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-playfair text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Welcome Back
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-inter">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm font-inter">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-inter">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition font-inter text-slate-900 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-inter">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition font-inter text-slate-900 dark:text-white"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link 
                href="/auth/forgot-password" 
                className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-inter"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-inter"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-inter">
                New to Big Picture Learning?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Link
            href="/auth/signup"
            className="block w-full text-center px-4 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition font-inter"
          >
            Create an Account
          </Link>
        </div>

        {/* Back Home */}
        <div className="text-center mt-6">
          <Link 
            href="/" 
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-inter"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
