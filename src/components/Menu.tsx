import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "R&D", path: "/rd" },
    { name: "Product and Tools", path: "/product-tools" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <MenuIcon className="w-6 h-6 text-primary" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999]"
          >
            {/* Close button at top right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <X className="w-8 h-8 text-primary" />
            </button>

            {/* Menu items at bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-16 left-16 space-y-8"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-medium text-white hover:text-primary transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
