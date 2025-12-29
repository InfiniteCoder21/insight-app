export default function GamesPage() {
  const games = [
    {
      name: "Brain Boosters",
      desc: "Daily logic puzzles to sharpen your mind",
      gradient: "from-blue-400 to-cyan-500",
      emoji: "🧩",
      difficulty: "Easy to Hard",
      skills: ["Logic", "Problem Solving", "Pattern Recognition"]
    },
    {
      name: "Memory Mission",
      desc: "Match cards and boost your memory power",
      gradient: "from-purple-400 to-pink-500",
      emoji: "🎴",
      difficulty: "Medium",
      skills: ["Memory", "Concentration", "Quick Thinking"]
    },
    {
      name: "Story Quest",
      desc: "Interactive adventures through learning topics",
      gradient: "from-orange-400 to-red-500",
      emoji: "📖",
      difficulty: "All Levels",
      skills: ["Reading", "Critical Thinking", "Creativity"]
    },
    {
      name: "Math Marathon",
      desc: "Race against time solving math challenges",
      gradient: "from-green-400 to-emerald-500",
      emoji: "🔢",
      difficulty: "Progressive",
      skills: ["Math", "Speed", "Accuracy"]
    },
    {
      name: "Word Wizard",
      desc: "Build vocabulary with spelling challenges",
      gradient: "from-yellow-400 to-orange-500",
      emoji: "📝",
      difficulty: "Easy to Medium",
      skills: ["Vocabulary", "Spelling", "Language"]
    },
    {
      name: "Science Sleuth",
      desc: "Solve mysteries using scientific thinking",
      gradient: "from-indigo-400 to-purple-500",
      emoji: "🔬",
      difficulty: "Medium to Hard",
      skills: ["Science", "Deduction", "Analysis"]
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white py-16 px-6 rounded-3xl shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Learning Games 🎮</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Train your brain while having fun!
          </p>
          <p className="text-lg opacity-80">
            Play every day to improve memory, logic, and critical thinking
          </p>
        </div>
      </div>

      {/* Daily Challenge Banner */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-8 rounded-3xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">⭐</span>
                <h2 className="text-3xl font-bold text-orange-900">Today's Challenge</h2>
              </div>
              <p className="text-lg text-orange-800">
                Complete 3 games today and earn the "Daily Star" badge!
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur px-8 py-4 rounded-2xl">
              <div className="text-4xl font-bold text-orange-900">0/3</div>
              <div className="text-sm text-orange-800">Games Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${game.gradient} text-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all transform group`}
            >
              {/* Game Header */}
              <div className="p-8">
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{game.emoji}</div>
                <h3 className="text-3xl font-bold mb-3">{game.name}</h3>
                <p className="opacity-90 mb-4">{game.desc}</p>
                
                {/* Difficulty Badge */}
                <div className="inline-block bg-white/30 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Difficulty: {game.difficulty}
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2 opacity-80">Skills You'll Build:</div>
                  <div className="flex flex-wrap gap-2">
                    {game.skills.map((skill, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Play Button */}
                <button className="w-full bg-white/90 backdrop-blur text-purple-600 py-4 rounded-2xl font-bold text-lg hover:bg-white transition shadow-lg group-hover:scale-105">
                  Play Now →
                </button>
              </div>

              {/* Stats Footer */}
              <div className="bg-black/10 backdrop-blur px-8 py-4 flex justify-between text-sm">
                <div>
                  <div className="font-bold">Best Score</div>
                  <div className="opacity-80">--</div>
                </div>
                <div>
                  <div className="font-bold">Times Played</div>
                  <div className="opacity-80">0</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-800 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            How Learning Games Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 p-6 rounded-2xl">
              <div className="text-5xl mb-3">1️⃣</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Pick a Game</h3>
              <p className="text-purple-700">
                Choose any game that interests you or challenges your skills
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-2xl">
              <div className="text-5xl mb-3">2️⃣</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Play & Learn</h3>
              <p className="text-purple-700">
                Games adapt to your level - they get harder as you improve!
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-2xl">
              <div className="text-5xl mb-3">3️⃣</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Earn Rewards</h3>
              <p className="text-purple-700">
                Unlock badges, level up, and track your progress every day
              </p>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Unlock Amazing Rewards!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎨", name: "Avatar Clothes", desc: "Customize your look" },
              { icon: "🏠", name: "Room Themes", desc: "Decorate your space" },
              { icon: "🐕", name: "Virtual Pets", desc: "Collect cute companions" },
              { icon: "⭐", name: "Special Badges", desc: "Show off achievements" },
            ].map((reward, index) => (
              <div key={index} className="bg-white/20 backdrop-blur p-4 rounded-2xl text-center">
                <div className="text-4xl mb-2">{reward.icon}</div>
                <div className="font-bold mb-1">{reward.name}</div>
                <div className="text-sm opacity-90">{reward.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

