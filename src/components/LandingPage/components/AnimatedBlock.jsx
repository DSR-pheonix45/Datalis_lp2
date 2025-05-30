import { motion } from 'framer-motion';

export default function AnimatedBlock({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }} // Increased margin for earlier triggering
      transition={{
        duration: 0.4, // Reduced duration
        delay: delay * 0.5, // Reduced delay multiplier
        ease: [0.21, 1.03, 0.27, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
