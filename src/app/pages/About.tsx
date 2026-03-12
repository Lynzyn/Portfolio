import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, BookOpen, Coffee, Lightbulb } from "lucide-react";

export function About() {
  const tools = [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Framer",
    "Trello",
    "Miro",
    "Adobe Premiere Pro",
  ];

  const experience = [
    {
      role: "THEATRE Website",
      company: "Personal Project",
      period: "2026",
      description:
        "Designed a theatre booking experience including shows detail.",
    },
    {
      role: "Animal Diary",
      company: "Final Project",
      period: "2025",
      description:
        "Designed and build a mobile game for Primary education plays a crucial role in developing skills and preparing children for higher-level learning in the future.",
    },
    {
      role: "Chicken Ready",
      company: "Class Project",
      period: "2022",
      description:
        "Mobile App Design for Professional Chicken Farmers . Created interactive protoypes using figma.",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "User-Centered",
      description:
        "I believe in putting users at the heart of every design decision through research and testing.",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Collaborative",
      description:
        "Great design happens when designers, developers, and stakeholders work together seamlessly.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Continuous Learning",
      description:
        "The design field evolves rapidly, and I'm committed to staying current with the latest trends and tools.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "I strive for pixel-perfect designs that are not only beautiful but also functional and accessible.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Top row */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-8">About Me</h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-[680px]">
                I'm a recent graduate with a passion for UX/UI design and
                creating digital products that make a difference. My journey in
                design started during college when I discovered how design can
                solve real problems and improve people's lives.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed max-w-[680px]">
                I'm eager to bring my skills in user research, prototyping, and
                interface design to a team where I can learn, grow, and
                contribute to meaningful projects.
              </p>
            </motion.div>

            {/* IMG1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-end"
            >
              <div className="w-full max-w-[520px] h-[520px] overflow-hidden -mt-6">
                <ImageWithFallback
                  src="/src/Pic/Me.png"
                  alt="Designer at work"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </motion.div>
          </div>

          {/* Single line */}
          <div className=" h-[1px] w-full rounded-full bg-gray-300"></div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8"
          >
            <div className="w-40 p-2 rounded-2xl bg-white shadow-md">
              <div className="h-28 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/src/Pic/mood2.jpg"
                  alt="img2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-40 p-2 rounded-2xl bg-white shadow-md">
              <div className="h-28 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/src/Pic/realme.png"
                  alt="img3"
                  className="w-full h-full object-cover object-[center_70%]"
                />
              </div>
            </div>

            <div className="w-40 p-2 rounded-2xl bg-white shadow-md">
              <div className="h-28 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/src/Pic/mood.jpg"
                  alt="img4"
                  className="w-full h-full object-cover object-[center_80%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="h-2 bg-gradient-to-b from-black/10 to-transparent"></div>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-16">
          {/* CENTER PIE - mobile first */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full shadow-lg">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "conic-gradient(#d9d9d9 0% 40%, #2c2c2c 40% 100%)",
                }}
              />

              <span className="absolute left-8 top-28 text-white font-semibold text-sm sm:text-base">
                DESIGNER
              </span>

              <span className="absolute right-10 top-16 text-white font-semibold text-sm sm:text-base">
                CODER
              </span>
            </div>
          </div>

          {/* LEFT */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
              Part designer
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-gray-600">
              <li>UI design</li>
              <li>UX design</li>
              <li>Design systems</li>
              <li>Interaction design</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="order-3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
              Part coder
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-gray-600">
              <li>Front-end development</li>
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>Praying to my computer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Projects Experience</h2>
            <p className="text-xl text-gray-600">
              My professional journey in design
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{job.role}</h3>
                    <div className="text-gray-600">{job.company}</div>
                  </div>
                  <div className="text-gray-500">{job.period}</div>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-2 bg-gradient-to-b from-black/10 to-transparent"></div>
      {/* Tools & Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Tools I Use</h2>
            <p className="text-xl text-gray-600">
              My design toolkit for bringing ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-900 hover:shadow-md transition-all"
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Education </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-l-2 border-white/30 pl-6"
            >
              <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
              <p className="text-gray-300">
                Thammasat University • 2020 - 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
