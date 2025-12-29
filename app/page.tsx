"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 dark:from-cyan-600 dark:via-purple-600 dark:to-pink-600 text-white py-24 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">⭐</div>
          <div className="absolute top-20 right-20 text-5xl">🚀</div>
          <div className="absolute bottom-10 left-1/4 text-5xl">📚</div>
          <div className="absolute bottom-20 right-1/4 text-6xl">🎨</div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Every Child Deserves<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              World-Class Education
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Discover a new way to learn through 16 comprehensive chapters that cover everything 
            from the origins of our universe to the future of our planet.
          </p>
          <p className="text-lg mb-10 opacity-90">
            Interactive lessons • Engaging games • Progress tracking • Community support
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search chapters, games, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-xl text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/chapters" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-2xl"
            >
              Start Learning Now 🚀
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10,000+", label: "Active Learners", icon: "👥" },
              { number: "16", label: "Core Chapters", icon: "📚" },
              { number: "50+", label: "Learning Games", icon: "🎮" },
              { number: "100%", label: "Free Access", icon: "🌍" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 hover:scale-105 transition">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Why Families Trust Big Picture Learning
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We've designed every aspect of our platform with one goal: helping children develop 
            a genuine love for learning that lasts a lifetime.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-900 dark:to-blue-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900 dark:text-blue-100">Structured Curriculum</h3>
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                Our 16 chapters follow a carefully designed progression, building knowledge 
                step-by-step from foundational concepts to advanced applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-900 dark:text-purple-100">Game-Based Learning</h3>
              <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                Research-backed games make learning feel like play. Children stay engaged 
                while developing critical thinking, problem-solving, and memory skills.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-900 dark:text-orange-100">Progress Tracking</h3>
              <p className="text-orange-800 dark:text-orange-200 leading-relaxed">
                Detailed analytics help parents and educators understand each child's strengths, 
                interests, and areas where they might need extra support.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-3 text-green-900 dark:text-green-100">Accessible Everywhere</h3>
              <p className="text-green-800 dark:text-green-200 leading-relaxed">
                Works on any device with internet access. Offline mode coming soon. 
                No expensive hardware required—just curiosity and a desire to learn.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900 dark:to-purple-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-3 text-indigo-900 dark:text-indigo-100">Community Support</h3>
              <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed">
                Connect with mentors, join study groups, and participate in challenges. 
                Learning is better together, and our community is here to help.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-rose-100 to-red-200 dark:from-rose-900 dark:to-red-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-rose-900 dark:text-rose-100">Rewards & Motivation</h3>
              <p className="text-rose-800 dark:text-rose-200 leading-relaxed">
                Earn badges, unlock avatars, and celebrate achievements. We've designed 
                rewards that keep children motivated without promoting unhealthy competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            16 Chapters, Endless Discovery
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Each chapter is a journey that transforms complex topics into engaging stories, 
            hands-on activities, and memorable experiences.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { num: 1, title: "Origins of Universe", gradient: "from-purple-400 to-blue-600", emoji: "🌌" },
              { num: 2, title: "Stars & Galaxies", gradient: "from-blue-400 to-cyan-500", emoji: "⭐" },
              { num: 3, title: "Systems in Nature", gradient: "from-green-400 to-emerald-500", emoji: "🌿" },
              { num: 4, title: "Water & Life", gradient: "from-cyan-400 to-blue-500", emoji: "💧" },
              { num: 5, title: "Plants & Growth", gradient: "from-green-300 to-yellow-400", emoji: "🌱" },
              { num: 6, title: "Animals & Habitats", gradient: "from-orange-400 to-red-500", emoji: "🦁" },
              { num: 7, title: "Human Body", gradient: "from-pink-400 to-rose-500", emoji: "🧠" },
              { num: 8, title: "Energy & Motion", gradient: "from-yellow-400 to-orange-500", emoji: "⚡" },
            ].map((chapter) => (
              <Link
                key={chapter.num}
                href={`/chapters/${chapter.num}`}
                className={`bg-gradient-to-br ${chapter.gradient} text-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all transform group`}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition">{chapter.emoji}</div>
                <div className="text-xs font-semibold opacity-80 mb-1">Chapter {chapter.num}</div>
                <h3 className="text-lg font-bold leading-tight">{chapter.title}</h3>
                <div className="mt-3 text-sm opacity-90">Explore →</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/chapters" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl"
            >
              View All 16 Chapters →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            What Learners & Parents Say
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12">
            Real stories from our growing community
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah, Age 12",
                location: "United States",
                quote: "I used to think science was boring, but Big Picture Learning makes it feel like I'm exploring a new world every day. The games are my favorite part!",
                emoji: "🌟"
              },
              {
                name: "Raj, Parent",
                location: "India",
                quote: "As a parent, I appreciate how the platform tracks my daughter's progress and shows me exactly where she's excelling. The quality matches expensive tutoring programs, but it's free!",
                emoji: "👨‍👧"
              },
              {
                name: "Emma, Age 10",
                location: "Kenya",
                quote: "I love that I can learn at my own pace. Some chapters I finish fast, others I take my time with. The rewards system keeps me motivated to keep going!",
                emoji: "🎯"
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
                <div className="text-4xl mb-4">{testimonial.emoji}</div>
                <p className="text-gray-700 dark:text-gray-200 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-purple-600 dark:text-purple-400">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join thousands of learners discovering the joy of education. 
            No credit card required. No hidden fees. Just quality learning for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/chapters" 
              className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-2xl"
            >
              Begin Chapter 1 Now
            </Link>
            <Link 
              href="/friends" 
              className="inline-block bg-yellow-400 text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-2xl"
            >
              Meet Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
