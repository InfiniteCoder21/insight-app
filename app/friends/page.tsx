export default function FriendsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white py-16 px-6 rounded-3xl shadow-2xl">
          <h1 className="text-5xl font-bold mb-4">Our Learning Community 👥</h1>
          <p className="text-xl opacity-90">
            Meet the amazing friends making Big Picture Learning come alive!
          </p>
        </div>
      </div>

      {/* Friends List */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center gap-3">
            <span className="text-4xl">🌟</span>
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Tejas Gundapaneni", role: "Teamwork - Update 2", gradient: "from-cyan-400 to-blue-500", emoji: "🚀" },
              { name: "Ishaan Nulu", role: "", gradient: "from-purple-400 to-pink-500", emoji: "🎨" },
              { name: "Siddharth Kakarla", role: "", gradient: "from-green-400 to-emerald-500", emoji: "💡" },
              { name: "Dhruvatej Mandadi", role: "", gradient: "from-yellow-400 to-orange-500", emoji: "⚡" },
              { name: "Krish Sughand", role: "", gradient: "from-pink-400 to-rose-500", emoji: "📚" },
              { name: "Ben Burnside", role: "", gradient: "from-blue-400 to-cyan-500", emoji: "🌍" },
              { name: "Saikavin Rajarajaswaran", role: "", gradient: "from-indigo-400 to-purple-500", emoji: "🌱" },
            ].map((friend, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${friend.gradient} text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition transform`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{friend.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold">{friend.name}</h3>
                    <p className="text-sm opacity-90">{friend.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Your Name Section */}
        <div className="mt-12 bg-gradient-to-br from-yellow-200 to-orange-200 p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-orange-900 flex items-center gap-3">
            <span className="text-3xl">✨</span>
            Want to Join Our Community?
          </h2>
          <p className="text-orange-800 mb-4">
            This page is special - it's where learners, teachers, and friends can add their names 
            to show they're part of our global learning community!
          </p>
          <div className="bg-white/50 p-4 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>How to add your name:</strong> Go to GitHub → 
              <code className="bg-purple-100 px-2 py-1 rounded mx-1">app/friends/page.tsx</code> 
              → Click edit ✏️ → Add your name to the list → Commit changes!
            </p>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">7+</div>
            <div className="text-sm opacity-90">Active Members</div>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">16</div>
            <div className="text-sm opacity-90">Learning Chapters</div>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-sm opacity-90">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
}
