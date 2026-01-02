"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { DarkModeToggle } from "./dark-mode-toggle";

export function AuthNav() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
    router.refresh();
  };

  // Get user's display name
  const getUserName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(' ')[0]; // First name only
    }
    if (user?.email) {
      return user.email.split('@')[0]; // Username from email
    }
    return 'User';
  };

  if (loading) {
    return (
      <div className="hidden md:flex items-center space-x-1 font-inter">
        <div className="h-10 w-32 bg-slate-700/50 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-1 font-inter">
      {/* Home - Always visible */}
      <Link href="/" className="hover:bg-amber-400/10 px-4 py-2 rounded-lg transition font-medium text-sm">
        Home
      </Link>

      {/* Protected Navigation - Only show when logged in */}
      {user && (
        <>
          <Link href="/chapters" className="hover:bg-amber-400/10 px-4 py-2 rounded-lg transition font-medium text-sm">
            Chapters
          </Link>
          <Link href="/games" className="hover:bg-amber-400/10 px-4 py-2 rounded-lg transition font-medium text-sm">
            Games
          </Link>
          <Link href="/friends" className="hover:bg-amber-400/10 px-4 py-2 rounded-lg transition font-medium text-sm">
            Community
          </Link>
          <Link href="/profile" className="hover:bg-amber-400/10 px-4 py-2 rounded-lg transition font-medium text-sm">
            Profile
          </Link>
        </>
      )}

      {/* About - Always visible */}
      <Link href="/about" className="hover:bg-amber-400/10 px-4 py-2 rounded-lg transition font-medium text-sm">
        About
      </Link>

      <div className="ml-4 flex items-center gap-3">
        <DarkModeToggle />

        {user ? (
          /* Logged in - Show greeting and logout */
          <>
            <div className="flex items-center gap-3 px-4 py-2 bg-amber-400/10 rounded-lg border border-amber-400/20">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                {getUserName().charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium">
                Hi, <span className="text-amber-400">{getUserName()}</span>
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-lg transition font-medium text-sm border border-red-400/30 hover:border-red-400/50 hover:bg-red-400/10 text-red-400"
            >
              Sign Out
            </button>
          </>
        ) : (
          /* Not logged in - Show auth buttons */
          <>
            <Link 
              href="/auth/login" 
              className="px-5 py-2 rounded-lg transition font-medium text-sm border border-amber-400/30 hover:border-amber-400/50 hover:bg-amber-400/10"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/signup" 
              className="px-5 py-2 rounded-lg transition font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
