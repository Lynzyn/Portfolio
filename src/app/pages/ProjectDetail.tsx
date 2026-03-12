import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Project Not Found
          </h1>
          <Link
            to="/work"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Previous Project */}
      <Link
        to={`/work/${prevProject.slug}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group hidden xl:flex fixed left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
        z-50 w-20 h-20 2xl:w-24 2xl:h-24 rounded-full
        bg-[#F5F5F5] border border-gray-200
        items-center justify-center
        hover:bg-gray-100 hover:translate-x-3
        transition-all duration-300 shadow-sm"
      >
        <ArrowLeft
          size={28}
          className="text-gray-600 translate-x-3 2xl:translate-x-4 transition-transform duration-300 group-hover:translate-x-2"
        />
      </Link>

      {/* Next Project */}
      <Link
        to={`/work/${nextProject.slug}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 translate-x-1/2
        z-50 w-20 h-20 2xl:w-24 2xl:h-24 rounded-full
        bg-[#F5F5F5] border border-gray-200
        items-center justify-center
        hover:bg-gray-100 hover:-translate-x-3
        transition-all duration-300 shadow-sm"
      >
        <ArrowRight
          size={28}
          className="text-gray-600 -translate-x-3 2xl:-translate-x-4 transition-transform duration-300 group-hover:-translate-x-2"
        />
      </Link>

      {/* Hero Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/work")}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Work
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
              {project.category} • {project.year}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-gray-100"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_auto] gap-6 lg:gap-8 mb-12 sm:mb-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-gray-600 text-sm sm:text-base whitespace-normal lg:whitespace-nowrap">
                {project.category}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold mb-3 text-sm sm:text-base">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.prototypeUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full lg:w-auto lg:justify-self-end"
              >
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  <ExternalLink size={18} />
                  View Interactive Prototype
                </a>
              </motion.div>
            )}
          </div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {project.overview}
            </p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Problem
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Solution
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 sm:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
                Key Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-5 sm:p-6 rounded-2xl hover:shadow-lg transition"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>

                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Wireframes */}
          {project.wireframes && project.wireframes.length > 0 && (
            <section className="mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Wireframes
              </h2>

              <p className="text-gray-600 mb-6 sm:mb-8 max-w-3xl text-sm sm:text-base leading-relaxed">
                Early wireframes were created to explore layout structure and
                information hierarchy before moving into visual design.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {project.wireframes.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden bg-gray-50 p-4 sm:p-6"
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Wireframe ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Visuals */}
          {project.images.length >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Visuals
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {project.images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#f5f5f5] bg-gray-50 p-4 sm:p-6"
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} visual ${index + 2}`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* More from my portfolio */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex-1 h-px bg-gray-300" />
            <h2 className="text-[10px] sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-600 font-medium whitespace-nowrap text-center">
              More from my portfolio
            </h2>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/work/${item.slug}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="group block w-full rounded-[24px] bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-4">
                    <div className="rounded-[18px] bg-[#f3f3f3] overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[200px] sm:h-[220px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <h3 className="text-lg sm:text-xl leading-tight font-normal text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
