import Link from "next/link";

export default function Chapter1Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/chapters" className="text-white/80 hover:text-white">
              ← All Chapters
            </Link>
          </div>
          <div className="text-7xl mb-6">🌌</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Chapter 1: Origins of the Universe
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Let's journey back to the very beginning - 13.8 billion years ago!
          </p>
        </div>
      </section>

      {/* Core Idea */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl shadow-xl mb-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-800 flex items-center gap-3">
              <span className="text-4xl">💡</span>
              The Big Idea
            </h2>
            <p className="text-lg text-purple-900 leading-relaxed">
              Everything in our universe - the stars, planets, even you - started from a single point 
              smaller than an atom! Then BOOM! 💥 The Big Bang happened, and our universe began expanding. 
              It's still growing today!
            </p>
          </div>

          {/* Learning Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span>🎬</span>
                  Watch: The Big Bang Explained
                </h3>
              </div>
              <div className="p-6">
                <div className="bg-gray-200 aspect-video rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-gray-600">Video: How did everything begin?</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Watch this amazing animation showing how the universe exploded from a tiny point 
                  and created everything we see today!
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span>🔬</span>
                  Interactive: Timeline of the Universe
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { time: "0 seconds", event: "The Big Bang! 💥", desc: "Universe begins from a tiny point" },
                    { time: "3 minutes", event: "First atoms form ⚛️", desc: "Hydrogen and helium appear" },
                    { time: "380,000 years", event: "Light can travel! ✨", desc: "Universe becomes transparent" },
                    { time: "200 million years", event: "First stars shine ⭐", desc: "The universe lights up!" },
                    { time: "13.8 billion years", event: "Today! 🌍", desc: "We're here learning about it!" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl hover:scale-105 transition">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shrink-0">
                          {item.time}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-purple-800">{item.event}</h4>
                          <p className="text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini Game */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span>🎮</span>
                Play: Universe Builder
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Can you create your own universe? Put events in the right order and watch it come alive!
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
                Start Game →
              </button>
            </div>

            {/* Key Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center gap-3">
                <span>📖</span>
                Key Words to Remember
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { word: "Big Bang", def: "The moment the universe began expanding" },
                  { word: "Atoms", def: "Tiny building blocks that make everything" },
                  { word: "Galaxy", def: "A huge group of stars held together" },
                  { word: "Expansion", def: "The universe growing bigger and bigger" },
                ].map((term, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                    <h4 className="font-bold text-purple-800 mb-1">{term.word}</h4>
                    <p className="text-gray-700 text-sm">{term.def}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Link 
              href="/chapters" 
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              ← All Chapters
            </Link>
            <Link 
              href="/chapters/2" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              Next: Stars & Galaxies →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

