import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Big Picture Learning</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            We're on a mission to make world-class education accessible to every child, 
            regardless of where they live or their family's financial situation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Big Picture Learning was born from a simple observation: children everywhere are naturally curious, 
              but traditional education systems often fail to nurture that curiosity. Too many brilliant young 
              minds lose their love of learning because lessons feel disconnected from the real world.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We set out to change that. Our platform brings together research from cognitive science, 
              game design, and educational psychology to create an experience that feels less like "studying" 
              and more like "exploring." Every chapter tells a story. Every game teaches a skill. 
              Every achievement builds confidence.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Most importantly, we believe education should be a right, not a privilege. That's why Big Picture 
              Learning is completely free for all learners, with a special focus on reaching underserved communities 
              where quality educational resources are scarce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🌍",
                title: "Universal Access",
                description: "Education should reach every child, everywhere. We design for low-bandwidth environments and work offline when needed."
              },
              {
                icon: "🎯",
                title: "Quality First",
                description: "We refuse to compromise on educational quality. Every lesson is research-backed and expertly crafted."
              },
              {
                icon: "💡",
                title: "Curiosity-Driven",
                description: "We nurture natural curiosity rather than forcing rote memorization. Understanding beats memorizing every time."
              },
              {
                icon: "🤝",
                title: "Community-Powered",
                description: "Learning happens best together. Our mentors, educators, and peer community create a supportive ecosystem."
              },
              {
                icon: "🔬",
                title: "Evidence-Based",
                description: "Every feature is grounded in research about how children actually learn. We test, measure, and improve constantly."
              },
              {
                icon: "🌈",
                title: "Inclusive by Design",
                description: "We build for neurodiversity, different learning styles, and multiple languages. Every child deserves to thrive."
              },
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Meet Our Team</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We're educators, engineers, designers, and dreamers united by one goal: 
            helping every child discover their potential.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Tejas", role: "Platform Lead", emoji: "👨‍💻", color: "from-blue-400 to-cyan-500" },
              { name: "Ishaan", role: "Creative Director", emoji: "🎨", color: "from-purple-400 to-pink-500" },
              { name: "Siddharth", role: "Tech Architect", emoji: "⚡", color: "from-green-400 to-emerald-500" },
              { name: "Dhruvatej", role: "Game Designer", emoji: "🎮", color: "from-yellow-400 to-orange-500" },
            ].map((member, index) => (
              <div key={index} className={`bg-gradient-to-br ${member.color} text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition text-center`}>
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm opacity-90">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Active Learners" },
              { number: "45", label: "Countries Reached" },
              { number: "500,000+", label: "Lessons Completed" },
              { number: "95%", label: "Would Recommend" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Want to Help?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Whether you're an educator, developer, designer, or just someone who believes in our mission, 
            there are many ways to contribute to Big Picture Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/community" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl"
            >
              Join Our Community
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

