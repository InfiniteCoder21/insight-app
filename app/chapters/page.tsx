import Link from "next/link";

const chapters = [
  { num: 1, title: "Origins of the Universe", gradient: "from-purple-400 to-blue-600", emoji: "🌌", desc: "Journey to the beginning of time and space" },
  { num: 2, title: "Stars & Galaxies", gradient: "from-blue-400 to-cyan-500", emoji: "⭐", desc: "Explore the cosmic wonders above" },
  { num: 3, title: "Systems in Nature", gradient: "from-green-400 to-emerald-500", emoji: "🌿", desc: "Discover how nature works together" },
  { num: 4, title: "Water & Life", gradient: "from-cyan-400 to-blue-500", emoji: "💧", desc: "The source of all living things" },
  { num: 5, title: "Plants & Growth", gradient: "from-green-300 to-yellow-400", emoji: "🌱", desc: "Watch life bloom and flourish" },
  { num: 6, title: "Animals & Habitats", gradient: "from-orange-400 to-red-500", emoji: "🦁", desc: "Meet creatures from around the world" },
  { num: 7, title: "Human Body", gradient: "from-pink-400 to-rose-500", emoji: "🧠", desc: "Understand your amazing body" },
  { num: 8, title: "Energy & Motion", gradient: "from-yellow-400 to-orange-500", emoji: "⚡", desc: "Feel the power that moves everything" },
  { num: 9, title: "Earth & Geology", gradient: "from-amber-400 to-orange-600", emoji: "🌋", desc: "Uncover Earth's hidden secrets" },
  { num: 10, title: "Weather & Climate", gradient: "from-sky-400 to-blue-500", emoji: "🌈", desc: "Understand the sky above you" },
  { num: 11, title: "History & Civilizations", gradient: "from-indigo-400 to-purple-500", emoji: "🏛️", desc: "Travel through human history" },
  { num: 12, title: "Math & Logic", gradient: "from-teal-400 to-cyan-500", emoji: "🔢", desc: "Solve puzzles with numbers" },
  { num: 13, title: "Technology & Innovation", gradient: "from-violet-400 to-purple-500", emoji: "🤖", desc: "Build the future with tech" },
  { num: 14, title: "Art & Creativity", gradient: "from-fuchsia-400 to-pink-500", emoji: "🎨", desc: "Express yourself through art" },
  { num: 15, title: "Community & Society", gradient: "from-rose-400 to-red-500", emoji: "🏘️", desc: "Learn how we live together" },
  { num: 16, title: "Environment & Future", gradient: "from-emerald-400 to-green-500", emoji: "🌍", desc: "Protect our planet's future" },
];

export default function ChaptersPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-16 px-6 rounded-3xl shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Big Picture 📚</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            16 Amazing Chapters to Explore the World!
          </p>
          <p className="text-lg opacity-80">
            From the birth of the universe to the future of our planet
          </p>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chapter) => (
            <Link
              key={chapter.num}
              href={`/chapters/${chapter.num}`}
              className={`bg-gradient-to-br ${chapter.gradient} text-white p-8 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all transform group`}
            >
              {/* Chapter Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white/30 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                  Chapter {chapter.num}
                </span>
                <span className="text-sm opacity-75">📖</span>
              </div>

              {/* Emoji */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition">{chapter.emoji}</div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3">{chapter.title}</h2>

              {/* Description */}
              <p className="text-sm opacity-90">{chapter.desc}</p>

              {/* Start Button */}
              <div className="mt-6 bg-white/20 backdrop-blur text-center py-2 rounded-full font-semibold group-hover:bg-white/30 transition">
                Start Learning →
              </div>
            </Link>
          ))}
        </div>

        {/* Learning Path Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-purple-800 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            Your Learning Journey
          </h2>
          <p className="text-lg text-purple-700 mb-4">
            Each chapter is a new adventure! Complete lessons, play games, and unlock badges as you progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl mb-2">📺</div>
              <h3 className="font-bold text-purple-800">Watch Videos</h3>
              <p className="text-sm text-purple-700">Fun animations explain concepts</p>
            </div>
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="font-bold text-purple-800">Play Games</h3>
              <p className="text-sm text-purple-700">Interactive challenges test knowledge</p>
            </div>
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-bold text-purple-800">Earn Rewards</h3>
              <p className="text-sm text-purple-700">Unlock badges and achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

