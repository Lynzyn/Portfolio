import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "THEATRE Website",
      category: "Web Design",
      image: "/Pic/Theatre.png",
      description:
        "Designed a theatre booking experience including show details and interactive browsing flow.",
    },
    {
      id: 2,
      title: "Animal Diary",
      category: "Mobile Application",
      image: "/Pic/Animal.png",
      description:
        "Designed and built a mobile game for primary education to support learning and skill development.",
    },
    {
      id: 3,
      title: "Chicken Ready",
      category: "UI Design Concept",
      image: "/Pic/Chicken.png",
      description:
        "Mobile app design for professional chicken farmers with interactive prototypes created in Figma.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <Sparkles size={16} className="text-gray-700" />
                <span className="text-sm text-gray-700">
                  Open to opportunities
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Aspiring UX/UI Designer Ready to Create Impact
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fresh graduate passionate about designing user-friendly digital
                experiences. Eager to apply my skills in UI design, prototyping,
                and user research to real-world projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <ImageWithFallback
                  src="/Pic/mood.jfif"
                  alt="Designer workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl font-bold mb-1">3+</div>
                <div className="text-gray-600">Case Studies</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">
              A selection of my recent design projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to="/work" className="group block h-full">
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-5">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="text-sm text-gray-500 mb-2">
                      {project.category}
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-4 transition-all"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm always interested in hearing about new projects and
              opportunities
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
