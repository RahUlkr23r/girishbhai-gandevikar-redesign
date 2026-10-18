import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className={`border transition-all duration-300 rounded-xs overflow-hidden ${
              isOpen
                ? 'border-gold-400/40 bg-surface-card/80 shadow-md shadow-gold-950/20'
                : 'border-gold-500/15 bg-surface-card/40 hover:border-gold-500/30'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg sm:text-xl text-warm-100 font-medium">
                {item.q}
              </span>
              <span
                className={`p-1.5 rounded-full border border-gold-400/30 text-gold-300 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 bg-gold-400/10' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-6 sm:px-8 pb-6 pt-2 text-warm-300 leading-relaxed text-sm sm:text-base border-t border-gold-500/10">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
