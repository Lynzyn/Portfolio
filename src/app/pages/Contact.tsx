import { motion } from "motion/react";
import { Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:nine121450@hotmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "nine121450@hotmail.com",
      link: "mailto:nine121450@hotmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Ratchaburi, Thailand",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Availability",
      value: "Open to freelance and opportunities",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
              Let&apos;s Connect
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Have a project in mind or just want to chat about design and
              development? I&apos;d love to hear from you. Send me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
                        {info.icon}
                      </div>

                      <div>
                        <div className="mb-1 text-sm text-gray-500">
                          {info.label}
                        </div>

                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-medium transition-colors hover:text-gray-600"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="rounded-2xl bg-gray-50 p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">Quick Response</h3>
                <p className="mb-4 text-gray-600">
                  I usually respond within 24–48 hours. Feel free to send me an
                  email, and I&apos;ll get back to you as soon as possible.
                </p>
                <p className="text-gray-600">
                  Looking forward to connecting with you!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Whether you need a complete redesign or want to improve a specific
              user experience, I&apos;d be happy to help bring your ideas to
              life.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:nine121450@hotmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-gray-900 transition-colors hover:bg-gray-100"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </a>

              <a
                href="/Doc/Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
