import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollToTop } from "./ui/ScrollToTop";
import { ArrowUp } from "lucide-react";
export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <img
                src="/src/Pic/SPlogo.png"
                alt="SP Logo"
                className="h-18 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors ${
                    isActive(item.path)
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-5 left-0 right-0 h-0.5 bg-gray-900"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block ${
                      isActive(item.path)
                        ? "text-gray-900 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-[#F5F5F5] mt-20 relative">
        {/* top border เว้นตรงกลาง */}
        <div className="absolute top-0 left-0 w-full h-px bg-gray-200">
          <div className="absolute left-1/2 -translate-x-1/2 w-24 h-px bg-[#F5F5F5]" />
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group absolute left-1/2 -translate-x-1/2 -top-10
             w-24 h-12
             bg-[#F5F5F5]
             border border-gray-200
             border-b-0
             rounded-t-full
             flex items-center justify-center
             hover:bg-gray-100
             hover:-translate-y-1
             transition-all duration-300"
        >
          <ArrowUp
            size={30}
            className="text-gray-600 transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2026 Suratanakorm Permsawadchai.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
