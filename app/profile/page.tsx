"use client";

export default function ProfilePage() {
  // In a real app, this would fetch user data from an API
  const userData = {
    name: "Alex",
    age: 12,
    joinDate: "January 2025",
    avatar: "👤",
    level: 8,
    totalPoints: 3450,
    streak: 12,
    chaptersCompleted: 5,
    gamesPlayed: 127,
    badges: 15,
  };

  return (
    <div className="min-h-screen py-12 px-4 dark:bg-gray-900">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 text-white p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-6xl border-4 border-white">
              {userData.avatar}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Welcome back, {userData.name}!</h1>
              <p className="text-lg opacity-90">Level {userData.level} Learner • Member since {userData.joinDate}</p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                  🔥 {userData.streak} Day Streak
                </span>
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ {userData.totalPoints} Points
                </span>
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 {userData.badges} Badges
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{userData.chaptersCompleted}</div>
                <div className="text-sm opacity-80">Chapters</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{userData.gamesPlayed}</div>
                <div className="text-sm opacity-80">Games</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Your Learning Progress
            </h2>

            {/* Chapter Progress */}
            <div className="space-y-4">
              {[
                { chapter: 1, title: "Origins of Universe", progress: 100, color: "purple" },
                { chapter: 2, title: "Stars & Galaxies", progress: 100, color: "blue" },
                { chapter: 3, title: "Systems in Nature", progress: 85, color: "green" },
                { chapter: 4, title: "Water & Life", progress: 60, color: "cyan" },
                { chapter: 5, title: "Plants & Growth", progress: 30, color: "yellow" },
                { chapter: 6, title: "Animals & Habitats", progress: 0, color: "orange" },
              ].map((item) => (
                <div key={item.chapter} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Chapter {item.chapter}: {item.title}
                    </span>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full transition-all`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
              <span className="text-3xl">📅</span>
              Recent Activity
            </h2>

            <div className="space-y-4">
              {[
                { icon: "🎮", action: "Completed Brain Booster Game", time: "2 hours ago", points: "+50" },
                { icon: "📚", action: "Finished Chapter 3 Quiz", time: "Yesterday", points: "+100" },
                { icon: "🏆", action: "Earned 'Quick Learner' Badge", time: "2 days ago", points: "+200" },
                { icon: "⭐", action: "Reached 12-day streak!", time: "Today", points: "+150" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:scale-105 transition">
                  <div className="text-3xl">{activity.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 dark:text-white">{activity.action}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</div>
                  </div>
                  <div className="font-bold text-green-600 dark:text-green-400">{activity.points}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Achievements */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-orange-900 dark:text-orange-100 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              Badges
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {[
                { emoji: "🌟", name: "First Chapter" },
                { emoji: "🔥", name: "7 Day Streak" },
                { emoji: "🎯", name: "Quiz Master" },
                { emoji: "🚀", name: "Fast Learner" },
                { emoji: "💯", name: "Perfect Score" },
                { emoji: "🎨", name: "Creative Mind" },
              ].map((badge, index) => (
                <div key={index} className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl text-center hover:scale-110 transition">
                  <div className="text-4xl mb-2">{badge.emoji}</div>
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{badge.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Weekly Goals
            </h2>

            <div className="space-y-4">
              {[
                { goal: "Complete 3 chapters", current: 1, target: 3 },
                { goal: "Play 10 games", current: 7, target: 10 },
                { goal: "Earn 500 points", current: 350, target: 500 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.goal}</span>
                    <span className="text-gray-600 dark:text-gray-400">{item.current}/{item.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"
                      style={{ width: `${(item.current / item.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-3xl shadow-xl p-8">
            <h2 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-100">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 py-3 rounded-xl font-semibold hover:scale-105 transition shadow">
                📝 Edit Profile
              </button>
              <button className="w-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 py-3 rounded-xl font-semibold hover:scale-105 transition shadow">
                ⚙️ Settings
              </button>
              <button className="w-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 py-3 rounded-xl font-semibold hover:scale-105 transition shadow">
                📊 View Stats
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

