export default function CommunityPage() {
  return (
    <div className="min-h-screen py-12 px-4 dark:bg-gray-900">
      {/* Hero */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 dark:from-green-600 dark:via-blue-600 dark:to-purple-600 text-white p-12 rounded-3xl shadow-2xl text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Global Community 🌍</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with thousands of learners, mentors, and educators from around the world. 
            Share ideas, get help, and celebrate achievements together.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Community Feed</h2>

          {/* Post 1 */}
          {[
            {
              user: "Sofia",
              avatar: "👧",
              time: "5 minutes ago",
              content: "Just completed Chapter 5! The section on photosynthesis blew my mind 🌱 Who knew plants were so amazing?",
              likes: 24,
              comments: 8,
              badge: "🌟 Level 7"
            },
            {
              user: "Marcus",
              avatar: "👦",
              time: "1 hour ago",
              content: "Can anyone explain how black holes work? I'm on Chapter 2 and find it confusing but super interesting!",
              likes: 15,
              comments: 12,
              badge: "🚀 New Learner"
            },
            {
              user: "Dr. Chen",
              avatar: "👨‍🏫",
              time: "2 hours ago",
              content: "Great question, Marcus! Think of spacetime like a stretchy fabric. When a massive star collapses, it creates a 'dent' so deep that nothing can climb out—not even light! That's why we call it a 'black' hole. Check out the interactive simulation in Chapter 2, section 3.",
              likes: 45,
              comments: 6,
              badge: "🎓 Mentor"
            },
            {
              user: "Aisha",
              avatar: "👧🏾",
              time: "3 hours ago",
              content: "Achievement unlocked! Just got my 30-day learning streak! 🔥 The daily challenges really help me stay motivated. Thanks Big Picture team!",
              likes: 67,
              comments: 15,
              badge: "🏆 Streak Master"
            },
          ].map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{post.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-gray-800 dark:text-white">{post.user}</span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full">
                      {post.badge}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• {post.time}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{post.content}</p>
                  <div className="flex gap-6 text-sm">
                    <button className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-2">
                      <span>❤️</span> {post.likes}
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-2">
                      <span>💬</span> {post.comments}
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-100">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Active Members</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">10,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Posts Today</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">1,834</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Questions Answered</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">456</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Mentors Online</span>
                <span className="font-bold text-green-600 dark:text-green-400">89</span>
              </div>
            </div>
          </div>

          {/* Study Groups */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Study Groups</h3>
            <div className="space-y-3">
              {[
                { name: "Space Explorers", members: 234, icon: "🚀" },
                { name: "Math Wizards", members: 189, icon: "🔢" },
                { name: "Nature Lovers", members: 312, icon: "🌿" },
                { name: "Science Squad", members: 445, icon: "🔬" },
              ].map((group, index) => (
                <button key={index} className="w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:scale-105 transition">
                  <span className="text-3xl">{group.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-gray-800 dark:text-white">{group.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{group.members} members</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">Top Contributors</h3>
            <div className="space-y-3">
              {[
                { name: "Dr. Martinez", points: "12.5k", avatar: "👨‍🏫" },
                { name: "Sarah K.", points: "8.2k", avatar: "👩" },
                { name: "Prof. Lee", points: "7.9k", avatar: "👨‍🎓" },
              ].map((person, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-2xl">{person.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 dark:text-white">{person.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{person.points} points</div>
                  </div>
                  <span className="text-2xl">{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

