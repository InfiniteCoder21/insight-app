import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce">
            Welcome to Big Picture Learning! 🌟
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Where curiosity meets adventure! Learn through games, stories, and amazing discoveries.
          </p>
          <p className="text-lg md:text-xl mb-10">
            Join thousands of kids exploring <span className="font-bold">16 exciting chapters</span> from the universe to your neighborhood!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/chapters" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              Start Learning 🚀
            </Link>
            <Link 
              href="/games" 
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              Play Games 🎮
            </Link>
          </div>
        </div>
      </section>

      {/* Why Big Picture Learning */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
            Why Kids Love Learning Here ❤️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-200 to-blue-300 p-8 rounded-3xl shadow-xl hover:scale-105 transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">Visual Stories</h3>
              <p className="text-blue-800">
                Every lesson comes alive with colorful illustrations, animations, and fun characters!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-200 to-pink-300 p-8 rounded-3xl shadow-xl hover:scale-105 transition">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-900">Fun Games</h3>
              <p className="text-purple-800">
                Play brain-boosting games, solve puzzles, and unlock rewards as you learn!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-yellow-200 to-orange-300 p-8 rounded-3xl shadow-xl hover:scale-105 transition">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-900">Learn Anywhere</h3>
              <p className="text-orange-800">
                Access lessons on any device, even offline. Learning never stops!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chapters Preview */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-700">
            Explore 16 Amazing Chapters 📚
          </h2>
          <p className="text-center text-xl mb-12 text-purple-600">
            From the birth of the universe to the world around you!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chapter Cards */}
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
                className={`bg-gradient-to-br ${chapter.gradient} text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer`}
              >
                <div className="text-4xl mb-3">{chapter.emoji}</div>
                <div className="text-sm font-semibold opacity-80">Chapter {chapter.num}</div>
                <h3 className="text-lg font-bold">{chapter.title}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/chapters" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition shadow-lg"
            >
              View All 16 Chapters →
            </Link>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">
            Learn Through Play! 🎯
          </h2>
          <p className="text-xl mb-10 text-gray-700">
            Challenge your brain with our Elevate-inspired learning games
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Brain Boosters", desc: "Daily logic puzzles", color: "from-blue-400 to-cyan-500", emoji: "🧩" },
              { name: "Memory Mission", desc: "Match & remember", color: "from-purple-400 to-pink-500", emoji: "🎴" },
              { name: "Story Quest", desc: "Interactive adventures", color: "from-orange-400 to-red-500", emoji: "📖" },
            ].map((game) => (
              <div
                key={game.name}
                className={`bg-gradient-to-br ${game.color} text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition`}
              >
                <div className="text-5xl mb-4">{game.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
                <p className="opacity-90">{game.desc}</p>
                <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
                  Play Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Learning Adventure? 🚀
          </h2>
          <p className="text-xl mb-8">
            Join our community of curious learners from around the world!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/chapters" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              Start Chapter 1
            </Link>
            <Link 
              href="/friends" 
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              Meet Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
